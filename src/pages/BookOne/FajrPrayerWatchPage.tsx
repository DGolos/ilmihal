import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline, chevronBackOutline } from "ionicons/icons";
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";

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
                      Sabahski{" "}
                      {match.params.type === "sunnah" ? "sunet" : "farz"}
                    </h1>
                  </IonText>
                </IonCol>
                <IonCol size="5">
                  <IonText>
                    <h2>2 rekata</h2>
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
                            <IonChip color="burgundy">Nijet</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote hidden={match.params.type !== "sunnah"}>
                              Sabahski sunnet se zanijeti ovako:Nevejtu en
                              usallije lillahi teala salate sunnetil-fedžri
                              edaen mustakbilel-kibleti - Allahu ekber.
                            </IonNote>
                            <IonNote hidden={match.params.type === "sunnah"}>
                              Sabahski farz se zanijeti ovako:Nevejtu en
                              usallije lillahi teala salate fardil-fedžri edaen
                              mustakbilel-kibleti - Allahu ekber.
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
                            <IonChip color="burgundy">Tekbir</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                              Podignemo ruke do ušiju i izgovorimo "Allahu
                              ekber".To je znak da je namaz počeo.
                            </IonNote>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonItem>
                  </div>
                </div>
              </IonSlide>
              <QijamWatch rakah="1" type={match.params.type} prayer="1"/>
              <RukuWatch rakah="1"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="1"/>
              <RukuWatch rakah="2"/>
              
              <TashahudWatch rakah="2" type={match.params.type} last={true}/>
              <SelamWatch/>
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default FajrPrayerWatchPage;