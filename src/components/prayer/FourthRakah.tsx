import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel,  IonRow, IonSlide, IonText } from "@ionic/react";
import { caretForwardCircleOutline, pauseCircleOutline } from "ionicons/icons";
import React from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "./../common/Progress";

interface FourthRakahProps {
  type?: string;
  color?:string;
  prayerLength?: number;
  currentAudio?:string;
  togglePlayPause:(audio:string)=>void;
}

const FourthRakah:  React.FC<FourthRakahProps>  = ({ type,color,prayerLength,currentAudio,togglePlayPause}) =>{
  
    return (
      <>
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
                <h2 className="black">{translationService.getLabel('label-fourth-rakah-header')}</h2>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding" size="6">
            <Progress currentValue={9} maxValue={prayerLength!} color={color} />
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-bismilla-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText><h2 className="lesson-note">{translationService.getLabel('label-prayer-bismilla-description')}</h2></IonText>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-bismilla-header')}</IonText>
              <IonButton
                className="no-shadow white"
                style={{marginTop:"0px"}}
                onClick={() => {togglePlayPause("Bismilla")}}
                fill="solid"
                
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
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-fatiha-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-prayer-fatiha-description')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>El-Fatiha</IonText>
              <IonButton
                className="no-shadow white"
                style={{marginTop:"0px"}}
                onClick={() => {togglePlayPause("Fatiha")}}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="Fatiha"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-surah-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-prayer-surah-description')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
              <IonCol size="4">
                <IonText className={`audio-link-${color}`}>En-Nas</IonText>
                <br />
                <IonButton
                  className="no-shadow white"
                  onClick={() => {
                    togglePlayPause("Nas");
                  }}
                  fill="solid"
                  
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
                  className="no-shadow white"
                  onClick={() => {
                    togglePlayPause("Felek");
                  }}
                  fill="solid"
                  
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
                  className="no-shadow white"
                  onClick={() => {
                    togglePlayPause("Ihlas");
                  }}
                  fill="solid"
                  
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
        className="lesson-note"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="6">
              <IonText>
                <h2 className="black">{translationService.getLabel('label-fourth-rakah-header')}</h2>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding" size="6">
            <Progress currentValue={10} maxValue={prayerLength!} color={color} />
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-ruku-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-prayer-ruku-description')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-ruku-header')}</IonText>
              <IonButton
                className="no-shadow white"
                style={{marginTop:"0px"}}
                onClick={() => {togglePlayPause("Ruku");}}
                fill="solid"
                
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
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-sujud-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-prayer-sujud-description')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-sujud-header')}</IonText>
              <IonButton
                className="no-shadow white"
                style={{marginTop:"0px"}}
                onClick={() => {togglePlayPause("Sedzda");}}
                fill="solid"
                
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
}

export default FourthRakah;