import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline, chevronBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";
import { translationService } from "../../services/TranslationService";

export const MagribPrayerWatchPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    
    const [prayerType,setPrayerType]=useState("");

    useEffect(() => {
      if(match.params.type==="sunnah") setPrayerType(translationService.getLabel('label-maghrib-sunnah'));

      if(match.params.type==="fardh") setPrayerType(translationService.getLabel('label-maghrib-fardh'));

        
    }, []);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="razimic" defaultHref="/MaghribPrayerPage" />
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
                  <h2>{prayerType === "sunsunah" ? "2" : "3"} {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                            <IonChip color="razimic">{translationService.getLabel('label-nijjah-header')}</IonChip>
                          </IonCol>
                        </IonRow>

                        
                        <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type!=="sunnah"}>
                        {translationService.getLabel('label-maghrib-fardh-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type==="sunnah"}>
                        {translationService.getLabel('label-maghrib-sunnah-nijjah')}
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
                            <IonChip color="razimic">{translationService.getLabel('label-prayer-tekbir')}</IonChip>
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
              <QijamWatch rakah="1" type={match.params.type} prayer="4" color="razimic"/>
              <RukuWatch rakah="1" color="razimic"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="4" color="razimic"/>
              <RukuWatch rakah="2" color="razimic"/>
              
              <TashahudWatch rakah="2" last={match.params.type==="sunnah"} color="razimic"/>
              {match.params.type==="sunnah" &&
                <SelamWatch rakah="2" color="razimic"/>
              }

              {match.params.type === "fardh" && (
                <>
                  <QijamWatch rakah="3" type={match.params.type} prayer="4" color="razimic"/>
                  <RukuWatch rakah="3" color="razimic"/>
                  <TashahudWatch rakah="3" last={true} color="razimic"/>
                  <SelamWatch rakah="3" color="razimic"/>
                </>
              )}
              
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default MagribPrayerWatchPage;