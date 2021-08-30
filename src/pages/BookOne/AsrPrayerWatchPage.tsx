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
import QijamWatch from "../../components/prayer/QijamWatch";
import RukuWatch from "../../components/prayer/RukuWatch";
import SelamWatch from "../../components/prayer/SelamWatch";
import TashahudWatch from "../../components/prayer/TashahudWatch";
import { translationService } from "../../services/TranslationService";

export const AsrPrayerWatchPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  const [prayerLength, setPrayerLength] = useState(0);
  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-asr-sunnah"));
      setPrayerLength(29);
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-asr-fardh"));
      setPrayerLength(29);
    }
  }, []);
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
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
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
                          <IonChip color="dark-brown">
                            {translationService.getLabel("label-nijjah-header")}
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
                          <IonNote hidden={match.params.type !== "sunnah"}>
                            {translationService.getLabel(
                              "label-asr-sunnah-nijjah"
                            )}
                          </IonNote>
                          <IonNote hidden={match.params.type !== "fardh"}>
                            {translationService.getLabel(
                              "label-asr-fardh-nijjah"
                            )}
                          </IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img style={{ height: 350 }} src="/assets/images/Tekbir.png" />
                <div>
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
                          <IonChip color="dark-brown">
                            {translationService.getLabel("label-prayer-tekbir")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={2}
                            maxValue={prayerLength}
                            color="dark-brown"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>
                            {translationService.getLabel(
                              "label-prayer-first-rakah-beginning-watch"
                            )}
                          </IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <QijamWatch
              rakah="1"
              type={match.params.type}
              prayer="3"
              color="dark-brown"
              stepValue={3}
              maxValue={prayerLength}
            />
            <RukuWatch
              rakah="1"
              color="dark-brown"
              stepValue={4}
              maxValue={prayerLength}
            />

            <QijamWatch
              rakah="2"
              type={match.params.type}
              prayer="3"
              color="dark-brown"
              stepValue={9}
              maxValue={prayerLength}
            />
            <RukuWatch
              rakah="2"
              color="dark-brown"
              stepValue={10}
              maxValue={prayerLength}
            />

            <TashahudWatch
              rakah="2"
              last={false}
              color="dark-brown"
              stepValue={15}
              maxValue={prayerLength}
              salawat={match.params.type === "sunnah" ? true : false}
            />
            <QijamWatch
              rakah="3"
              type={match.params.type}
              prayer="3"
              color="dark-brown"
              stepValue={16}
              maxValue={prayerLength}
            />
            <RukuWatch
              rakah="3"
              color="dark-brown"
              stepValue={17}
              maxValue={prayerLength}
            />
            <QijamWatch
              rakah="4"
              type={match.params.type}
              prayer="3"
              color="dark-brown"
              stepValue={22}
              maxValue={prayerLength}
            />
            <RukuWatch
              rakah="4"
              color="dark-brown"
              stepValue={23}
              maxValue={prayerLength}
            />
            <TashahudWatch
              rakah="4"
              last={true}
              color="dark-brown"
              stepValue={28}
              maxValue={prayerLength}
              salawat={false}
            />
            <SelamWatch
              rakah="4"
              color="dark-brown"
              stepValue={29}
              maxValue={prayerLength}
            />
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AsrPrayerWatchPage;
