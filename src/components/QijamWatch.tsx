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

interface QijamProps {
  rakah?: string;
  type?:string;
  prayer?:string;
}

const QijamWatch: React.FC<QijamProps> = ({ rakah,type,prayer}) => {
  const [currentRakah,setCurrenRakah]=useState("1");
  const [showFull,setShowFull]=useState(false);
  const [showSunnah,setShowSunnah]=useState(false);
  const [showFardh,setShowFardh]=useState(false);

  useIonViewWillEnter(() => {
    if(rakah==="1") setCurrenRakah("Prvi");
    if(rakah==="2") setCurrenRakah("Drugi");
    if(rakah==="3") setCurrenRakah("Treći");
    if(rakah==="4") setCurrenRakah("Četvrti");

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
                    <h2>{currentRakah} rekat</h2>
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy">Stajanje</IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonNote hidden={!showFull}>
                    Na stajanju učimo subhaneke,euzu i
                    Bismillu,Fatihu i jednu suru.
                  </IonNote>
                  <IonNote hidden={!showSunnah}>
                    Na stajanju učimo Fatihu i jednu suru.
                  </IonNote>
                  <IonNote hidden={!showFardh}>
                    Na stajanju učimo Fatihu.
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
