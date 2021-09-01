import {
  IonItem,
  IonText,
} from "@ionic/react";
import React from "react";

interface surahListItemProps {
  surahId?: string;
  surahName?: string;
  arabic?: string;
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
    <IonItem
      routerLink={`/tabs/AyahPage/${surahId}/${firstAyahId}/${lastAyahId}`}
      className="lesson-note"
      lines="none"
    >
      <IonText color={surahColor} className="ion-text-center">
        <h6  style={{ fontSize: "16px", fontWeight: "bold" }}>{surahName}</h6>
        <p className="ion-text-center" style={{ fontSize: "12px" }}>
          {firstAyahId}-{lastAyahId}{" "}
        </p>
      </IonText>
    </IonItem>
  );
};

export default SurahListItem;
