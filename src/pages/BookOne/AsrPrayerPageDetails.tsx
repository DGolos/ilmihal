import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader,  IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline } from "ionicons/icons";
import React, {  useState } from "react"
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

export const AsrPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
        
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
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }} >
            <IonGrid>
              
              <IonRow style={{ marginTop: 5}}>
                <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">Ikindijski {match.params.type==="sunnah"?"sunet":"farz"}</h1>
               </IonText>
                </IonCol>
                <IonCol size="5">
                <IonText >
                  <h2>4 rekata</h2>
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
                        Ikindijski sunnet se zanijjeti ovako: Nevejtu en usallije lillahi teala salate sunnetil-‘asri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type!=="fardh"}>
                        Ikindijski farz se zanijeti ovako: Nevejtu en usallije lillahi teala salate fardil-‘asri edaen mustakbilel-kibleti - Allahu ekber.
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
                <Tashashud first={true}/>
                
              </IonSlide>
              <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={match.params.type==="sunnah"?true:false}/>
                  </IonSlide>
                  <IonSlide>
                    <ThirdRakahPartTwo />
                  </IonSlide>
              <IonSlide>
                <FourthRakah surah={match.params.type==="sunnah"?true:false}/>
                </IonSlide>
                <IonSlide>
                <FourthRakahPartTwo />
                </IonSlide>
                <IonSlide>
                <Tashashud first={false}/>
                
              </IonSlide>
            </IonSlides>
          </div>
         
        </IonContent>
      </IonPage>
    );
}

export default AsrPrayerDetailsPage;