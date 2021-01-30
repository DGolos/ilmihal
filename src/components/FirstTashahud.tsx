import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText } from "@ionic/react";
import { caretForwardCircleOutline } from "ionicons/icons";
import React from "react";

interface FirstTashahudProps {
  hidden?: boolean;
}

const FirstTashahud: React.FC<FirstTashahudProps> = ({ hidden}) => {

    if (hidden) return <></>;
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
                <h2>Prvo sjedenje</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Sjedenje</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Na prvom sjedenju učimo et-tehijatu.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className="audio-link">Et-tehijatu</IonText>
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

export default FirstTashahud;