import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import QijamWatch from "../../components/QijamWatch";
import RukuWatch from "../../components/RukuWatch";
import SelamWatch from "../../components/SelamWatch";
import TashahudWatch from "../../components/TashahudWatch";
import WitrAdditionWatch from "../../components/WitrAdditionWatch";
import { translationService } from "../../services/TranslationService";

export const IshaPrayerWatchPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
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
              <IonBackButton color="purple" defaultHref="/IshaPrayerPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
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
                            <IonChip color="purple">{translationService.getLabel('label-nijjah-header')}</IonChip>
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
                            <IonChip color="burgundy">{translationService.getLabel('label-prayer-tekbir')}</IonChip>
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
              <QijamWatch rakah="1" type={match.params.type} prayer="5" color="purple"/>
              <RukuWatch rakah="1" color="purple"/>
              
              <QijamWatch rakah="2" type={match.params.type} prayer="5" color="purple"/>
              <RukuWatch rakah="2" color="purple"/>
              
              <TashahudWatch rakah="2" last={match.params.type==="sunsunnah"} color="purple"/>
              {match.params.type==="sunsunnah" &&
                <SelamWatch  rakah="2" color="purple"/>
              }
              {match.params.type==="witr"&&
              <>
              <QijamWatch rakah="3" type={match.params.type} prayer="5" color="purple"/>
              <WitrAdditionWatch color="purple"/>
              <RukuWatch rakah="3" color="purple"/>
              <TashahudWatch rakah="3" last={true} color="purple"/>
              <SelamWatch  rakah="3" color="purple"/>
                
                </>
              }
              

            {(match.params.type==="sunnah" ||match.params.type==="fardh" )&&
              <>
              <QijamWatch rakah="3" type={match.params.type} prayer="5" color="purple"/>
              <RukuWatch rakah="3" color="purple"/>
              <QijamWatch rakah="4" type={match.params.type} prayer="5" color="purple"/>
              <RukuWatch rakah="4" color="purple"/>
              <QijamWatch rakah="4" type={match.params.type} prayer="5" color="purple"/>
              <RukuWatch rakah="4" color="purple"/>
              <TashahudWatch rakah="4" last={true} color="purple"/>
              <SelamWatch  rakah="4" color="purple"/></>}
              
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default IshaPrayerWatchPage;