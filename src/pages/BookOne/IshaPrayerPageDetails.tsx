import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import FourthRakah from "../../components/FourthRakah";
import FourthRakahPartTwo from "../../components/FourthRakahPartTwo";
import Qunut from "../../components/Qunut";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";
import Tashashud from "../../components/Tashahud";
import ThirdRakah from "../../components/ThirdRakah";
import ThirdRakahPartTwo from "../../components/ThirdRakahPartTwo";
import { translationService } from "../../services/TranslationService";

export const IshaPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const [prayerType,setPrayerType]=useState("");
    const[numberOfRakah,setNumberOfRakah]=useState(0);

    useEffect(() => {
        if(match.params.type==="sunnah"){
            setPrayerType(translationService.getLabel('label-isha-sunnah'));
            setNumberOfRakah(4);
        } 

        if(match.params.type==="fardh"){
            setPrayerType(translationService.getLabel('label-isha-fardh'));
            setNumberOfRakah(4);
        }

        if(match.params.type==="sunsunnah"){
            setPrayerType(translationService.getLabel('label-isha-sunsunnah'));
            setNumberOfRakah(2);
        } 

        if(match.params.type==="witr"){
            setPrayerType(translationService.getLabel('label-witr'));
            setNumberOfRakah(3);
        } 
    }, []);
    
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/IshaPrayerPage"/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }} >
            <IonGrid>
              
              <IonRow style={{ marginTop: 5}}>
                <IonCol size="7">
                <IonText hidden={match.params.type==="witr"}>
                  <h1 className="prayer-description">{prayerType}</h1>
               </IonText>
               <IonText hidden={match.params.type!=="witr"}>
                  <h1 className="prayer-description">{translationService.getLabel('label-witr')}</h1>
               </IonText>
                </IonCol>
                <IonCol size="5" className="ion-text-right">
                <IonText >
                  <h2>{numberOfRakah} {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                        <IonChip  color="purple" style={{marginLeft:"0px"}}>{translationService.getLabel('label-before-prayer')}</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText><h2>{translationService.getLabel('label-nijjah-header')}</h2></IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-nijjah-definition')}
                          
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type!=="sunnah"}>
                        {translationService.getLabel('label-isha-sunnah-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type!=="fardh"}>
                        {translationService.getLabel('label-isha-fardh-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type!=="sunsunnah"}>
                        {translationService.getLabel('label-isha-sunsunnah-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type!=="witr"}>
                        {translationService.getLabel('label-witr-nijjah')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <FirstRakah color="purple"/>
              </IonSlide>
              <IonSlide>
                <FirstRakahPartTwo color="purple"/>
                
                
              </IonSlide>
              <IonSlide>
                <SecondRakah color="purple"/>
              </IonSlide>
              <IonSlide>
                <SecondRakahPartTwo color="purple"/>
              </IonSlide>
              <IonSlide>
                <Tashashud first={match.params.type!=="sunsunnah"?true:false} color="purple"/>
                
              </IonSlide>
              
              {match.params.type==="witr"&&
              <>
              <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={true} color="purple"/>
                  </IonSlide>
              <IonSlide>
                <Qunut color="purple"/>
                  </IonSlide>
                
                <IonSlide>
                    <ThirdRakahPartTwo color="purple"/>
                  </IonSlide>
                  <IonSlide>
                <Tashashud first={false} color="purple"/>
                  </IonSlide>
                  
                
                </>
              }


              {(match.params.type==="sunnah" ||match.params.type==="fardh" )&&
              <>
                <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={match.params.type==="sunnah"} color="purple"/>
                  </IonSlide>
                  <IonSlide>
                    <ThirdRakahPartTwo color="purple"/>
                  </IonSlide>
                <IonSlide>
                <FourthRakah type={match.params.type} color="purple"/>
                </IonSlide>
                <IonSlide>
                <FourthRakahPartTwo color="purple"/>
                </IonSlide>
                <IonSlide>
                <Tashashud first={false} color="purple"/>
                
              </IonSlide>
              </>}
            </IonSlides>
          </div>
          
        </IonContent>
      </IonPage>
    );
}

export default IshaPrayerDetailsPage;