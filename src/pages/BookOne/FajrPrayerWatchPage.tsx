import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToggle,
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

export const FajrPrayerWatchPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerLength, setPrayerLength] = useState(0);
  const [isMan,setIsMan]=useState(true);

  useEffect(() => {
    setPrayerLength(16);
  }, []);

  const toggleGender=()=>{
    setIsMan(previous=>!previous);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/FajrPrayerPage" />
          </IonButtons>
          <IonButtons slot="end">
          <IonText color="burgundy">{translationService.getLabel("label-man")}</IonText>
          <IonToggle onIonChange={() => toggleGender()} className="burgundy"/>
          <IonText style={{marginRight:"15px"}} color="burgundy">{translationService.getLabel("label-woman")}</IonText>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
          <IonGrid>
            <IonRow style={{ marginTop: 5 }}>
              <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">
                    {match.params.type === "sunnah"
                      ? translationService.getLabel("label-fajr-sunnah")
                      : translationService.getLabel("label-fajr-fardh")}
                  </h1>
                </IonText>
              </IonCol>
              <IonCol size="5" className="ion-text-right">
                <IonText>
                  <h2 className="black">
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
              <div>
                <img
                  style={{ height: 330 }}
                  src={isMan?"/assets/images/Beginning.png":"/assets/images/WudhuEars.png"}
                  alt=""
                />
                <div>
                  <IonItem
                    key="1"
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                            {translationService.getLabel("label-nijjah-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={1}
                            maxValue={16}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText hidden={match.params.type !== "sunnah"}>
                            <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-fajr-sunnah-nijjah"
                            )}
                            </h2>
                            
                          </IonText>
                          <IonText hidden={match.params.type === "sunnah"}>
                          <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-fajr-fardh-nijjah"
                            )}
                            </h2>
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img style={{ height: 350 }} src={isMan?"/assets/images/Tekbir.png":"/assets/images/WudhuEars.png"} alt=""/>
                <div>
                  <IonItem
                    key="1"
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                            {translationService.getLabel("label-prayer-tekbir")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={2}
                            maxValue={16}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-prayer-first-rakah-beginning-watch"
                            )}
                            </h2>
                            
                          </IonText>
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
              prayer="1"
              color="burgundy"
              stepValue={3}
              maxValue={prayerLength}
              isMan
            />
            <RukuWatch
              rakah="1"
              color="burgundy"
              stepValue={4}
              maxValue={prayerLength}
              isMan
            />

            <QijamWatch
              rakah="2"
              type={match.params.type}
              prayer="1"
              color="burgundy"
              stepValue={9}
              maxValue={prayerLength}
              isMan
            />
            <RukuWatch
              rakah="2"
              color="burgundy"
              stepValue={10}
              maxValue={prayerLength}
              isMan
            />

            <TashahudWatch
              rakah="2"
              last={true}
              color="burgundy"
              stepValue={15}
              maxValue={prayerLength}
              salawat={false}
              isMan
            />
            <SelamWatch
              rakah="2"
              color="burgundy"
              stepValue={16}
              maxValue={prayerLength}
              isMan
            />
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FajrPrayerWatchPage;
