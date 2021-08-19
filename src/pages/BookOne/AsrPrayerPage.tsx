import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { documentTextOutline, videocamOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { timeService } from "../../services/TimeService";
import { translationService } from "../../services/TranslationService";

const AsrPrayerPage: React.FC = () => {
  const history = useHistory();
  const [asr, setAsr] = useState("");
  useEffect(() => {
    setAsr(timeService.getAsrTime());
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/tabs/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-asr" fullscreen>
        <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
          <IonItem className="welcome" lines="none">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    {translationService.getLabel("label-book1-lesson21-title")}
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h3 className="prayer ion-no-padding ion-text-center">
                    {translationService.getLabel("label-prayer-today")} {asr}
                  </h3>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
        <div className="ion-padding">
          <IonItem className="lesson-note">
            <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book1-lesson21_section1-paragraph1"
                )}
              </h2>
            </IonText>
          </IonItem>
          <IonItem color="light">
            <IonLabel style={{ paddingRight: "0px" }}>
              <h3 className="prayer-name-bold">
                {translationService.getLabel("label-sunnah")}
              </h3>
              <h3 className="prayer-name-normal">
                4 {translationService.getLabel("label-rakah-cardinal")}
              </h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton color="light">
                <IonIcon src="/assets/images/prayer.svg" color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton
                  onClick={() => {
                    history.push("/tabs/AsrPrayerDetailsPage/sunnah");
                  }}
                >
                  <IonIcon
                    icon={documentTextOutline}
                    size="zmdi-hc-2x"
                    color="purple"
                  />
                </IonFabButton>
                <IonFabButton routerLink="/tabs/AsrPrayerWatchPage/sunnah">
                  <IonIcon
                    icon={videocamOutline}
                    size="zmdi-hc-2x"
                    color="purple"
                  />
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonItem>
          <IonItem color="light">
            <IonLabel style={{ paddingRight: "0px" }}>
              <h3 className="prayer-name-bold">
                {translationService.getLabel("label-fardh")}
              </h3>
              <h3 className="prayer-name-normal">
                4 {translationService.getLabel("label-rakah-cardinal")}
              </h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton color="light">
                <IonIcon src="/assets/images/prayer.svg" color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink="/tabs/AsrPrayerDetailsPage/fardh">
                  <IonIcon
                    icon={documentTextOutline}
                    size="zmdi-hc-2x"
                    color="purple"
                  />
                </IonFabButton>
                <IonFabButton routerLink="/tabs/AsrPrayerWatchPage/fardh">
                  <IonIcon
                    icon={videocamOutline}
                    size="zmdi-hc-2x"
                    color="purple"
                  />
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AsrPrayerPage;
