import { IonProgressBar, IonText } from "@ionic/react";
import React from "react";
import { translationService } from "../services/TranslationService";

interface ProgressProps {
  currentValue: number;
  maxValue: number;
  color?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  currentValue,
  maxValue,
  color,
}) => {
  return (
    <>
      <IonText color={color} style={{ fontSize: "12px" }}>{currentValue} {translationService.getLabel('label-from')} {maxValue}</IonText>
      <br />
      <IonProgressBar color={color} value={currentValue / maxValue}></IonProgressBar>
    </>
  );
};
