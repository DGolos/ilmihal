import {
    IonAvatar,
    IonChip,
    IonCol,
    IonGrid,
    IonItem,
    IonLabel,
    IonNote,
    IonRow,
    IonSlide,
    useIonViewWillEnter,
  } from "@ionic/react";
  import React, { useState } from "react";
  
  interface surahListItemProps {
    surahId?: string;
    surahName?:string;
    firstAyahId?:string;
    lastAyahId?:string;
    surahColor:string;
  }
  
  const SurahListItem: React.FC<surahListItemProps> = ({ surahId,surahName,firstAyahId,lastAyahId,surahColor}) => {
    return(
        <IonItem routerLink={`/AyahPage/${surahId}/${firstAyahId}/${lastAyahId}`} lines="none" detail={false} color="light">
              
              <IonLabel className="ion-padding-start">
              <h3 >{surahName}</h3>
          <h6>{firstAyahId}-{lastAyahId} </h6>
                
              </IonLabel>
              
              
              
            </IonItem>
    );
  };
  
  export default SurahListItem;
  