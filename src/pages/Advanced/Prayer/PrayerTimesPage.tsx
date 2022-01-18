import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonText,
  useIonViewWillEnter
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { PrayersProps, timeService } from "../../../services/TimeService";
import { translationService } from "../../../services/TranslationService";

const PrayerTimesPage: React.FC = () => {
  const[prayers,setPrayers]=useState<PrayersProps>();
  const history=useHistory();
  
  
  const changeLocation=()=>{
    history.push("/tabs/LocationOptionsPage");
  }
  const showMonthly=()=>{
    history.push("/tabs/MonthlyPrayerTimes");
  }

  useIonViewWillEnter(() => {
    timeService.getPrayertimes().then((data)=>{
      setPrayers(data);
    })
  });
    

  return (
    <IonPage>
      
      <IonContent className={`bg-image-${ prayers?.period}`} fullscreen>
        <IonCard className="prayer ion-padding transparent ion-text-center">
          
            <h1 style={{fontSize:"24px",fontWeight:"normal"}}>
              {translationService.getLabel(prayers?.headers[0]!)}
            </h1>
          
           
              <h1 style={{fontSize:"24px",fontWeight:"normal"}} hidden={prayers?.headers.length===1}>
                {prayers?.headers.length!>1?translationService.getLabel(prayers?.headers[1]!):""}
              </h1>
              <p hidden={prayers?.headers.length!<3} style={{fontSize:"18px",fontWeight:"normal"}}>
              {prayers?.headers.length!>2?prayers?.headers[2]!:""}
              </p>
           
        
        </IonCard>
        <div >
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonText className="white" style={{fontSize:"18px",fontWeight:"normal"}}>{prayers?.city}, {prayers?.country==="BA"?"Bosna i Hercegovina":"Norge"}</IonText>
              </IonCol>
              <IonCol size="3">
                <IonButton className="pressed no-shadow" onClick={() => {
                  changeLocation();
                }}>
                  {translationService.getLabel('label-change-location')}
                  </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton className="pressed no-shadow" onClick={() => {
                  showMonthly();
                }}>
                  {translationService.getLabel('label-monthly_prayer-times')}
                  </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-padding">
          <IonList className="white">
            <IonItem lines="full" className="lesson-note" key="1">
              <IonText slot="start" >
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-beginning-fasting')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.startOfFast}</h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="2">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-fajr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.fajr}</h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="3">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-sunrise')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.sunrise}</h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="4">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-dhuhr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.dhuhr}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="5">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-asr-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.asr}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="6">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-maghrib-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.maghrib}</h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="7">
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-isha-prayer')}</h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{fontSize:"16px"}}>{prayers?.isha}</h2>
              </IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrayerTimesPage;


