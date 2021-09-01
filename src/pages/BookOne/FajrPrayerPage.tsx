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
import { timeService } from "../../services/TimeService";
import { translationService } from "../../services/TranslationService";

const FajrPrayerPage: React.FC = () => {
  const [fajr, setFajr] = useState("");
  useEffect(() => {
    setFajr(timeService.getFajrTime());
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="white" defaultHref='/tabs/BookOneMainPage'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-fajr" fullscreen>
        <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
          <IonItem className="welcome" lines="none">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    {translationService.getLabel('label-book1-lesson19-title')}
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h3 className="prayer ion-no-padding ion-text-center">
                  {translationService.getLabel('label-prayer-today')} {fajr}
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
              {translationService.getLabel('label-book1-lesson19_section1-paragraph1')}
              </h2>
            </IonText>
          </IonItem>
          <IonItem className="lesson-note" lines="none">
            <IonLabel style={{paddingRight:"0px"}}>
              <h3 className="prayer-name-bold">{translationService.getLabel('label-sunnah')}</h3>
              <h3 className="prayer-name-normal">2 {translationService.getLabel('label-rakah-cardinal')}</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton  className="white">
                <IonIcon src='/assets/images/prayer.svg' color="purple"/>
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton className="white" routerLink="/tabs/FajrPrayerDetailsPage/sunnah">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton className="white" routerLink="/tabs/FajrPrayerWatchPage/sunnah">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonItem>
          <IonItem className="lesson-note" lines="none">
            <IonLabel style={{paddingRight:"0px"}}>
              <h3 className="prayer-name-bold">{translationService.getLabel('label-fardh')}</h3>
              <h3 className="prayer-name-normal">2 {translationService.getLabel('label-rakah-cardinal')}</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton className="white" >
                <IonIcon src='/assets/images/prayer.svg' color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink="/tabs/FajrPrayerDetailsPage/fardh" className="white">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton routerLink="/tabs/FajrPrayerWatchPage/fardh" className="white">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FajrPrayerPage;
