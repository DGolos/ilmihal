import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText } from "@ionic/react";
import { caretForwardCircleOutline } from "ionicons/icons";
import React from "react";

const Qunut: React.FC = () => {
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
                <h2> Treći rekat(nastavak)</h2>
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Tekbir</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Podignemo ruke do ušiju i izgovorimo "Allahu ekber".
              </IonNote>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Kunut dova</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Nakon tekbira se sastave ruke(svežu), a zatim se uči Kunut-dova.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Allahumme inna neste-inuke ve nestag-firuke, ve nesteh-dike ve nu&#39;minu bike, ve netubu ilejke ve
netevekkelu &#39;alejke, ve nusni &#39;alejkel-hajre kullehu. Neškuruke va la nekfuruke. Ve nahle&#39;u ve
netruku men jefdžuruke. Allahumme ijjake na&#39;budu ve leke nusalli ve nesdžudu, ve ilejke nes&#39;ā ve
nahfidu. Nerdžu rahmeteke ve nahša &#39;azabeke. Inne &#39;azabeke bil-kuffari mulhik.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className="audio-link">Kunut dova</IonText>
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

export default Qunut;