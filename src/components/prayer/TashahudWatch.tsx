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
import { Progress } from "./../common/Progress";

interface TashahudProps {
  rakah?: string;
  color?: string;
  last?: boolean;
  prayerLength?: number;
  stepValue?: number;
  maxValue?: number;
  salawat?:boolean;
}

const TashahudWatch: React.FC<TashahudProps> = ({
  rakah,
  color,
  last,
  prayerLength,
  stepValue,
  maxValue,
  salawat
}) => {
  const [currentRakah, setCurrenRakah] = useState("1");

  useIonViewWillEnter(() => {
    if (rakah === "1")
      setCurrenRakah(translationService.getLabel("label-first-rakah-header"));
    if (rakah === "2")
      setCurrenRakah(translationService.getLabel("label-second-rakah-header"));
    if (rakah === "3")
      setCurrenRakah(translationService.getLabel("label-third-rakah-header"));
    if (rakah === "4")
      setCurrenRakah(translationService.getLabel("label-fourth-rakah-header"));
  });

  return (
    <IonSlide>
      <div>
        <img style={{ height: 350 }} src="/assets/images/Tashashud.png" />
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
                <IonCol size="6">
                  <IonText>
                    <h2 className="black">{currentRakah}</h2>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow hidden={!last}>
                <IonCol size="6">
                  <IonChip color={color}>
                    {translationService.getLabel("label-prayer-end-header")}
                  </IonChip>
                </IonCol>
                <IonCol size="6">
                  <Progress
                    currentValue={stepValue!}
                    maxValue={maxValue!}
                    color={color}
                  />
                </IonCol>
              </IonRow>

              <IonRow hidden={!last}>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel(
                      "label-prayer-end-description"
                    )}
                    </h2>
                    
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow hidden={last}>
                <IonCol size="6">
                  <IonChip color={color}>
                    {translationService.getLabel(
                      "label-prayer-first-tashahud-header"
                    )}
                  </IonChip>
                </IonCol>
                <IonCol size="6">
                  <Progress
                    currentValue={stepValue!}
                    maxValue={maxValue!}
                    color={color}
                  />
                </IonCol>
              </IonRow>

              <IonRow hidden={last}>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                    {salawat===true? translationService.getLabel("label-prayer-first-tashahud-sunnah-description"):translationService.getLabel("label-prayer-first-tashahud-description")}
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

export default TashahudWatch;
