import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow, IonSlide, IonText } from "@ionic/react";
import { caretForwardCircleOutline, pauseCircleOutline } from "ionicons/icons";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import { Progress } from "../Progress";

interface QunutProps {
  color?:string;
  prayerLength?: number;
  currentAudio?:string;
  togglePlayPause:(audio:string)=>void;
}

const Qunut: React.FC<QunutProps> = ({color,prayerLength,currentAudio,togglePlayPause}) => {
    const { translate } = useTranslation();
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
                <h2 className="black"> {translate('label-third-rakah-header')}</h2>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding" size="6">
            <Progress currentValue={8} maxValue={prayerLength!} color={color} />
          </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonChip color={color}>
                <IonLabel>{translate('label-prayer-tekbir')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translate('label-prayer-qunut-description')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="12">
              <IonChip color={color}>
                <IonLabel>{translate('label-prayer-qunut-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translate('label-prayer-qunut-detail')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText>
                <h2 className="lesson-note">
                {translate('label-prayer-qunut-note')}
                </h2>
              
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className="audio-link-purple">Kunut dova</IonText>
              <IonButton
                className="no-shadow white"
                style={{marginTop:"0px"}}
                onClick={() => {togglePlayPause("KunutDova")}}
                fill="solid"
                
              >
                <IonIcon
                  slot="icon-only"
                  icon={currentAudio==="KunutDova"?pauseCircleOutline:caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          
          
        </IonGrid>
      </IonItem>
      </IonSlide>
      
    );
}

export default Qunut;