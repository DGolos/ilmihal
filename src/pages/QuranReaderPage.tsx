import { RouteComponentProps } from "react-router";
import {IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRange, IonRow, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import React, { useRef, useState } from "react";
import './QuranReaderPage.css';
import { Surah } from "../objects/Surah";
import { dataService } from "../services/dataService";
import { setConstantValue } from "typescript";
import { Ayah } from "../objects/Ayah";
import { plainToClass } from "class-transformer";

export const QuranReaderPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const [surah,setSurah]=useState<Surah>();
    const[fontSize,setFontSize]=useState(14);
    const [ayah,SetAyah]=useState<Ayah[]>([]);
    
    const loadSurah =()=>{
        setSurah(dataService.getSurahById(+(match.params.id)));
                       
        SetAyah(plainToClass(Ayah,dataService.getAyahForSurah(+(match.params.id))));
        
     };

     

    useIonViewWillEnter(() => {
        loadSurah();
      });

    const ayahListItems = ayah.map((ayah) => (
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
          {ayah.arabic}
          </IonCol>
          
        </IonRow>
        <IonRow className="ayah">
          <IonCol size="12">
          {ayah.transliteration}
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol size="12">
          {ayah.translation}
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
              <IonBackButton color={surah?.color} defaultHref="/Quran/Reader" />
            </IonButtons>
          </IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonButton
                  color="brown"
                  shape="round"
                  expand="full"
                  onClick={() => {}}
                >
                  <IonLabel color="light" className="ion-text-center">
                    Arapski
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color="brown"
                  shape="round"
                  expand="full"
                  onClick={() => {}}
                >
                  <IonLabel color="light" className="ion-text-center">
                    Prevod
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color="brown"
                  shape="round"
                  expand="full"
                  onClick={() => {}}
                >
                  <IonLabel color="light" className="ion-text-center">
                    Transkripcija
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
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
              <h6 className="arabic ion-no-padding ion-text-center">
                {surah?.arabic}
              </h6>
            </div>
          </IonCard>
          <div>
              <IonRange min={14} max={24} color={surah?.color} step={2} value={fontSize} style={{ marginLeft: "75px", marginRight: "75px" }} onIonChange={e=>setFontSize(e.detail.value as number)}>
              <IonLabel slot="start" className="ion-no-padding">
                Font
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