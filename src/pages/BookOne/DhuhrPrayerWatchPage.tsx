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

export const DhuhrPrayerWatchPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  const [prayerLength, setPrayerLength] = useState(0);
  const [isMan,setIsMan]=useState(true);

  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-dhuhr-sunnah"));
      setPrayerLength(29);
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-dhuhr-fardh"));
      setPrayerLength(29);
    }

    if (match.params.type === "sunsunnah") {
      setPrayerType(translationService.getLabel("label-dhuhr-sunsunnah"));
      setPrayerLength(16);
    }
  }, [match.params.type]);

  const toggleGender=()=>{
    setIsMan(previous=>!previous);
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="brown" defaultHref="/DhuhrPrayerPage" />
          </IonButtons>
          <IonButtons slot="end">
          <IonText color="brown">{translationService.getLabel("label-man")}</IonText>
          <IonToggle onIonChange={() => toggleGender()} className="brown"/>
          <IonText style={{marginRight:"15px"}} color="brown">{translationService.getLabel("label-woman")}</IonText>
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
                  <h2 className="black">
                    {match.params.type === "sunsunnah" ? "2" : "4"}{" "}
                    {translationService.getLabel("label-rakah-cardinal")}
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
                  src={isMan?"/assets/images/Beginning.png":"/assets/images/BeginningWoman.png"}
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
                          <IonChip color="brown">
                            {translationService.getLabel("label-nijjah-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={1}
                            maxValue={prayerLength}
                            color="brown"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText hidden={match.params.type !== "sunnah"}>
                            <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-dhuhr-sunnah-nijjah"
                            )}
                            </h2>
                            
                          </IonText>
                          <IonText hidden={match.params.type !== "fardh"}>
                          <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-dhuhr-fardh-nijjah"
                            )}
                            </h2>
                          </IonText>
                          <IonText hidden={match.params.type !== "sunsunnah"}>
                          <h2 className="lesson-note">
                            {translationService.getLabel(
                              "label-dhuhr-sunsunnah-nijjah"
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
                <img style={{ height: 350 }} src={isMan?"/assets/images/Tekbir.png":"/assets/images/TekbirWoman.png"} alt=""/>
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
                          <IonChip color="brown">
                            {translationService.getLabel("label-prayer-tekbir")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={2}
                            maxValue={prayerLength}
                            color="brown"
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
              prayer="2"
              color="brown"
              stepValue={3}
              maxValue={prayerLength}
              isMan={isMan}
            />
            <RukuWatch
              rakah="1"
              color="brown"
              stepValue={4}
              maxValue={prayerLength}
              isMan={isMan}
            />

            <QijamWatch
              rakah="2"
              type={match.params.type}
              prayer="2"
              color="brown"
              stepValue={9}
              maxValue={prayerLength}
              isMan={isMan}
            />
            <RukuWatch
              rakah="2"
              color="brown"
              stepValue={10}
              maxValue={prayerLength}
              isMan={isMan}
            />

            <TashahudWatch
              rakah="2"
              last={match.params.type === "sunsunnah"}
              color="brown"
              stepValue={15}
              maxValue={prayerLength}
              salawat={false}
              isMan={isMan}
            />
            {match.params.type === "sunsunnah" && (
              <SelamWatch
                rakah="2"
                color="brown"
                stepValue={16}
                maxValue={prayerLength}
                isMan={isMan}
              />
            )}
            {match.params.type !== "sunsunnah" && (
              <>
                <QijamWatch
                  rakah="3"
                  type={match.params.type}
                  prayer="2"
                  color="brown"
                  stepValue={16}
                  maxValue={prayerLength}
                  isMan={isMan}
                />
                <RukuWatch
                  rakah="3"
                  color="brown"
                  stepValue={17}
                  maxValue={prayerLength}
                  isMan={isMan}
                />
                <QijamWatch
                  rakah="4"
                  type={match.params.type}
                  prayer="2"
                  color="brown"
                  stepValue={22}
                  maxValue={prayerLength}
                  isMan={isMan}
                />
                <RukuWatch
                  rakah="4"
                  color="brown"
                  stepValue={23}
                  maxValue={prayerLength}
                  isMan={isMan}
                />
                <TashahudWatch
                  rakah="4"
                  last={true}
                  color="brown"
                  stepValue={28}
                  maxValue={prayerLength}
                  salawat={false}
                  isMan={isMan}
                />
                <SelamWatch
                  rakah="4"
                  color="brown"
                  stepValue={29}
                  maxValue={prayerLength}
                  isMan={isMan}
                />
              </>
            )}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DhuhrPrayerWatchPage;
