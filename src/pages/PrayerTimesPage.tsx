import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonToolbar, useIonViewWillEnter } from "@ionic/react"
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react"
import { timeService } from "../services/TimeService";
import './PrayerTimesPage.css';

const PrayerTimesPage: React.FC = () => {

  const [fajr,setFajr]=useState("");
  const [dhuhr,setDhuhr]=useState("");
  const [asr,setAsr]=useState("");
  const [maghrib,setMaghrib]=useState("");
  const [isha,setIsha]=useState("");

  const getPrayerTimes = () => {
    const prayers=timeService.getPrayertimes();
    console.log(prayers);

    console.log(moment(prayers.fajr).format("h:mm"));

     setFajr(moment(prayers.fajr*1000).format("HH:mm"));
     setDhuhr(moment(prayers.dhuhr*1000).format("HH:mm"));
     setAsr(moment(prayers.asr*1000).format("HH:mm"));
     setMaghrib(moment(prayers.maghrib*1000).format("HH:mm"));
     setIsha(moment(prayers.isha*1000).format("HH:mm"));
  };

 
    useEffect(() => {
      getPrayerTimes();
  }, [getPrayerTimes]);


    
    return (
      <IonPage>
        <IonHeader className="ion-no-border standard">
           <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar> 
        </IonHeader>
        <IonContent className="bg-image-isha" fullscreen>
          <IonItem className="prayer-header">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12" className="ion-no-padding">
                  <h2 className="prayer-header ion-no-padding ion-text-center">
                    Slijedeci namaz
                  </h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" className="ion-no-padding">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    Jacija
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" className="ion-no-padding">
                  <h2 className="prayer-header ion-no-padding ion-text-center">
                    za 52 minute
                  </h2>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

          <IonList className="prayer-details">
            <IonItem>
              <IonLabel slot="start">
                <h1 slot="start" className="prayer-details">
                  Danasnja vaktija
                </h1>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Sabah</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">{fajr}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Podne</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">{dhuhr}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Ikindija</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">{asr}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Aksam</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">{maghrib}</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Jacija</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">{isha}</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default PrayerTimesPage;