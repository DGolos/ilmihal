import { RouteComponentProps } from "react-router";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
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
  useIonViewDidLeave
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { Surah } from "../../../objects/Surah";
import { dataService } from "../../../services/dataService";
import { Ayah } from "../../../objects/Ayah";
import { plainToClass } from "class-transformer";
import { caretForwardCircleOutline, pauseOutline } from "ionicons/icons";
import { Howl } from "howler";
import { translationService } from "../../../services/TranslationService";

export const QuranReaderPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [isPlaying,setIsPlaying]=useState(false);
  const [isLoaded,setIsLoaded]=useState(false);
  const [surah, setSurah] = useState<Surah>();
  const [fontSize, setFontSize] = useState(14);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [currentAyah,setCurrentAyah]=useState(-1);   
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const playerRef=useRef(new Howl({src:[""]}));
  const [bismillah] = useState(
    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
  );
  const [translator, setTranslator] = useState("");
  const contentRef = useRef<HTMLIonContentElement | null>(null);

  
  useEffect(() => {
    setSurah(dataService.getSurahById(+(match.params.id)));
    setAyahs(plainToClass(Ayah, dataService.getAyahForSurah(+match.params.id)));
    setTranslator(translationService.getLabel("label-translator"));

  },[match.params.id]);
  
  useIonViewDidLeave(() => {
    playerRef.current.unload();
  });

  

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
    setCurrentAyah(current);
    const ayahToPlay=ayahs.filter(ayah=>+(ayah.id)>=id);
    let howlerBank=[new Howl({src:[""]})];
    howlerBank.pop();

            
    const onEnd=()=>{
        count=count+1;
        current=current+1;
        if(count<ayahToPlay.length){
            setCurrentAyah(current);
            scrollToAyah(current);
            playerRef.current=howlerBank[count];
            playerRef.current.play();
        }
        else{
            setIsPlaying(false);
            setCurrentAyah(-1);
        }
       
    }
    
    
    ayahs.forEach((current,i)=>{
        const ayah=ayahToPlay[i];
        
        howlerBank.push(new Howl({
            src:`/assets/audio/Mishary/${ayah?.surahId}/${ayah?.id}.mp3`,
           
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

  const ayahListItems = ayahs.map((ayah) => (
    <IonItem
      hidden={
        showArabic === false &&
        showTranslation === false &&
        showTransliteration === false
      }
      key={ayah.id}
      id={ayah.id.toString()}
      detail={false}
      lines="none"
      style={{ marginLeft: "15px", marginRight: "15px" }}
      className={`${ayah.id===currentAyah?`border-${surah?.color} lesson-note`:"lesson-note"}`}
    >
      <IonGrid>
        <IonRow hidden={showArabic === false}>
          <IonCol size="12">
            <h3
              style={{ fontSize: fontSize + 20 }}
              className="arabic-ayah ion-text-right ion-no-padding"
            >
              {ayah.arabic + getArabicAyahNumber(ayah.id)}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow hidden={showTransliteration === false}>
          <IonCol size="12">
            <h3 style={{ fontSize: fontSize }} className="translation">
              {ayah.transliteration}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow hidden={showTranslation === false}>
          <IonCol size="12">
            <h3 style={{ fontSize: fontSize }} className="translation">
              {translationService.getLabel(
                `label-surah${surah?.id}-ayah${ayah.id}`
              )}
            </h3>
          </IonCol>
        </IonRow>
        <IonRow className={`border-top-${surah?.color}`} hidden={ayah.id===currentAyah}>
          <IonCol size="2">
            <h4 className={`ayah-details-${surah?.color}`}>
              {ayah.surahId}:{ayah.id}
            </h4>
          </IonCol>
          <IonCol size="8" className="text-centered">
            <h4
              className={`ayah-details-${surah?.color} ion-text-center`}
              color={surah?.color}
              hidden={showTranslation === false}
            >
              {translator}
            </h4>
          </IonCol>
          <IonCol size="2">
            <IonButton
              className="no-shadow white"
              onClick={() => {
                playlist(ayah.id)
              }}
              fill="solid"
              
            >
              <IonIcon
                slot="icon-only"
                icon={caretForwardCircleOutline}
                color={surah?.color}
              />
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className={`border-top-${surah?.color} align-items-center`} hidden={ayah.id!==currentAyah} >
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
                color={surah?.color}
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
            <IonBackButton color={surah?.color} defaultHref="/tabs/Quran/Reader" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="bg-image-standard" scrollEvents={true} onIonScroll={()=>{}} onIonScrollStart={()=>{}} onIonScrollEnd={()=>{}} fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton
                color={showArabic ? surah?.color : "button"}
                expand="block"
                onClick={() => {
                  setShowArabic((showArabic) => !showArabic);
                }}
                className="no-shadow"
              >
                <IonLabel
                  color={showArabic ? "light" : surah?.color}
                  className="ion-text-center"
                >
                  {translationService.getLabel("label-header-arabic")}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                color={showTranslation ? surah?.color : "button"}
                className="no-shadow"
                expand="block"
                onClick={() => {
                  setShowTranslation((showTranslation) => !showTranslation);
                }}
              >
                <IonLabel
                  color={showTranslation ? "light" : surah?.color}
                  className="ion-text-center"
                >
                  {translationService.getLabel("label-header-translation")}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                color={showTransliteration ? surah?.color : "button"}
                className="no-shadow"
                expand="block"
                onClick={() => {
                  setShowTransliteration(
                    (showTransliteration) => !showTransliteration
                  );
                }}
              >
                <IonLabel
                  color={showTransliteration ? "light" : surah?.color}
                  className="ion-text-center"
                >
                  {translationService.getLabel("label-header-transcription")}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard color={surah?.color} className="surah">
          <div className="overlay">
            <img className="mask" src="./assets/images/quran-page.jpg" alt=""/>
          </div>

          <div>
            <h6 className="note ion-no-padding ion-text-center">
              {surah?.name}
            </h6>
          </div>
          <div>
            <h6 className="arabic ion-no-padding ion-text-center">
              {surah?.arabic}
            </h6>
          </div>
        </IonCard>
        <div>
          <IonRange
            min={14}
            max={24}
            color={surah?.color}
            step={2}
            value={fontSize}
            style={{ marginLeft: "75px", marginRight: "75px" }}
            onIonChange={(e) => setFontSize(e.detail.value as number)}
          >
            <IonLabel slot="start" className="ion-no-padding black" style={{fontSize:"14px"}}>
            {translationService.getLabel("label-header-font-size")}
            </IonLabel>
          </IonRange>
        </div>
        <IonCard
          className="prayer ion-text-center"
          hidden={surah?.id === 1}
          color="light"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        >
          <h3
            style={{ fontSize: fontSize + 20 }}
            className="arabic-ayah ion-no-padding"
          >
            {bismillah}
          </h3>
        </IonCard>
        <IonList className="transparent">{ayahListItems}</IonList>
      </IonContent>
      
    </IonPage>
  );
};
