import {
  IonButton,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonSlide,
  IonText
} from "@ionic/react";

import { caretForwardCircleOutline, pauseCircleOutline } from "ionicons/icons";
import React from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../Progress";

interface TashashudProps {
  first?: boolean;
  color?: string;
  prayerLength?: number;
  salawat?: boolean;
  currentAudio?:string;
  togglePlayPause:(audio:string)=>void;
}

const Tashashud: React.FC<TashashudProps> = ({
  first,
  color,
  prayerLength,
  salawat,
  currentAudio,
  togglePlayPause
}) => {
  
  return (
    <IonSlide>
      <IonItem
        key="1"
        detail={false}
        lines="none"
        className="lesson-note"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="6">
              <IonText>
                <h2 className="black">
                  {first === true
                    ? translationService.getLabel(
                        "label-prayer-first-tashahud-header"
                      )
                    : translationService.getLabel(
                        "label-prayer-last-tashahud-header"
                      )}
                </h2>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding" size="6">
              <Progress
                currentValue={first === true ? 6 : prayerLength!}
                maxValue={prayerLength!}
                color={color}
              />
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel(
                    "label-prayer-kade-ehire-header"
                  )}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-prayer-kade-ehire-description"
                )}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow hidden={first}>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-ettehijjatu")}
              </IonText>
              <br />
              <IonButton
                className="no-shadow white"
                onClick={() => {
                  togglePlayPause("Ettehijjatu");
                }}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Ettehijjatu"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-salawat")}
              </IonText>
              <br />
              <IonButton
                className="no-shadow white"
                onClick={() => {
                  togglePlayPause("Salavati");
                }}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Salavati"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-dua-header")}
              </IonText>
              <br />
              <IonButton
                className="no-shadow white"
                onClick={() => {
                  togglePlayPause("Dova");
                }}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Dova"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-selam-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel("label-prayer-selam-description")}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-ettehijjatu")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {salawat?translationService.getLabel("label-prayer-ettehijjatu-salawat-description"):translationService.getLabel("label-prayer-ettehijjatu-description")}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="6">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-ettehijjatu")}
              </IonText>
              <IonButton
                className="no-shadow white"
                style={{ marginTop: "0px" }}
                onClick={() => {
                  togglePlayPause("Ettehijjatu");
                }}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Ettehijjatu"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            <IonCol size="6" hidden={!salawat}>
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-salawat")}
              </IonText>
              
              <IonButton
                className="no-shadow white"
                onClick={() => {
                  togglePlayPause("Salavati");
                }}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Salavati"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonSlide>
  );
};

export default Tashashud;
