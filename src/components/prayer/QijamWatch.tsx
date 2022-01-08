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

interface QijamProps {
  rakah?: string;
  type?:string;
  prayer?:string;
  color?:string;
  stepValue?:number;
  maxValue?:number;
}

const QijamWatch: React.FC<QijamProps> = ({ rakah,type,prayer,color,stepValue,maxValue}) => {
  const [currentRakah,setCurrenRakah]=useState("1");
  const [showFull,setShowFull]=useState(false);
  const [showSunnah,setShowSunnah]=useState(false);
  const [showFardh,setShowFardh]=useState(false);

  useIonViewWillEnter(() => {
    if(rakah==="1") setCurrenRakah(translationService.getLabel('label-first-rakah-header'));
    if(rakah==="2") setCurrenRakah(translationService.getLabel('label-second-rakah-header'));
    if(rakah==="3") setCurrenRakah(translationService.getLabel('label-third-rakah-header'));
    if(rakah==="4") setCurrenRakah(translationService.getLabel('label-fourth-rakah-header'));

    if(rakah==="1") setShowFull(true);
    if(rakah==="2") setShowSunnah(true);
    if(rakah==="3"){
      if(type==="fardh") setShowFardh(true);
      if(type==="witr") setShowFull(true);
      if(type==="sunnah"){
        if(prayer==="3" || prayer==="5") setShowFull(true);
        else setShowSunnah(true);
      }
    }
    if(rakah==="4") (type==="sunnah"?setShowSunnah(true):setShowFardh(true));
  });
  
  return (
    <IonSlide>
      <div>
        <img style={{ height: 350 }} src="/assets/images/Qijam.png" alt=""/>
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
                  <IonChip color={color}>{translationService.getLabel('label-prayer-qijam-header')}</IonChip>
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
                  <IonText hidden={!showFull}>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-prayer-qijam-description-first-rakah')}
                    </h2>
                    
                  </IonText>
                  <IonText hidden={!showSunnah}>
                  <h2 className="lesson-note">
                  {translationService.getLabel('label-prayer-qijam-description-second-rakah')}
                  </h2>
                  </IonText>
                  <IonText hidden={!showFardh}>
                  <h2 className="lesson-note">
                  {translationService.getLabel('label-prayer-qijam-description-third-rakah')}
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

export default QijamWatch;
