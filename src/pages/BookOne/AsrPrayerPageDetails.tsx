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
import FourthRakah from "../../components/prayer/FourthRakah";
import SecondRakah from "../../components/prayer/SecondRakah";
import Tashashud from "../../components/prayer/Tashahud";
import ThirdRakah from "../../components/prayer/ThirdRakah";
import { translationService } from "../../services/TranslationService";

export const AsrPrayerDetailsPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  const [prayerLength, setPrayerLength] = useState(0);

  useEffect(() => {
    if (match.params.type === "sunnah")
      setPrayerType(translationService.getLabel("label-asr-sunnah"));

    if (match.params.type === "fardh")
      setPrayerType(translationService.getLabel("label-asr-fardh"));
    setPrayerLength(11);
  }, [match.params.type]);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="dark-brown" defaultHref="/AsrPrayerPage" />
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
                    4 {translationService.getLabel("label-rakah-cardinal")}
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
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-before-prayer")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={prayerLength}
                        color="dark-brown"
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
                        {translationService.getLabel("label-asr-sunnah-nijjah")}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "fardh"}>
                        {translationService.getLabel("label-asr-fardh-nijjah")}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>

            <FirstRakah prayerLength={prayerLength} color="dark-brown" />

            <SecondRakah prayerLength={prayerLength} color="dark-brown" />

            <Tashashud
              prayerLength={prayerLength}
              first={true}
              color="dark-brown"
            />

            <ThirdRakah
              type={match.params.type}
              showSubhaneke={match.params.type === "sunnah" ? true : false}
              color="dark-brown"
              prayerLength={prayerLength}
            />

            <FourthRakah
              type={match.params.type}
              color="dark-brown"
              prayerLength={prayerLength}
            />

            <Tashashud
              first={false}
              color="dark-brown"
              prayerLength={prayerLength}
            />
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AsrPrayerDetailsPage;
