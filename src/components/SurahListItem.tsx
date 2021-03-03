import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from "@ionic/react";
import React, { useState } from "react";

interface surahListItemProps {
  surahId?: string;
  surahName?: string;
  arabic?:string;
  firstAyahId?: string;
  lastAyahId?: string;
  surahColor: string;
}

const SurahListItem: React.FC<surahListItemProps> = ({
  surahId,
  surahName,
  firstAyahId,
  lastAyahId,
  surahColor,
}) => {
  return (
    <IonCard
      routerLink={`/AyahPage/${surahId}/${firstAyahId}/${lastAyahId}`}
      color="light"
    >
      <IonCardHeader color={surahColor} className="ion-text-center" style={{fontSize:"20px"}}>
        
      </IonCardHeader>
      <IonCardContent>
        <IonCardTitle style={{fontSize:"20px",fontWeight:"normal"}} className="ion-text-center">{surahName}</IonCardTitle>
        <IonCardSubtitle className="ion-text-center" style={{fontSize:"14px",fontWeight:"bold"}}>{firstAyahId}-{lastAyahId}{" "}</IonCardSubtitle>
      </IonCardContent>
      
    </IonCard>
  );
};

export default SurahListItem;
