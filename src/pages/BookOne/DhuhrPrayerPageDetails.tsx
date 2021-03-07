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

export const DhuhrPrayerDetailsPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerLength, setPrayerLength] = useState(0);
  const [prayerType, setPrayerType] = useState("");

  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-dhuhr-sunnah"));
      setPrayerLength(11);
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-dhuhr-fardh"));
      setPrayerLength(11);
    }

    if (match.params.type === "sunsunnah") {
      setPrayerType(translationService.getLabel("label-dhuhr-sunsunnah"));
      setPrayerLength(6);
    }
  }, [match.params.type]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="brown" defaultHref="/DhuhrPrayerPage" />
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
                      <IonChip color="brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-before-prayer")}
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
                          "label-dhuhr-sunnah-nijjah"
                        )}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "fardh"}>
                        {translationService.getLabel(
                          "label-dhuhr-fardh-nijjah"
                        )}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "sunsunnah"}>
                        {translationService.getLabel(
                          "label-dhuhr-sunsunnah-nijjah"
                        )}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>

            <FirstRakah color="brown" prayerLength={prayerLength} />

            <SecondRakah color="brown" prayerLength={prayerLength} />

            <Tashashud
              first={match.params.type !== "sunsunnah" ? true : false}
              color="brown"
              prayerLength={prayerLength}
            />

            {match.params.type !== "sunsunnah" && (
              <>
                <ThirdRakah
                  type={match.params.type}
                  showSubhaneke={false}
                  color="brown"
                  prayerLength={prayerLength}
                />

                <FourthRakah
                  type={match.params.type}
                  color="brown"
                  prayerLength={prayerLength}
                />

                <Tashashud
                  first={false}
                  color="brown"
                  prayerLength={prayerLength}
                />
              </>
            )}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DhuhrPrayerDetailsPage;
