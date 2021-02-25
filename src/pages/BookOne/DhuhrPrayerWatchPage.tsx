import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";
import { translationService } from "../../services/TranslationService";

export const DhuhrPrayerWatchPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const [prayerType,setPrayerType]=useState("");

    useEffect(() => {
      if(match.params.type==="sunnah") setPrayerType(translationService.getLabel('label-dhuhr-sunnah'));

      if(match.params.type==="fardh") setPrayerType(translationService.getLabel('label-dhuhr-fardh'));

      if(match.params.type==="sunsunnah") setPrayerType(translationService.getLabel('label-dhuhr-sunsunnah'));
    }, []);
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
                    <h1 className="prayer-description">
                      {prayerType}
                    </h1>
                  </IonText>
                </IonCol>
                <IonCol size="5" className="ion-text-right">
                  <IonText>
                  <h2>{match.params.type==="sunsunnah" ? "2" : "4"} {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                          <IonCol size="12">
                            <IonChip color="brown">{translationService.getLabel('label-nijjah-header')}</IonChip>
                          </IonCol>
                        </IonRow>

                        
                    <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type !== "sunnah"}>
                        {translationService.getLabel('label-dhuhr-sunnah-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type !== "fardh"}>
                        {translationService.getLabel('label-dhuhr-fardh-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type !== "sunsunnah"}>
                        {translationService.getLabel('label-dhuhr-sunsunnah-nijjah')}
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
                  <img
                    style={{ height: 350 }}
                    src="/assets/images/Tekbir.png"
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
                          <IonCol size="12">
                            <IonChip color="brown">{translationService.getLabel('label-prayer-tekbir')}</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            {translationService.getLabel('label-prayer-first-rakah-beginning-watch')}
                            </IonNote>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonItem>
                  </div>
                </div>
              </IonSlide>
              <QijamWatch rakah="1" type={match.params.type} prayer="2" color="brown"/>
              <RukuWatch rakah="1" color="brown"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="2" color="brown"/>
              <RukuWatch rakah="2" color="brown"/>
              
              <TashahudWatch rakah="2" last={match.params.type==="sunsunnah"} color="brown"/>
              {match.params.type==="sunsunnah" &&
                <SelamWatch rakah="2" color="brown"/>
              }
              {match.params.type !== "sunsunnah" &&
              <>
              <QijamWatch rakah="3" type={match.params.type} prayer="2" color="brown"/>
              <RukuWatch rakah="3" color="brown"/>
              <QijamWatch rakah="4" type={match.params.type} prayer="2" color="brown"/>
              <RukuWatch rakah="4" color="brown"/>
              <TashahudWatch rakah="4" last={true} color="brown"/>
              <SelamWatch rakah="4" color="brown"/>
              </>}
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default DhuhrPrayerWatchPage;