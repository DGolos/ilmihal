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
  
  interface TashahudProps {
    rakah?: string;
    type?:string;
    last?:boolean;
  }
  
  const TashahudWatch: React.FC<TashahudProps> = ({ rakah,type,last}) => {
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
          <img style={{ height: 350 }} src="/assets/images/Tashashud.png" />
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
                <IonRow hidden={!last}>
                  <IonCol size="12">
                    <IonChip color="burgundy">Zadnje sjedenje</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow hidden={!last}>
                  <IonCol size="12">
                    <IonNote>
                    Na zadnjem sjedenju učimo et-tehijatu,salavate i dovu.
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow hidden={last}>
                  <IonCol size="12">
                    <IonChip color="burgundy">Prvo sjedenje</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow hidden={last}>
                  <IonCol size="12">
                <IonNote>
                Na prvom sjedenju svih namaza učimo et-tehijatu.
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
  
  export default TashahudWatch;
  