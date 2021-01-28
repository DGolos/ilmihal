import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import PrayerEnd from "../../components/PrayerEnd";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";

export const FajrPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const[current,setCurrent]=useState(1);
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
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }} >
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="6">
                  <IonButton
                    color={current === 1 ? "burgundy" : "brown"}
                    shape="round"
                    expand="full"
                    onClick={() => setCurrent(1)}
                  >
                    <IonLabel color="light" className="ion-text-center">
                      Objašnjenje
                    </IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton
                    color={current === 2 ? "burgundy" : "brown"}
                    shape="round"
                    expand="full"
                    onClick={() => setCurrent(2)}
                  >
                    <IonLabel color="light" className="ion-text-center">
                      Pogledaj
                    </IonLabel>
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow style={{ marginTop: 5}}>
                <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">Sabahski {match.params.type==="sunnah"?"sunet":"farz"}</h1>
               </IonText>
                </IonCol>
                <IonCol size="5">
                <IonText >
                  <h2>2 rekata</h2>
                </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            
            
          </div>
          <div id="read" hidden={current!==1}>
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
                        <IonChip  color="burgundy">Prije namaza</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText><h2>Nijet</h2></IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Nijet je svjesna odluka u srcu zašto nešto činimo.Prilikom izgovaranja nijeta svoje misli usmjeravamo Uzvišenom Allahu.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type!=="sunnah"}>
                        Sabahski sunnet se zanijeti ovako:Nevejtu en usallije lillahi teala salate sunnetil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type==="sunnah"}>
                        Sabahski farz se zanijeti ovako:Nevejtu en usallije lillahi teala salate fardil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <FirstRakah/>
              </IonSlide>
              <IonSlide>
                <FirstRakahPartTwo/>
                
                
              </IonSlide>
              <IonSlide>
                <SecondRakah/>
              </IonSlide>
              <IonSlide>
                <SecondRakahPartTwo/>
              </IonSlide>
              <IonSlide>
                <PrayerEnd/>
                
              </IonSlide>
            </IonSlides>
          </div>
          <div id="watch" hidden={current!==2}>
            <IonSlides>
              <IonSlide>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                    <div className="img-wrapper">
                      <img src="/assets/images/Ruku.png"/>
                    </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
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
                      <IonText>
                        <h2>Pocetak</h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <IonChip color="burgundy">
                        <IonLabel>Nijet</IonLabel>
                      </IonChip>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                  <IonCol size="12">
                  <IonNote hidden={match.params.type!=="sunnah"}>
                        Sabahski sunnet se zanijeti ovako:Nevejtu en usallije lillahi teala salate sunnetil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type==="sunnah"}>
                        Sabahski farz se zanijeti ovako:Nevejtu en usallije lillahi teala salate fardil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                  </IonCol>
                  </IonRow>
                </IonGrid>
                </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
               
              </IonSlide>
              <IonSlide>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                    <div className="img-wrapper">
                      <img src="/assets/images/Ruku.png"/>
                    </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
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
                      <IonText>
                        <h2>Prvi rekat</h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <IonChip color="burgundy">
                        <IonLabel>Tekbir</IonLabel>
                      </IonChip>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                  <IonCol size="12">
                  <IonNote hidden={match.params.type!=="sunnah"}>
                  Podignemo ruke do ušiju i izgovorimo "Allahu ekber".To je znak da je namaz počeo.
                  </IonNote>
                        
                  </IonCol>
                  </IonRow>
                </IonGrid>
                </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
               
              </IonSlide>
              <IonSlide>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                    <div className="img-wrapper">
                      <img src="/assets/images/Ruku.png"/>
                    </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
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
                      <IonText>
                        <h2>Prvi rekat</h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <IonChip color="burgundy">
                        <IonLabel>Ruku</IonLabel>
                      </IonChip>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                  <IonCol size="12">
                  <IonNote>
                  Na ruku'u (pregibanju) učimo tri puta: Subhane rabbijel-azim. Dižući se s ruku'a izgovaramo:Semiallahu limen hamideh, zatim malo zastanemo i reknemo: Rabbena lekel-hamd.
              </IonNote>
                        
                  </IonCol>
                  </IonRow>
                </IonGrid>
                </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
               
              </IonSlide>
              <IonSlide>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                    <div className="img-wrapper">
                      <img src="/assets/images/Ruku.png"/>
                    </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
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
                      <IonText>
                        <h2>Prvi rekat</h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <IonChip color="burgundy">
                        <IonLabel>Pred se</IonLabel>
                      </IonChip>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                  <IonCol size="12">
                  <IonNote hidden={match.params.type!=="sunnah"}>
                    Na stajanju prvog rekata proučimo subhaneke,euzu i bismillu,Fatihu i jednu suru.
                  </IonNote>
                        
                  </IonCol>
                  </IonRow>
                </IonGrid>
                </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
               
              </IonSlide>
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default FajrPrayerDetailsPage;