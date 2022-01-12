import {
    IonChip,
    IonCol,
    IonGrid,
    IonItem,
    IonRow,
    IonSlide,
    IonText,
    useIonViewWillEnter,
  } from "@ionic/react";
  import React, { useState } from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../common/Progress";

  interface SalamWatchProps{
    rakah:string;
    color?:string;
    stepValue?: number;
    maxValue?: number;
    isMan:boolean;
  }
  
  const SelamWatch: React.FC<SalamWatchProps> = ({ rakah,color,stepValue,maxValue,isMan}) => {
    const [currentRakah,setCurrenRakah]=useState("1");
    useIonViewWillEnter(() => {
      if(rakah==="2") setCurrenRakah(translationService.getLabel('label-second-rakah-header'));
      if(rakah==="3") setCurrenRakah(translationService.getLabel('label-third-rakah-header'));
      if(rakah==="4") setCurrenRakah(translationService.getLabel('label-fourth-rakah-header'));
  
      
    });
    return (
        <IonSlide>
        <div>
          <img style={{ height: 350 }} src={isMan?"/assets/images/Selam.png":"/assets/images/WudhuEars.png"} alt=""/>
          <div>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
              <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>{translationService.getLabel('label-prayer-selam-header')}</IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!}
                      maxValue={maxValue!}
                      color={color}
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                      {translationService.getLabel('label-prayer-selam-watch-description')}
                      </h2>
                    
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </div>
      </IonSlide>
    );
  };
  
  export default SelamWatch;
  