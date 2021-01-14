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

    const surahRef=useRef<Surah>(new Surah());
    const[fontSize,setFontSize]=useState(14);
    const [ayah,SetAyah]=useState<Ayah[]>([]);
    
    const loadSurah =()=>{
        surahRef.current=dataService.getSurahById(+(match.params.id));
        //setCurrentSurah(plainToClass(Surah,suras.find(surah=>surah.id===+(match.params.id))));
               
        SetAyah(plainToClass(Ayah,dataService.getAyahForSurah(surahRef.current.id)));
        
     };

    useIonViewWillEnter(() => {
        loadSurah();
      });

      const ayahListItems = ayah.map((ayah) => (
        <IonItem key={ayah.id}  detail={false} color="light">
                
                {ayah.id};
                
              </IonItem>
      ));

    return (
      <IonPage>
        <IonHeader className="ion-no-border standard">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/Quran/Reader" />
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
          <IonCard color={surahRef.current.color} className="surah">
            <div className="overlay">
              <img className="mask" src="./assets/images/quran-page.jpg" />
            </div>

            <div>
              <h6 className="note ion-no-padding ion-text-center">
                {surahRef.current?.name}
              </h6>
            </div>
            <div>
              <h6 className="arabic ion-no-padding ion-text-center">
                {surahRef.current?.arabic}
              </h6>
            </div>
          </IonCard>
          <div>
              <IonRange min={14} max={24} color="burgundy" step={2} value={fontSize} style={{ marginLeft: "75px", marginRight: "75px" }} onIonChange={e=>setFontSize(e.detail.value as number)}>
              <IonLabel slot="start" className="ion-no-padding">
                Font
              </IonLabel>
              </IonRange>
          </div>
          <IonList>
              
          </IonList>
        </IonContent>
      </IonPage>
    );
}