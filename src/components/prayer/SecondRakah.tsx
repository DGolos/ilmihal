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

interface SecondRakahProps {
  color?: string;
  prayerLength?: number;
  currentAudio?:string;
  togglePlayPause:(audio:string)=>void;
}

const SecondRakah: React.FC<SecondRakahProps> = ({ color, prayerLength,currentAudio,togglePlayPause }) => {
  
  return (
    <>
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
                  {translationService.getLabel("label-second-rakah-header")}
                </h2>
              </IonNote>
            </IonCol>
            <IonCol className="ion-padding" size="6">
              <Progress
                currentValue={4}
                maxValue={prayerLength!}
                color={color}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-bismilla-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                {translationService.getLabel(
                  "label-prayer-bismilla-description"
                )}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-bismilla-header")}
              </IonText>
              <IonButton
                class="no-shadow"
                style={{marginTop:"0px"}}
                onClick={() => {
                  togglePlayPause("Bismilla");
                }}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Bismilla"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-fatiha-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                {translationService.getLabel("label-prayer-fatiha-description")}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>El-Fatiha</IonText>
              <IonButton
                class="no-shadow"
                style={{marginTop:"0px"}}
                onClick={() => {
                  togglePlayPause("Fatiha");
                }}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Fatiha"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-surah-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                {translationService.getLabel("label-prayer-surah-description")}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
              <IonCol size="4">
                <IonText className={`audio-link-${color}`}>En-Nas</IonText>
                <br />
                <IonButton
                  class="no-shadow"
                  onClick={() => {
                    togglePlayPause("Nas");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={currentAudio==="Nas"?pauseCircleOutline:caretForwardCircleOutline}
                    color={color}
                  />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonText className={`audio-link-${color}`}>El-Felek</IonText>
                <br />
                <IonButton
                  class="no-shadow"
                  onClick={() => {
                    togglePlayPause("Felek");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={currentAudio==="Felek"?pauseCircleOutline:caretForwardCircleOutline}
                    color={color}
                  />
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonText className={`audio-link-${color}`}>El-Ihlas</IonText>
                <br />
                <IonButton
                  class="no-shadow"
                  onClick={() => {
                    togglePlayPause("Ihlas");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={currentAudio==="Ihlas"?pauseCircleOutline:caretForwardCircleOutline}
                    color={color}
                  />
                </IonButton>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonItem>
      </IonSlide>
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
                  {translationService.getLabel("label-second-rakah-header")}
                </h2>
              </IonNote>
            </IonCol>
            <IonCol className="ion-padding" size="6">
              <Progress
                currentValue={5}
                maxValue={prayerLength!}
                color={color}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-ruku-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                {translationService.getLabel("label-prayer-ruku-description")}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-ruku-header")}
              </IonText>
              <IonButton
                class="no-shadow"
                style={{marginTop:"0px"}}
                onClick={() => {
                  togglePlayPause("Ruku");
                }}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Ruku"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{ marginLeft: "0px" }}>
                <IonLabel>
                  {translationService.getLabel("label-prayer-sujud-header")}
                </IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                {translationService.getLabel("label-prayer-sujud-description")}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>
                {translationService.getLabel("label-prayer-sujud-header")}
              </IonText>
              <IonButton
                class="no-shadow"
                style={{marginTop:"0px"}}
                onClick={() => {
                  togglePlayPause("Sedzda");
                }}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Sedzda"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonSlide>
      
    </>
  );
};

export default SecondRakah;
