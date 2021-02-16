import { RouteComponentProps } from "react-router";
import {IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRange, IonRow, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import React, { useRef, useState } from "react";
import { plainToClass } from "class-transformer";
import { caretForwardCircleOutline } from "ionicons/icons";
import { Howl } from "howler";
import { Surah } from "../../objects/surah";
import { Ayah } from "../../objects/Ayah";
import { dataService } from "../../services/dataService";

export const AyahPage: React.FC<RouteComponentProps<{ surahId: string,firstAyahId:string,lastAyahId:string }>> = ({ match }) => {

    const [surah,setSurah]=useState<Surah>();
    const[fontSize,setFontSize]=useState(14);
    const [ayahs,setAyahs]=useState<Ayah[]>([]);
            
    const loadSurah =()=>{
        setSurah(dataService.getSurahById(+(match.params.surahId)));
        console.log(match.params.surahId)               
        setAyahs(plainToClass(Ayah,dataService.getAyah(+(match.params.surahId),+(match.params.firstAyahId),+(match.params.lastAyahId))));
        
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
  

    const ayahListItems = ayahs.map((ayah) => (
      <IonItem
        key={ayah.id}
        detail={false}
        color="light"
        lines="none"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid>
          <IonRow className="ayah">
            <IonCol size="12">
              <h3 style={{fontSize:fontSize+8}} className="arabic-ayah ion-text-right ion-no-padding">
                {ayah.arabic + getArabicAyahNumber(ayah.id)}
              </h3>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <h3 style={{fontSize:fontSize}} className="translation">{ayah.transliteration}</h3>
            </IonCol>
          </IonRow>
          <IonRow  className="ayah" >
            <IonCol size="12" >
              <h3 style={{fontSize:fontSize}} className="translation">{ayah.translation}</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="2">
              <h4 style={{fontSize:"12px"}} color={surah?.color}>
                {ayah.surahId}:{ayah.id}
              </h4>
            </IonCol>
            <IonCol size="8" className="text-centered" >
              <h4 className="ion-text-center" style={{fontSize:"12px"}} color={surah?.color}>
                Prevod:Besim Korkut
              </h4>
            </IonCol>
            <IonCol size="2">
              
                <IonButton class="no-shadow" onClick={() => {playAyah(ayah.id)}} fill="solid" color="light">
              <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color={surah?.color}/>
              </IonButton>
            
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    ));

    return (
      <IonPage>
        <IonHeader className="ion-no-border standard">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color={surah?.color} defaultHref="/PearlsAyahPage" />
            </IonButtons>
          </IonToolbar>
          
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        
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
              <h6 className="ion-no-padding ion-text-center">
                {match.params.firstAyahId}-{match.params.lastAyahId}
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
          
          <IonList>
              {ayahListItems}
          </IonList>
        </IonContent>
      </IonPage>
    );
}