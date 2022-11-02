import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";

import { timeService } from "../../services/TimeService";
import { HomeHeader } from "../../components/HomeHeader";
import {DailyRemainder,DailyHadith,DailyAyah} from "../../components";
import usePrayerTimes from "../../hooks/usePrayerTimes";


export const HomePage: React.FC = () => {
  const {currentPeriod}=usePrayerTimes(new Date().getDay());


  return (
    <IonPage>
      <HomeHeader/>
      <IonContent className={`bg-image-${currentPeriod}`} fullscreen>
        <div style={{marginTop:"75px"}}>
          <DailyRemainder/>
        </div>
        <div style={{marginTop:"100px"}}>
          <DailyAyah/>
        </div>
        <div>
          <DailyHadith/>
        </div>
      </IonContent>
    </IonPage>
  );
};

