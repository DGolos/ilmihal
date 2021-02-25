import {
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonNote,
  IonRow,
  IonSlide,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { translationService } from "../services/TranslationService";

interface QijamProps {
  rakah?: string;
  type?:string;
  prayer?:string;
  color?:string;
}

const QijamWatch: React.FC<QijamProps> = ({ rakah,type,prayer,color}) => {
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
        <img style={{ height: 350 }} src="/assets/images/Qijam.png" />
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
                  <IonNote>
                    <h2>{currentRakah}</h2>
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonChip color={color}>{translationService.getLabel('label-prayer-qijam-header')}</IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonNote hidden={!showFull}>
                    {translationService.getLabel('label-prayer-qijam-description-first-rakah')}
                  </IonNote>
                  <IonNote hidden={!showSunnah}>
                  {translationService.getLabel('label-prayer-qijam-description-second-rakah')}
                  </IonNote>
                  <IonNote hidden={!showFardh}>
                  {translationService.getLabel('label-prayer-qijam-description-third-rakah')}
                  </IonNote>
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
