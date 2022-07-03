import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";

import { timeService } from "../../services/TimeService";
import { HomeHeader } from "../../components/HomeHeader";
import {DailyRemainder,DailyHadith,DailyAyah} from "../../components";


export const HomePage: React.FC = () => {
  const [period, setPeriod] = useState("");

  useIonViewWillEnter(() => {
    setPeriod("bg-image-" + timeService.getCurrentPeriod());
  });

  return (
    <IonPage>
      <HomeHeader/>
      <IonContent className={period} fullscreen>
        <div style={{marginTop:"75px"}}>
          <DailyRemainder/>
        </div>
        <div>
          <DailyAyah/>
        </div>
        <div>
          <DailyHadith/>
        </div>
      </IonContent>
    </IonPage>
  );
};

