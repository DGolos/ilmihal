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
  IonText,
  useIonViewWillLeave,
} from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../common/Progress";

interface FirstRakahProps {
  color?: string;
  prayerLength?: number;
}

const FirstRakah: React.FC<FirstRakahProps> = ({ color, prayerLength }) => {
  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentAudio, setCurrnetAudio] = useState("");
  useIonViewWillLeave(() => {
    if (isLoaded) {
      playerRef.current.stop();
    }
  });

  useEffect(() => {
    return ()=>{
      playerRef.current.unload();
    };
  }, []);

  const toglePlayPause = (file: string) => {
    playerRef.current.stop();
    setIsLoaded(false);

    if (file !== currentAudio) {
      const onLoad = () => {
        setIsLoaded(true);
      };

      playerRef.current = new Howl({
        src: `/assets/audio/Lessons/${file}.mp3`,
        preload: true,
        html5: true,
        onload: onLoad,
        format: ["mp3"],
      });
      setCurrnetAudio(file);
    }

    playerRef.current.play();
  };
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
                    {translationService.getLabel("label-first-rakah-header")}
                  </h2>
                </IonNote>
              </IonCol>
              <IonCol className="ion-padding" size="6">
                <Progress
                  currentValue={2}
                  maxValue={prayerLength!}
                  color={color}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonChip color={color} style={{ marginLeft: "0px" }}>
                  <IonLabel>
                    {translationService.getLabel("label-prayer-tekbir")}
                  </IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonNote>
                  {translationService.getLabel(
                    "label-prayer-first-rakah-beginning"
                  )}
                </IonNote>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonText className={`audio-link-${color}`}>
                  {translationService.getLabel("label-prayer-subhaneke")}
                </IonText>
                <br />
                <IonButton
                  class="no-shadow"
                  onClick={() => {
                    toglePlayPause("Subhaneke");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
                    color={color}
                  />
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonText className={`audio-link-${color}`}>
                  {translationService.getLabel("label-prayer-audhu")}
                </IonText>
                <br />
                <IonButton
                  class="no-shadow"
                  onClick={() => {
                    toglePlayPause("EuzaBismilla");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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
                  {translationService.getLabel(
                    "label-prayer-fatiha-description"
                  )}
                </IonNote>
              </IonCol>
            </IonRow>
            <IonRow className="ayah">
              <IonCol size="12">
                <IonText className={`audio-link-${color}`}>El-Fatiha</IonText>
                
                <IonButton
                  className="no-shadow"
                  style={{marginTop:"0px"}}
                  onClick={() => {
                    toglePlayPause("Fatiha");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
                    color={color}
                  />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonChip color={color} style={{ marginLeft: "0px" }}>
                  <IonLabel>
                    {translationService.getLabel("label-prayer-surah-header")}
                  </IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonNote>
                  {translationService.getLabel(
                    "label-prayer-surah-description"
                  )}
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
                    toglePlayPause("Nas");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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
                    toglePlayPause("Felek");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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
                    toglePlayPause("Ihlas");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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
          key="2"
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
                    {translationService.getLabel("label-first-rakah-header")}
                  </h2>
                </IonNote>
              </IonCol>
              <IonCol className="ion-padding" size="6">
                <Progress
                  currentValue={3}
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
                    toglePlayPause("Ruku");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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
                  {translationService.getLabel(
                    "label-prayer-sujud-description"
                  )}
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
                    toglePlayPause("Sedzda");
                  }}
                  fill="solid"
                  color="light"
                >
                  <IonIcon
                    slot="icon-only"
                    icon={caretForwardCircleOutline}
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

export default FirstRakah;
