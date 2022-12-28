import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  
  IonPage,
  IonRow,
  
  IonToolbar,
  
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import {
  DailyPrayer,
  timeService,
} from "../../../services/TimeService";
import { translationService } from "../../../services/TranslationService";

const PrayerTimesPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [prayerTimes, setPrayerTimes] = useState<DailyPrayer[]>([]);

  useEffect(() => {
    const getPrayerTimes = async () =>{
      const result = timeService.getPrayerTimesByMonth(currentMonth);
      setPrayerTimes([...result]);
      
    }

    getPrayerTimes();
    
    
  }, [currentMonth]);
  
  
  const previousMonth = () => {setCurrentMonth(previous=>previous-1)};

  const nextMonth = () => {setCurrentMonth(previous=>previous+1)};

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="white" defaultHref="/tabs/PrayerTimes" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className={`bg-image-${timeService.getCurrentPeriod()}`}
        fullscreen
      >
        <IonCard className="prayer ion-padding transparent ion-text-center">
          <h1 style={{ fontSize: "24px", fontWeight: "normal" }}>{translationService.getLabel(`label-month-${currentMonth}`)}</h1>

          <p style={{ fontSize: "18px", fontWeight: "normal" }}>2023</p>
          
        </IonCard>
        <div>
          <IonGrid >
            <IonRow>
              <IonCol size="9">
                {
                  currentMonth>1 &&
                  <IonButton
                  className="pressed no-shadow"
                  onClick={() => {
                    previousMonth();
                  }}
                >
                  {translationService.getLabel("label-previous")}
                </IonButton>
                }
                
              </IonCol>
              <IonCol size="3" className="ion-align-right">
                {
                  currentMonth<12 &&
                    <IonButton
                    className="pressed no-shadow"
                    onClick={() => {
                      nextMonth();
                    }}
                  >
                    {translationService.getLabel("label-next")}
                  </IonButton>
                }
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div >
          <IonGrid className="monthly-prayers">
            <IonRow>
              <IonCol>Datum</IonCol>
              <IonCol>Sabah</IonCol>
              <IonCol>Podne</IonCol>
              <IonCol>Ikindija</IonCol>
              <IonCol>Aksam</IonCol>
              <IonCol>Jacija</IonCol>
            </IonRow>
            { prayerTimes.length>0 && prayerTimes.map((day,index)=>(
              <IonRow>

              <IonCol>{prayerTimes[index].day}</IonCol>
              <IonCol>{prayerTimes[index].fajr}</IonCol>
              <IonCol>{prayerTimes[index].dhuhr}</IonCol>
              <IonCol>{prayerTimes[index].asr}</IonCol>
              <IonCol>{prayerTimes[index].maghrib}</IonCol>
              <IonCol>{prayerTimes[index].isha}</IonCol>
              </IonRow>
            ))

            }
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrayerTimesPage;
