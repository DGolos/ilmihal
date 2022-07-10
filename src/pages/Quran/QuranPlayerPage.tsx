import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRange,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline, pauseOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { MenuButton } from "../../components";
import { QuranPlayerChapterHeader } from "../../components/Quran/QuranPlayerChapterHeader";
import { QuranChapter, quranChapters } from "../../data/QuranChapters";
import { QuranVerse, quranVerses } from "../../data/QuranVerses";
import useTranslation from "../../hooks/useTranslation";


export const QuranPlayerPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
    const {translate}=useTranslation();
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const playerRef=useRef(new Howl({src:[""]}));
  const [isPlaying,setIsPlaying]=useState(false);
  const [isLoaded,setIsLoaded]=useState(false);
  const [chapter, setSChapter] = useState<QuranChapter>();
  const [verses, setVerses] = useState<QuranVerse[]>([]);
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [fontSize, setFontSize] = useState(14);
  const [currentVerse,setCurrentVerse]=useState(-1);   

  useEffect(() => {
    setSChapter(
      quranChapters.find((chapter) => {
        return chapter.id === +match.params.id;
      })
    );
    setVerses(
        quranVerses.filter((verse) => {
          return verse.chapterId=== +match.params.id;
        })
      );
      return ()=>{
        playerRef.current.unload();
      };
   
  }, [match.params.id]);


  const getArabicAyahNumber = (id: number): string => {
    let ret = "";
    const num = id.toString();

    for (let i = 0; i < num.length; i++) {
      switch (num.charAt(i)) {
        case "0":
          ret += "\u0660";
          break;
        case "1":
          ret += "\u0661";
          break;
        case "2":
          ret += "\u0662";
          break;
        case "3":
          ret += "\u0663";
          break;
        case "4":
          ret += "\u0664";
          break;
        case "5":
          ret += "\u0665";
          break;
        case "6":
          ret += "\u0666";
          break;
        case "7":
          ret += "\u0667";
          break;
        case "8":
          ret += "\u0668";
          break;
        case "9":
          ret += "\u0669";
          break;
      }
    }
    return ret;
  };

  const scrollToAyah=(id:number)=>{
    let y=document.getElementById(id.toString())?.offsetTop;
    contentRef.current && contentRef.current.scrollToPoint(0,y);
  }

  const playlist=(id:number)=>{
    if(isPlaying){
      playerRef.current.unload();
    }
    scrollToAyah(id);
    let count=0;
    let current=id;
    setCurrentVerse(current);
    const ayahToPlay=verses.filter(verse=>+(verse.id)>=id);
    let howlerBank=[new Howl({src:[""]})];
    howlerBank.pop();

            
    const onEnd=()=>{
        count=count+1;
        current=current+1;
        if(count<ayahToPlay.length){
            setCurrentVerse(current);
            scrollToAyah(current);
            playerRef.current=howlerBank[count];
            playerRef.current.play();
        }
        else{
            setIsPlaying(false);
            setCurrentVerse(-1);
        }
       
    }
    
    
    verses.forEach((current,i)=>{
        const ayah=ayahToPlay[i];
        
        howlerBank.push(new Howl({
            src:`/assets/audio/Mishary/${ayah?.chapterId}/${ayah?.id}.mp3`,
           
            onend:onEnd
            
        }
        ))
    })
    
    
    playerRef.current=howlerBank[count];
    playerRef.current.play();
    setIsPlaying(true);
    setIsLoaded(true);
    
}

