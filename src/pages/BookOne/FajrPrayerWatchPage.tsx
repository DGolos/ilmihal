import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader,  IonItem,  IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React from "react"
import { RouteComponentProps } from "react-router"
import { Progress } from "../../components/common/Progress";
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";
import { translationService } from "../../services/TranslationService";

export const FajrPrayerWatchPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    
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
                    <h1 className="prayer-description">
                      {match.params.type === "sunnah" ? translationService.getLabel('label-fajr-sunnah') : translationService.getLabel('label-fajr-fardh') }
                    </h1>
                  </IonText>
                </IonCol>
                <IonCol size="5" className="ion-text-right">
                  <IonText>
                    <h2>2 {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                            <IonChip color="burgundy">{translationService.getLabel('label-nijjah-header')}</IonChip>
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
                            <IonNote hidden={match.params.type !== "sunnah"}>
                            {translationService.getLabel('label-fajr-sunnah-nijjah')}
                            </IonNote>
                            <IonNote hidden={match.params.type === "sunnah"}>
                            {translationService.getLabel('label-fajr-fardh-nijjah')}
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
                          <IonCol size="6">
                            <IonChip color="burgundy">{translationService.getLabel('label-prayer-tekbir')}</IonChip>
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
              <QijamWatch rakah="1" type={match.params.type} prayer="1" color="burgundy"/>
              <RukuWatch rakah="1" color="burgundy"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="1" color="burgundy"/>
              <RukuWatch rakah="2" color="burgundy"/>
              
              <TashahudWatch rakah="2" last={true} color="burgundy"/>
              <SelamWatch rakah="2" color="burgundy"/>
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default FajrPrayerWatchPage;