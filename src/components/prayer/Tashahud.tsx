import {
  IonButton,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
  IonSlide,
  IonText
} from "@ionic/react";

import { caretForwardCircleOutline, pauseCircleOutline } from "ionicons/icons";
import React from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "./../common/Progress";

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
        color="light"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="6">
              <IonNote>
                <h2>
                  {first === true
                    ? translationService.getLabel(
                        "label-prayer-first-tashahud-header"
                      )
                    : translationService.getLabel(
                        "label-prayer-last-tashahud-header"
                      )}
                </h2>
              </IonNote>
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
              <IonNote>
                {translationService.getLabel(
                  "label-prayer-kade-ehire-description"
                )}
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow hidden={first}>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-ettehijjatu")}
              </IonText>
              <br />
              <IonButton
                class="no-shadow"
                onClick={() => {
                  togglePlayPause("Ettehijjatu");
                }}
                fill="solid"
                color="light"
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
                class="no-shadow"
                onClick={() => {
                  togglePlayPause("Salavati");
                }}
                fill="solid"
                color="light"
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
                class="no-shadow"
                onClick={() => {
                  togglePlayPause("Dova");
                }}
                fill="solid"
                color="light"
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
              <IonNote>
                {translationService.getLabel("label-prayer-selam-description")}
              </IonNote>
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
              <IonNote>
                {salawat?translationService.getLabel("label-prayer-ettehijjatu-salawat-description"):translationService.getLabel("label-prayer-ettehijjatu-description")}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="6">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-ettehijjatu")}
              </IonText>
              <IonButton
                class="no-shadow"
                style={{ marginTop: "0px" }}
                onClick={() => {
                  togglePlayPause("Ettehijjatu");
                }}
                fill="solid"
                color="light"
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
                class="no-shadow"
                onClick={() => {
                  togglePlayPause("Salavati");
                }}
                fill="solid"
                color="light"
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
