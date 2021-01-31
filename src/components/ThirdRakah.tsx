import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText } from "@ionic/react";
import { caretForwardCircleOutline } from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router";

interface ThirdRakahPropsProps {
  type?: string;
  showSubhaneke?:boolean;
}

const FourthRakah:  React.FC<ThirdRakahPropsProps>  = ({ type,showSubhaneke}) =>{
    return (
      <IonItem
        key="1"
        detail={false}
        lines="none"
        color="light"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="12">
              <IonNote>
                <h2>Treći rekat</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!showSubhaneke}>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Dove</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!showSubhaneke}>
            <IonCol size="12">
              <IonNote>
                Proučimo subhaneke,euzu i bismillu.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah" hidden={!showSubhaneke}>
            <IonCol size="6">
              <IonText className="audio-link">Subhaneke</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
            <IonCol size="6">
              <IonText className="audio-link">Euza i bismilla</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={showSubhaneke}>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Bismilla</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow className="ayah" hidden={showSubhaneke}>
            <IonCol size="12">
              <IonNote>Bismillahir-rahmanir-rahim.</IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Fatiha</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Suru El-Fatiha je obavezno učiti na svakom rekatu.Ako se ona ne
                prouči namaz nije važeći.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <IonText className="audio-link">El-Fatiha</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Sura</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Nakon sure El-Fatiha proučimo jednu kraću suru ili najmanje 3
                ajeta iz duže sure.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonText className="audio-link">En-Nas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className="audio-link">El-Felek</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className="audio-link">El-Ihlas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          
          
        </IonGrid>
      </IonItem>
    );
}

export default FourthRakah;