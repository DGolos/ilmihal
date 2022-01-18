import React, { useState } from "react";
import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  useIonViewWillEnter,
} from "@ionic/react";

import { timeService } from "../services/TimeService";
import { translationService } from "../services/TranslationService";

const HomePage: React.FC = () => {
  const [period, setPeriod] = useState("");

  useIonViewWillEnter(() => {
    setPeriod("bg-image-" + timeService.getCurrentPeriod());
  });

  return (
    <IonPage>
      <IonHeader className="ion-no-border" style={{ padding: "15px" }}>
        <IonText style={{ color: "white", fontSize: "18px" }}>
          <p>{timeService.getFormattedDate()}</p>
          <p>{timeService.getFormattedIslamicDate()}</p>
        </IonText>
      </IonHeader>
      <IonContent className={period} fullscreen>
        <div className="center">
          
         
          <IonItem className="welcome" lines="none">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h1 className="ion-no-padding ion-text-center">
                    Es-selamu alejkum
                  </h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h5
                    className="ion-no-padding ion-text-center"
                    style={{ fontStyle: "italic" }}
                  >
                    {translationService.getLabel("label-welcome-hadeeth")}
                  </h5>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <p
                    className="ion-no-padding ion-text-center"
                    style={{ fontStyle: "italic" }}
                  >
                    - Resulullah Muhammed
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonGrid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <IonRow>
              <IonCol size="6">
                <IonItem
                  key="1"
                  routerLink={`/tabs/BookOneMainPage`}
                  lines="none"
                  detail={false}
                  className="lesson welcome"
                >
                  <IonAvatar slot="start" className="lesson">
                    <IonLabel style={{ marginTop: 7 }}>
                      <h4>1</h4>
                    </IonLabel>
                  </IonAvatar>
                  <IonNote className="ion-padding-start ion-text-center">
                    <h4>{translationService.getLabel("label-book1-title")}</h4>
                  </IonNote>
                </IonItem>
              </IonCol>
              <IonCol size="6">
                <IonItem
                  key="2"
                  routerLink={`/tabs/BookTwoMainPage`}
                  lines="none"
                  detail={false}
                  className="lesson welcome"
                >
                  <IonAvatar slot="start" className="lesson">
                    <IonLabel style={{ marginTop: 7 }}>
                      <h4>2</h4>
                    </IonLabel>
                  </IonAvatar>
                  <IonNote className="ion-padding-start ion-text-center">
                    <h4>{translationService.getLabel("label-book2-title")}</h4>
                  </IonNote>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
