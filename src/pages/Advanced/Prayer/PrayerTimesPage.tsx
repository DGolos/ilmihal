import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import React, { useState } from "react";
import { useHistory } from "react-router";
import PrayerCountdown from "../../../components/prayer/PrayerCountdown";
import useBackground from "../../../hooks/useBackground";
import { PrayersProps, timeService } from "../../../services/TimeService";
import { translationService } from "../../../services/TranslationService";


const PrayerTimesPage: React.FC = () => {
  const [prayers, setPrayers] = useState<PrayersProps>();
  const currentPeriod=useBackground();
  const history = useHistory();

  const changeLocation = () => {
    history.push("/tabs/LocationOptionsPage");
  };
  const showMonthly = () => {
    history.push("/tabs/MonthlyPrayerTimes");
  };

  useIonViewWillEnter(() => {
    
    timeService.getPrayertimes().then((data) => {
      setPrayers(data);
      });
      
  });

  
  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              className="pressed no-shadow"
              onClick={() => {
                changeLocation();
              }}
            >
              <IonText color="light">
                {translationService.getLabel("label-change-location")}
              </IonText>
            </IonButton>
            <IonButton
              className="pressed no-shadow"
              onClick={() => {
                showMonthly();
              }}
              hidden={prayers?.country === "BA" }
            >
              <IonText color="light">
                {translationService.getLabel("label-monthly_prayer-times")}
              </IonText>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={`bg-image-${currentPeriod}`} fullscreen>
        <IonCard className="prayer ion-padding transparent ion-text-center" style={{ marginTop: "40px"}}>
          <h1
            style={{ fontSize: "28px", fontWeight: "bold" }}
            
          >
            {translationService.getLabel(prayers?.headers[0]!)}
              
          </h1>
          <PrayerCountdown/>
        </IonCard>
        <div>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonText
                  className="white"
                  style={{ fontSize: "18px", fontWeight: "normal" }}
                >
                  {prayers?.city},{" "}
                  {prayers?.country === "BA" ? "Bosna i Hercegovina" : "Norge"}
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-no-padding">
          <IonList className="white" style={{ marginLeft: "10px", marginRight: "10px" }}>
            <IonItem lines="full" className="lesson-note" key="1">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-beginning-fasting")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.startOfFast}
                </h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="2">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-fajr-prayer")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.fajr}
                </h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="3">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-sunrise")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.sunrise}
                </h2>
              </IonText>
            </IonItem>

            <IonItem lines="full" className="lesson-note" key="4">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-dhuhr-prayer")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.dhuhr}
                </h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="5">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-asr-prayer")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.asr}
                </h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="6">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-maghrib-prayer")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.maghrib}
                </h2>
              </IonText>
            </IonItem>
            <IonItem lines="full" className="lesson-note" key="7">
              <IonText slot="start">
                <h2
                  className="black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {translationService.getLabel("label-isha-prayer")}
                </h2>
              </IonText>
              <IonText slot="end">
                <h2 className="black" style={{ fontSize: "16px" }}>
                  {prayers?.isha}
                </h2>
              </IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrayerTimesPage;