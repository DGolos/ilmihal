import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import FirstTashahud from "../../components/FirstTashahud";
import FourthRakah from "../../components/FourthRakah";
import FourthRakahPartTwo from "../../components/FourthRakahPartTwo";
import PrayerEnd from "../../components/PrayerEnd";
import Qunut from "../../components/Qunut";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";
import Tashashud from "../../components/Tashahud";
import ThirdRakah from "../../components/ThirdRakah";
import ThirdRakahPartTwo from "../../components/ThirdRakahPartTwo";

export const IshaPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const [prayerType,setPrayerType]=useState("");
    const[numberOfRakah,setNumberOfRakah]=useState(0);

    useEffect(() => {
        if(match.params.type==="sunnah"){
            setPrayerType("sunnet");
            setNumberOfRakah(4);
        } 

        if(match.params.type==="fardh"){
            setPrayerType("farz");
            setNumberOfRakah(4);
        }

        if(match.params.type==="sunsunnah"){
            setPrayerType("sunsunet");
            setNumberOfRakah(2);
        } 

        if(match.params.type==="witr"){
            setPrayerType("vitr");
            setNumberOfRakah(3);
        } 
    }, []);
    
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/IshaPrayerPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }} >
            <IonGrid>
              
              <IonRow style={{ marginTop: 5}}>
                <IonCol size="7">
                <IonText hidden={match.params.type==="witr"}>
                  <h1 className="prayer-description">Jaciski {prayerType}</h1>
               </IonText>
               <IonText hidden={match.params.type!=="witr"}>
                  <h1 className="prayer-description">Vitr</h1>
               </IonText>
                </IonCol>
                <IonCol size="5">
                <IonText >
                  <h2>{numberOfRakah} rekata</h2>
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
                        Jacijski sunnet se zanijeti ovako: Nevejtu en usallije lillahi teala salate sunnetil-‘išai edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type!=="fardh"}>
                        Jacijski farz se zanijeti ovako: Nevejtu en usallije lillahi teala salate fardil-‘išai edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type!=="sunsunnah"}>
                        Jacijski sunsunnet se zanijeti ovako: Nevejtu en usallije lillahi teala salate sunsunnetil-‘išai edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type!=="witr"}>
                        Vitr-namaz je posebni namaz, koji se klanja poslije jacijskog sunneta. Vitr-namaz ima tri rekata. Nijjet se učini ovako: Nevejtu en usallije lillahi teala salatel-vitri edaen
mustakbilel-kibleti - Allahu ekber.
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
                <Tashashud first={match.params.type!=="sunsunnah"?true:false}/>
                
              </IonSlide>
              
              {match.params.type==="witr"&&
              <>
              <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={true} />
                  </IonSlide>
              <IonSlide>
                <Qunut/>
                  </IonSlide>
                
                <IonSlide>
                    <ThirdRakahPartTwo />
                  </IonSlide>
                  <IonSlide>
                <Tashashud first={false}/>
                  </IonSlide>
                  
                
                </>
              }


              {(match.params.type==="sunnah" ||match.params.type==="fardh" )&&
              <>
                <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={match.params.type==="sunnah"}/>
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
              </>}
            </IonSlides>
          </div>
          
        </IonContent>
      </IonPage>
    );
}

export default IshaPrayerDetailsPage;