import { RouteComponentProps } from "react-router";
import {IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRange, IonRow, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import React, { useState } from "react";
import { Surah } from "../../../objects/Surah";
import { dataService } from "../../../services/dataService";
import { Ayah } from "../../../objects/Ayah";
import { plainToClass } from "class-transformer";
import { caretForwardCircleOutline } from "ionicons/icons";
import { Howl } from "howler";
import { translationService } from "../../../services/TranslationService";

export const QuranReaderPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const [surah,setSurah]=useState<Surah>();
    const[fontSize,setFontSize]=useState(14);
    const [ayah,setAyah]=useState<Ayah[]>([]);
    const[showArabic,setShowArabic]=useState(true);
    const[showTranslation,setShowTranslation]=useState(true);
    const[showTransliteration,setShowTransliteration]=useState(true);
    const [bismillah,setBismillah]=useState("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ");
    const[translator,setTranslator]=useState("");
    
    const loadSurah =()=>{
        setSurah(dataService.getSurahById(+(match.params.id)));
                       
        setAyah(plainToClass(Ayah,dataService.getAyahForSurah(+(match.params.id))));
        setTranslator(translationService.getLabel('label-translator'));
     };

     

    useIonViewWillEnter(() => {
        loadSurah();
      });

      const getArabicAyahNumber = (id: number): string => {
        let ret = "";
        const num=id.toString();
  
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


    const playAyah = (ayahId: number) => {
      const player = new Howl({
        src: `/assets/audio/Mishary/${surah?.id}/${ayahId}.mp3`,format:["mp3"]
      });
      
      player.play();
    };
  

    const ayahListItems = ayah.map((ayah) => (
      <IonItem
        hidden={showArabic === false && showTranslation === false && showTransliteration === false}
        key={ayah.id}
        detail={false}
        color="light"
        lines="none"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid>
          <IonRow hidden={showArabic === false}>
            <IonCol size="12">
              <h3 style={{fontSize:fontSize+20}} className="arabic-ayah ion-text-right ion-no-padding">
                {ayah.arabic + getArabicAyahNumber(ayah.id)}
              </h3>
            </IonCol>
          </IonRow>
          <IonRow hidden={showTransliteration === false}>
            <IonCol size="12">
              <h3 style={{fontSize:fontSize}} className="translation">{ayah.transliteration}</h3>
            </IonCol>
          </IonRow>
          <IonRow  hidden={showTranslation === false}>
            <IonCol size="12" >
              <h3 style={{fontSize:fontSize}} className="translation">{translationService.getLabel(`label-surah${surah?.id}-ayah${ayah.id}`)}</h3>
            </IonCol>
          </IonRow>
          <IonRow className={`border-top-${surah?.color}`}>
            <IonCol size="2">
              <h4 className={`ayah-details-${surah?.color}`}>
                {ayah.surahId}:{ayah.id}
              </h4>
            </IonCol>
            <IonCol size="8" className="text-centered" >
              <h4 className={`ayah-details-${surah?.color} ion-text-center`} color={surah?.color} hidden={showTranslation === false}>
                {translator}
              </h4>
            </IonCol>
            <IonCol size="2">
              
                <IonButton className="no-shadow" onClick={() => {playAyah(ayah.id)}} fill="solid" color="light">
              <IonIcon slot="icon-only" icon={caretForwardCircleOutline} color={surah?.color}/>
              </IonButton>
            
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    ));
      
    return (
      <IonPage>
        <IonHeader className="ion-no-border standard">
          <IonToolbar >
            <IonButtons slot="start">
              <IonBackButton color={surah?.color} defaultHref="/Quran/Reader" />
            </IonButtons>
          </IonToolbar>
          
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonGrid>
            <IonRow >
              <IonCol size="4">
                <IonButton
                  color={showArabic?surah?.color:"button"}
                  expand="block"
                  onClick={() => {setShowArabic(showArabic=>!showArabic)}}
                  className="no-shadow"
                >
                  <IonLabel color={showArabic?"light":surah?.color} className="ion-text-center">
                    {translationService.getLabel('label-header-arabic')}
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color={showTranslation?surah?.color:"button"}
                  className="no-shadow"
                  expand="block"
                  onClick={() => {setShowTranslation(showTranslation=>!showTranslation)}}
                >
                  <IonLabel color={showTranslation?"light":surah?.color} className="ion-text-center">
                  {translationService.getLabel('label-header-translation')}
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color={showTransliteration?surah?.color:"button"}
                  className="no-shadow"
                  expand="block"
                  onClick={() => {setShowTransliteration(showTransliteration=>!showTransliteration)}}
                >
                  <IonLabel color={showTransliteration?"light":surah?.color} className="ion-text-center">
                  {translationService.getLabel('label-header-transcription')}
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonCard color={surah?.color} className="surah">
            <div className="overlay">
              <img className="mask" src="./assets/images/quran-page.jpg" />
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
              <IonRange min={14} max={24} color={surah?.color} step={2} value={fontSize} style={{ marginLeft: "75px", marginRight: "75px" }} onIonChange={e=>setFontSize(e.detail.value as number)}>
              <IonLabel slot="start" className="ion-no-padding">
                Velicina teksta
              </IonLabel>
              </IonRange>
          </div>
          <IonCard className="prayer ion-text-center" hidden={surah?.id===1} color="light" style={{ marginLeft: "15px", marginRight: "15px" }}>
            <h3 style={{fontSize:fontSize+20}} className="arabic-ayah ion-no-padding">
                {bismillah}
              </h3>
          </IonCard>
          <IonList>
              {ayahListItems}
          </IonList>
        </IonContent>
      </IonPage>
    );
}