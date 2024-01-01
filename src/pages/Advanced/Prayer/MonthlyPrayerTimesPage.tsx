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
  
  IonText,
  
  IonToolbar,
  
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import useBackground from "../../../hooks/useBackground";

import {
  DailyPrayerShort,
  timeService,
} from "../../../services/TimeService";
import { translationService } from "../../../services/TranslationService";

const PrayerTimesPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [prayerTimes, setPrayerTimes] = useState<DailyPrayerShort[]>([]);
  const currentPeriod=useBackground();
  const currentYear=new Date().getFullYear();

  useEffect(() => {
    const getPrayerTimes = async () =>{
      const result = await timeService.getPrayerTimesByMonth(currentMonth);
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
        className={`bg-image-${currentPeriod}`} fullscreen
      >
        <IonCard className="prayer ion-padding transparent ion-text-center">
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{translationService.getLabel(`label-month-${currentMonth}`)}</h1>

          <p style={{ fontSize: "18px", fontWeight: "normal" }}>{currentYear}</p>
          
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
              <IonCol><IonText style={{ fontSize:"12px",color:"black"}}>Datum</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>Sabah</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>Podne</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>Ikindija</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>Aksam</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>Jacija</IonText></IonCol>
            </IonRow>
            { prayerTimes.length>0 && prayerTimes.map((day,index)=>(
              <IonRow>

              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{index+1}</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{prayerTimes[index].fajr}</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{prayerTimes[index].dhuhr}</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{prayerTimes[index].asr}</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{prayerTimes[index].maghrib}</IonText></IonCol>
              <IonCol><IonText style={{fontSize:"12px",color:"black"}}>{prayerTimes[index].isha}</IonText></IonCol>
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
