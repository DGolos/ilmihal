import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router"
import FirstRakah from "../../components/FirstRakah";
import FirstRakahPartTwo from "../../components/FirstRakahPartTwo";
import SecondRakah from "../../components/SecondRakah";
import SecondRakahPartTwo from "../../components/SecondRakahPartTwo";
import Tashashud from "../../components/Tashahud";
import ThirdRakah from "../../components/ThirdRakah";
import ThirdRakahPartTwo from "../../components/ThirdRakahPartTwo";
import { translationService } from "../../services/TranslationService";

export const MaghribPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
  const [prayerType,setPrayerType]=useState("");
  useEffect(() => {
    if(match.params.type==="sunnah") setPrayerType(translationService.getLabel('label-maghrib-sunnah'));

    if(match.params.type==="fardh") setPrayerType(translationService.getLabel('label-maghrib-fardh'));

    
},[match.params.type]);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/MaghribPrayerPage"/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }} >
            <IonGrid>
              
              <IonRow style={{ marginTop: 5}}>
                <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">{prayerType}</h1>
               </IonText>
                </IonCol>
                <IonCol size="5" className="ion-text-right">
                <IonText >
                  <h2>{match.params.type==="sunnah"?2:3} {translationService.getLabel('label-rakah-cardinal')}</h2>
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
                        <IonChip  color="burgundy" style={{marginLeft:"0px"}}>{translationService.getLabel('label-before-prayer')}</IonChip>
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
                        {translationService.getLabel('label-maghrib-sunnah-nijjah')}
                        </IonNote>
                        <IonNote hidden={match.params.type!=="fardh"}>
                        {translationService.getLabel('label-maghrib-fardh-nijjah')}
                        </IonNote>
                        
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <FirstRakah color="razimic"/>
              </IonSlide>
              <IonSlide>
                <FirstRakahPartTwo color="razimic"/>
                
                
              </IonSlide>
              <IonSlide>
                <SecondRakah color="razimic"/>
              </IonSlide>
              <IonSlide>
                <SecondRakahPartTwo color="razimic"/>
              </IonSlide>
              <IonSlide>
                <Tashashud first={match.params.type!=="sunnah"?true:false} color="razimic"/>
                
              </IonSlide>
              {match.params.type === "fardh" && (
                <>
                  <IonSlide>
                    <ThirdRakah type={match.params.type} showSubhaneke={false} color="razimic"/>
                  </IonSlide>
                  <IonSlide>
                    <ThirdRakahPartTwo color="razimic"/>
                  </IonSlide>
                 
                    
                  <IonSlide>
                    <Tashashud first={false} color="razimic"/>
                  </IonSlide>
                </>
              )}
            </IonSlides>
          </div>
          
        </IonContent>
      </IonPage>
    );
}

export default MaghribPrayerDetailsPage;