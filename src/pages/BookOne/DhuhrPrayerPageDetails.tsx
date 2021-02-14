import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline } from "ionicons/icons";
import { type } from "os";
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import FirstTashahud from "../../components/FirstTashahud";
import FourthRakah from "../../components/FourthRakah";
import FourthRakahPartTwo from "../../components/FourthRakahPartTwo";
import PrayerEnd from "../../components/PrayerEnd";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";
import Tashashud from "../../components/Tashahud";
import ThirdRakah from "../../components/ThirdRakah";
import ThirdRakahPartTwo from "../../components/ThirdRakahPartTwo";

export const DhuhrPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
   
    const [prayerType,setPrayerType]=useState("");

    useEffect(() => {
        if(match.params.type==="sunnah") setPrayerType("sunnet");

        if(match.params.type==="fardh") setPrayerType("farz");

        if(match.params.type==="sunsunnah") setPrayerType("sunsunet");
    }, []);
    
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/DhuhrPrayerPage" />
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
                      Podnevski {prayerType}
                    </h1>
                  </IonText>
                </IonCol>
                <IonCol size="5">
                  <IonText>
                    <h2>{match.params.type==="sunsunnah"? "2" : "4"} rekata</h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div >
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
                      <IonCol size="12">
                        <IonChip color="burgundy" style={{marginLeft:"0px"}}>Prije namaza</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText>
                          <h2>Nijet</h2>
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Nijet je svjesna odluka u srcu zašto nešto
                          činimo.Prilikom izgovaranja nijeta svoje misli
                          usmjeravamo Uzvišenom Allahu.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type !== "sunnah"}>
                          Podnevski sunnet se zanijeti ovako: Nevejtu en
                          usallije lillahi teala salate sunnetiz-zuhri edaen
                          mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type !== "fardh"}>
                          Podnevski farz se zanijeti ovako: Nevejtu en usallije
                          lillahi teala salate fardiz-zuhri edaen
                          mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type !== "sunsunnah"}>
                          Podnevski sunsunnet-namaz se zanijeti se ovako:
                          Nevejtu en usallije lillahi teala salate
                          sunsunnetiz-zuhri edaen mustakbilel-kibleti - Allahu
                          ekber.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <FirstRakah />
              </IonSlide>
              <IonSlide>
                <FirstRakahPartTwo />
              </IonSlide>
              <IonSlide>
                <SecondRakah />
              </IonSlide>
              <IonSlide>
                <SecondRakahPartTwo />
              </IonSlide>
              <IonSlide>
                <Tashashud
                  first={match.params.type !== "sunsunnah" ? true : false}
                />
              </IonSlide>
              {match.params.type !== "sunsunnah" && (
                <>
                  <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={false}/>
                  </IonSlide>
                  <IonSlide>
                    <ThirdRakahPartTwo />
                  </IonSlide>
                  <IonSlide>
                    <FourthRakah
                      type={match.params.type}
                    />
                  </IonSlide>
                  <IonSlide>
                    <FourthRakahPartTwo />
                  </IonSlide>
                  <IonSlide>
                    <Tashashud first={false} />
                  </IonSlide>
                </>
              )}
            </IonSlides>
          </div>
          
        </IonContent>
      </IonPage>
    );
}

export default DhuhrPrayerDetailsPage;