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
import { RouteComponentProps } from "react-router";
import { DailyPrayer, dailyPrayers } from "../../data/PrayerDefinitions";
import useTranslation from "../../hooks/useTranslation";
import { translationService } from "../../services/TranslationService";

export const DailyPrayerDefinitionPage: React.FC<
  RouteComponentProps<{ prayerId: string }>
> = ({ match }) => {
  const [prayer, setPrayer] = useState<DailyPrayer>();
  const { translate } = useTranslation();
  useEffect(() => {
    setPrayer(
      dailyPrayers.find((prayer) => prayer.id === +match.params.prayerId)
    );
  }, [match.params.prayerId]);

  
  

  const prayerItems = prayer?.types.map((prayerType,index) => (
    <IonItem className="lesson-note" lines="none" key={index}>
            <IonLabel style={{paddingRight:"0px"}}>
              <h3 className="prayer-name-bold">{translate(prayerType.translatedType)}</h3>
              <h3 className="prayer-name-normal">{prayerType.numberOfRakah} {translate('label-prayer-rakah')}</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton  className="white" >
                <IonIcon src='/assets/images/prayer.svg' color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink={`/tabs/DailyPrayerDetailsPage/${prayer?.id}/${prayerType?.type}`} className="white">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton routerLink={`/tabs/DailyPrayerWatchPage/${prayer?.id}/${prayerType?.type}`} className="white">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
            </IonItem>
  ));
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              className="white"
              defaultHref="/tabs/BookOneMainPage"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={`bg-image-${prayer?.background}`} fullscreen>
        <div style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
          <IonItem className="welcome" lines="none">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    {translate(prayer?.translatedName)}
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h3 className="prayer ion-no-padding ion-text-center">
                    {translationService.getLabel("label-prayer-today")}
                  </h3>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
        <div style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">{translate(prayer?.description)}</h2>
            </IonText>
          </IonItem>
          {prayerItems}
        </div>
      </IonContent>
    </IonPage>
  );
};
