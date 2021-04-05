import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonNote,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Progress } from "../../components/common/Progress";
import FirstRakah from "../../components/prayer/FirstRakah";
import SecondRakah from "../../components/prayer/SecondRakah";
import Tashashud from "../../components/prayer/Tashahud";
import { translationService } from "../../services/TranslationService";

export const FajrPrayerDetailsPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  
  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-fajr-sunnah"));
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-fajr-fardh"));
    }
    
  }, [match.params.type]);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/FajrPrayerPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
          <IonGrid>
            <IonRow style={{ marginTop: 5 }}>
              <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">{prayerType}</h1>
                </IonText>
              </IonCol>
              <IonCol size="5" className="ion-text-right">
                <IonText>
                  <h2>
                    2 {translationService.getLabel("label-rakah-cardinal")}
                  </h2>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div>
          <IonSlides>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-before-prayer")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2>
                          {translationService.getLabel("label-nijjah-header")}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel("label-nijjah-definition")}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote hidden={match.params.type !== "sunnah"}>
                        {translationService.getLabel(
                          "label-fajr-sunnah-nijjah"
                        )}
                      </IonNote>
                      <IonNote hidden={match.params.type === "sunnah"}>
                        {translationService.getLabel("label-fajr-fardh-nijjah")}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>

            <FirstRakah color="burgundy" prayerLength={6} />

            <SecondRakah color="burgundy" prayerLength={6} />

            <Tashashud
              first={false}
              color="burgundy"
              prayerLength={6}
            />
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FajrPrayerDetailsPage;