const toglePlayPause=()=>{
    if(isLoaded===false){
        playlist(1);
    }
    else{
        if(isPlaying){
            playerRef.current.pause();
            setIsPlaying(false);
        }
        else{
            setIsPlaying(true);
            playerRef.current.play();
        }
    }
};

  const quranVerseListItems = verses.map((verse) => (
    <IonItem
      hidden={
        showArabic === false &&
        showTranslation === false &&
        showTransliteration === false
      }
      key={verse.id}
      id={verse.id.toString()}
      detail={false}
      lines="none"
      style={{ marginLeft: "10px", marginRight: "10px" }}
      className={`${verse.id===currentVerse?`border-${chapter?.color} lesson-note`:"lesson-note"}`}
    >
      <IonGrid>
        <IonRow hidden={showArabic === false}>
          <IonCol size="12">
            <h3
              style={{ fontSize: fontSize + 20 }}
              className="arabic-ayah ion-text-right ion-no-padding"
            >
              {verse.arabic + getArabicAyahNumber(verse.id)}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow hidden={showTransliteration === false}>
          <IonCol size="12">
            <h3 style={{ fontSize: fontSize }} className="translation">
              {verse.transliteration}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow hidden={showTranslation === false}>
          <IonCol size="12">
            <h3 style={{ fontSize: fontSize }} className="translation">
              {translate(
                `label-quran-chapter${chapter?.id}-verse${verse.id}`
              )}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow className={`border-top-${chapter?.color}`} hidden={verse.id===currentVerse}>
          <IonCol size="2">
            <h4 className={`ayah-details-${chapter?.color}`}>
              {verse.chapterId}:{verse.id}
            </h4>
          </IonCol>
          <IonCol size="8" className="text-centered">
            <h4
              className={`ayah-details-${chapter?.color} ion-text-center`}
              color={chapter?.color}
              hidden={showTranslation === false}
            >
              {translate('label-quran-translator')}
            </h4>
          </IonCol>
          <IonCol size="2">
            <IonButton
              className="no-shadow white"
              onClick={() => {
                playlist(verse.id)
              }}
              fill="solid"
              
            >
              <IonIcon
                slot="icon-only"
                icon={caretForwardCircleOutline}
                color={chapter?.color}
              />
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className={`border-top-${chapter?.color} align-items-center`} hidden={verse.id!==currentVerse} >
          <IonCol size="5">

          </IonCol>
          <IonCol size="2">
            <IonButton
              className="no-shadow white"
              onClick={() => {
                toglePlayPause()
              }}
              fill="solid"
              
            >
              <IonIcon
                slot="icon-only"
                icon={isPlaying?pauseOutline:caretForwardCircleOutline}
                color={chapter?.color}
              />
            </IonButton>
          </IonCol>
          <IonCol size="5">

          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  ));


  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              color={chapter?.color}
              defaultHref="/tabs/Quran/Reader"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        ref={contentRef}
        className="bg-image-standard"
        scrollEvents={true}
        onIonScroll={() => {}}
        onIonScrollStart={() => {}}
        onIonScrollEnd={() => {}}
        fullscreen
      >
        <div>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <MenuButton
                  label="Arapski"
                  color="Burgundy"
                  isActive={showArabic === false}
                  onClick={() => {
                    setShowArabic((showArabic) => !showArabic);
                  }}
                />
              </IonCol>
              <IonCol size="4">
                <MenuButton
                  label="Prijevod"
                  color="Burgundy"
                  isActive={showTranslation === false}
                  onClick={() => {
                    setShowTranslation((showTranslation) => !showTranslation);
                  }}
                />
              </IonCol>
              <IonCol size="4">
                <MenuButton
                  label="Transkripcija"
                  color="Burgundy"
                  isActive={showTransliteration === false}
                  onClick={() => {
                    setShowTransliteration(
                      (showTransliteration) => !showTransliteration
                    );
                  }}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <QuranPlayerChapterHeader chapter={chapter!} />
        <div>
          <IonRange
            min={14}
            max={24}
            color={chapter?.color}
            step={2}
            value={fontSize}
            style={{ marginLeft: "75px", marginRight: "75px" }}
            onIonChange={(e) => setFontSize(e.detail.value as number)}
          >
            <IonLabel slot="start" className="ion-no-padding black" style={{fontSize:"14px"}}>
            {translate("label-header-font-size")}
            </IonLabel>
          </IonRange>
        </div>
        <IonList className="transparent">{quranVerseListItems}</IonList>
      </IonContent>
    </IonPage>
  );
};
