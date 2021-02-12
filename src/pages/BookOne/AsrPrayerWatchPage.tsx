import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline, chevronBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";

export const AsrPrayerWatchPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const [prayerType,setPrayerType]=useState("");

    useEffect(() => {
        if(match.params.type==="sunnah") setPrayerType("sunnet");

        if(match.params.type==="fardh") setPrayerType("farz");

        
    }, []);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/AsrPrayerPage" />
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
                      Ikindijski {prayerType}
                    </h1>
                  </IonText>
                </IonCol>
                <IonCol size="5">
                  <IonText>
                    <h2>4 rekata</h2>
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
                        <IonNote hidden={match.params.type!=="sunnah"}>
                        Ikindijski sunnet se zanijjeti ovako: Nevejtu en usallije lillahi teala salate sunnetil-‘asri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type!=="fardh"}>
                        Ikindijski farz se zanijeti ovako: Nevejtu en usallije lillahi teala salate fardil-‘asri edaen mustakbilel-kibleti - Allahu ekber.
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
              <QijamWatch rakah="1" type={match.params.type} prayer="3"/>
              <RukuWatch rakah="1"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="3"/>
              <RukuWatch rakah="2"/>
              
              <TashahudWatch rakah="2" type={match.params.type} last={false}/>
              <QijamWatch rakah="3" type={match.params.type} prayer="3"/>
              <RukuWatch rakah="3"/>
              <QijamWatch rakah="4" type={match.params.type} prayer="3"/>
              <RukuWatch rakah="4"/>
              <TashahudWatch rakah="4" type={match.params.type} last={true}/>
              <SelamWatch rakah="4"/>
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default AsrPrayerWatchPage;