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
import { Progress } from "../Progress";
import useTranslation from "../../hooks/useTranslation";

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
  const { translate } = useTranslation();
  return (
    <IonSlide>
      <IonItem
        key="1"
        detail={false}
        lines="none"
        className="lesson-note"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="6">
              <IonText>
                <h2 className="black">
                  {first === true
                    ? translate(
                        "label-prayer-first-tashahud-header"
                      )
                    : translate(
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
                  {translate(
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
                {translate(
                  "label-prayer-kade-ehire-description"
                )}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow hidden={first}>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>
                {translate("label-prayer-ettehijjatu")}
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
                {translate("label-prayer-salawat")}
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
                {translate("label-prayer-dua-header")}
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
                  {translate("label-prayer-selam-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translate("label-prayer-selam-description")}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translate("label-prayer-ettehijjatu")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {salawat?translate("label-prayer-ettehijjatu-salawat-description"):translate("label-prayer-ettehijjatu-description")}
                </h2>
                
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="6">
              <IonText className={`audio-link-${color}`}>
                {translate("label-prayer-ettehijjatu")}
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
                {translate("label-prayer-salawat")}
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
