import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { translationService } from "../../../services/TranslationService";

export const VoluntaryPrayersPage: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="razimic" defaultHref="/tabs/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: "20px" }}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  color={current === 1 ? "button" : "brown"}
                  expand="block"
                  onClick={() => setCurrent(1)}
                  className="no-shadow"
                >
                  <IonText color={current===1?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                    {translationService.getLabel(
                      "label-header-communal-prayer"
                    )}
                  </IonText>
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton
                  color={current === 2 ? "button" : "brown"}
                  expand="block"
                  onClick={() => setCurrent(2)}
                  className="no-shadow"
                >
                  <IonText color={current===2?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                    {translationService.getLabel(
                      "label-header-individual-prayer"
                    )}
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-padding" id="communal" hidden={current !== 1}>
          <IonItem
            lines="none"
            color="razimic"
            routerLink={`/tabs/JummahPrayerPage`}
            key="1"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book2-lesson14-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book2-lesson14-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
          <IonItem
            lines="none"
            color="burgundy"
            routerLink={`/tabs/EidPrayerPage`}
            key="2"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book2-lesson11-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book2-lesson11-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
          <IonItem
            lines="none"
            color="purple"
            routerLink={`/tabs/TarawihPrayerPage`}
            key="3"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book2-lesson13-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book2-lesson13-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
          <IonItem
            lines="none"
            color="dark-brown"
            routerLink={`/tabs/FuneralPrayerPage`}
            key="4"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book2-lesson12-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book2-lesson12-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
        </div>
        <div
          className="ion-padding"
          id="individual"
          hidden={current !== 2}
        >
            <IonItem
            lines="none"
            color="purple"
            routerLink={`/tabs/NightPrayerPage`}
            key="5"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book3-lesson9-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book3-lesson9-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
          <IonItem
            lines="none"
            color="burgundy"
            routerLink={`/tabs/MorningPrayerPage`}
            key="6"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book3-lesson10-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book3-lesson10-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
          <IonItem
            lines="none"
            color="dark-brown"
            routerLink={`/tabs/GuidancePrayerPage`}
            key="7"
          >
            <IonText className="ion-text-center">
              <h3>
                {translationService.getLabel("label-book3-lesson11-title")}
              </h3>
              <p>
                {translationService.getLabel(
                  "label-book3-lesson11-title-description"
                )}
              </p>
            </IonText>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};
