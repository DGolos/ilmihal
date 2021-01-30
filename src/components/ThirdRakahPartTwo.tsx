import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText } from "@ionic/react";
import { caretForwardCircleOutline } from "ionicons/icons";
import React from "react";

const ThirdRakahPartTwo: React.FC = () => {
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
                <h2>Treći rekat(nastavak)</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Ruku</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Na ruku'u (pregibanju) učimo tri puta: Subhane rabbijel-azim.
                Dižući se s ruku'a izgovaramo:Semiallahu limen hamideh, zatim
                malo zastanemo i reknemo: Rabbena lekel-hamd.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <IonText className="audio-link">Ruk'u</IonText>
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
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Sedžda</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Na sedždi (spuštanje lica na tlo) učimo tri puta: Subhane
                rabbijel-e ́ala.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className="audio-link">Sedžda</IonText>
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

export default ThirdRakahPartTwo;