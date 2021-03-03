import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader,  IonItem, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import FourthRakah from "../../components/FourthRakah";
import FourthRakahPartTwo from "../../components/FourthRakahPartTwo";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";
import Tashashud from "../../components/Tashahud";
import ThirdRakah from "../../components/ThirdRakah";
import ThirdRakahPartTwo from "../../components/ThirdRakahPartTwo";
import { translationService } from "../../services/TranslationService";

export const DhuhrPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
   
    const [prayerType,setPrayerType]=useState("");

    useEffect(() => {
        if(match.params.type==="sunnah") setPrayerType(translationService.getLabel('label-dhuhr-sunnah'));

        if(match.params.type==="fardh") setPrayerType(translationService.getLabel('label-dhuhr-fardh'));

        if(match.params.type==="sunsunnah") setPrayerType(translationService.getLabel('label-dhuhr-sunsunnah'));
    },[match.params.type]);
    
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="brown" defaultHref="/DhuhrPrayerPage"/>
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
                    <h2>{match.params.type==="sunsunnah"? "2" : "4"} {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-before-prayer')}</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText>
                          <h2>{translationService.getLabel('label-nijjah-header')}</h2>
                        </IonText>
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
                        <IonNote hidden={match.params.type !== "sunnah"}>
                        {translationService.getLabel('label-dhuhr-sunnah-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type !== "fardh"}>
                        {translationService.getLabel('label-dhuhr-fardh-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type !== "sunsunnah"}>
                        {translationService.getLabel('label-dhuhr-sunsunnah-nijjah')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <FirstRakah color="brown"/>
              </IonSlide>
              <IonSlide>
                <FirstRakahPartTwo color="brown"/>
              </IonSlide>
              <IonSlide>
                <SecondRakah color="brown"/>
              </IonSlide>
              <IonSlide>
                <SecondRakahPartTwo color="brown"/>
              </IonSlide>
              <IonSlide>
                <Tashashud
                  first={match.params.type !== "sunsunnah" ? true : false} color="brown"
                />
              </IonSlide>
              {match.params.type !== "sunsunnah" && (
                <>
                  <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={false} color="brown"/>
                  </IonSlide>
                  <IonSlide>
                    <ThirdRakahPartTwo color="brown"/>
                  </IonSlide>
                  <IonSlide>
                    <FourthRakah
                      type={match.params.type} color="brown"
                    />
                  </IonSlide>
                  <IonSlide>
                    <FourthRakahPartTwo color="brown"/>
                  </IonSlide>
                  <IonSlide>
                    <Tashashud first={false} color="brown"/>
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