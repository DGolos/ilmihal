import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { PrayersProps, timeService } from "../../../services/TimeService";
import { translationService } from "../../../services/TranslationService";

const PrayerTimesPage: React.FC = () => {
  const[prayers,setPrayers]=useState<PrayersProps>();
 
  const getPrayerTimes = () => {
    setPrayers(timeService.getPrayertimes());
    
    console.log(prayers?.headers);
  };

  useEffect(() => {
    getPrayerTimes();
  },[]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={`bg-image-${ prayers?.period}`} fullscreen>
        <IonCard className="prayer ion-padding transparent ion-text-center">
          
            <h1 style={{fontSize:"24px"}}>
              {translationService.getLabel(prayers?.headers[0]!)}
            </h1>
          
           
              <h1 style={{fontSize:"24px"}} hidden={prayers?.headers.length===1}>
                {prayers?.headers.length!>1?translationService.getLabel(prayers?.headers[1]!):""}
              </h1>
              <p hidden={prayers?.headers.length!<3} style={{fontSize:"18px",fontWeight:"bold"}}>
              {prayers?.headers.length!>2?prayers?.headers[2]!:""}
              </p>
           
        
        </IonCard>
        <div className="ion-padding">
          <IonList>
            <IonItem lines="full">
              <IonText slot="start" >
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-beginning-fasting')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.startOfFast}</h2>
              </IonText>
            </IonItem>

            <IonItem lines="full">
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-fajr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.fajr}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full">
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-dhuhr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.dhuhr}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full">
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-asr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.asr}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full">
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-maghrib-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.maghrib}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full">
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-isha-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 style={{fontSize:"16px"}}>{prayers?.isha}</h2>
              </IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrayerTimesPage;
