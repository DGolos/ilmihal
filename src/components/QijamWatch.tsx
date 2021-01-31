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

  useIonViewWillEnter(() => {
    if(rakah==="1") setCurrenRakah("Prvi");
    if(rakah==="2") setCurrenRakah("Drugi");
    if(rakah==="3") setCurrenRakah("Treći");
    if(rakah==="4") setCurrenRakah("Četvrti");
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
                  <IonNote hidden={rakah!=="1"}>
                    Na stajanju prvog rekata učimo subhaneke,euzu i
                    bismillu,Fatihu i jednu suru.
                  </IonNote>
                  <IonNote hidden={rakah!=="2"}>
                    Na stajanju drugog rekata učimo Fatihu i jednu suru.
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
