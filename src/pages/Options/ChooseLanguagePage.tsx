import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText  
} from "@ionic/react";
import { storageService } from "../../services/StorageService";
import { useHistory } from "react-router";
import { translationService } from "../../services/TranslationService";


export const ChooseLanguagePage: React.FC = () => {
  const [language, setLanguage] = useState<string>("");
  const history=useHistory();
  const save = () => {
    storageService.set("languageData",language);
    translationService.load();
    history.push("/ChooseLocationPage");
  }
  return (
    <IonPage>
      <IonContent className="bg-image-purple" fullscreen>
        <div className="center">
          <IonItem className={`${language==="ba"?"activated":"welcome"}`} onClick={() => {
                    setLanguage("ba");
                  }}>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonImg src="./assets/images/ba.png" />
                </IonCol>
                <IonCol size="8">
                  <IonText>
                    <h1>Bosanski</h1>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem className={`${language==="no"?"activated":"welcome"}`} onClick={() => {
                    setLanguage("no");
                  }}>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonImg src="./assets/images/no.png" />
                </IonCol>
                <IonCol size="8">
                  <IonText>
                    <h1>Norsk</h1>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

          
        </div>
        
        
      </IonContent>
      <IonFooter className="ion-no-border">
          <IonGrid>
            <IonRow>
              
              <IonCol size="12">
              <IonButton
                className="pressed"
                expand="block"
                size="large"
                shape="round"
                onClick={() => {
                  save();
                }}
                disabled={language===""}
              >
                <IonLabel color="light" className="ion-text-center">
                  Slijedeća/ Neste
                </IonLabel>
              </IonButton>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </IonFooter>
    </IonPage>
  );
};


