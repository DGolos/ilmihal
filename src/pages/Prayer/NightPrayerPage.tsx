import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import useTranslation from "../../hooks/useTranslation";


export const NightPrayerPage: React.FC = () => {
  const {translate}=useTranslation();
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="white" defaultHref="/tabs/VoluntaryPrayersPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-late-isha" fullscreen>
        <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
          <IonItem className="welcome">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    {translate("label-book3-lesson9-title")}
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" style={{ marginTop: 0 }}>
                  <h3
                    style={{ fontStyle: "italic", fontSize: "12" }}
                    className="prayer ion-no-padding ion-text-center"
                  >
                    {translate("label-book3-lesson9-quote")}
                  </h3>
                  <p className="quote-reference ion-text-center">
                    {translate("label-book3-lesson9-quote-reference")}
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translate(
                  "label-book3-lesson9_section1-paragraph1"
                )}
              </h2>
            </IonText>
          </IonItem>
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translate(
                  "label-book3-lesson9_section2-paragraph1"
                )}
              </h2>
            </IonText>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};
