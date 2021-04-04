import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { link } from "fs";
import { arrowRedoOutline, linkSharp, logoFacebook, mailOpen, peopleOutline, thumbsUpOutline } from "ionicons/icons";

const OptionsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="bg-image-purple" fullscreen>
        <div className="ion-padding" style={{marginTop:"30px"}}>
          <IonCard className="lesson-header" color="dark-brown">
            <IonItem className="dark-brown ion-text-center white-line" style={{ marginBottom: "0px" }}>
              <IonText color="light" >
                <h4  style={{ fontSize: "28px", fontWeight: "bold" }}>iMekteb</h4>
                <p style={{ fontSize: "10px" }}> app by</p>
                <h4  style={{ fontSize: "20px", fontWeight: 300 }}>Islamska zajednica Bošnjaka u Norveškoj</h4>
              </IonText>
            </IonItem>
            <IonItem className="dark-brown white-line" style={{ marginBottom: "0px" }} routerLink={`/CreditsPage`}>
              <IonAvatar>
                <IonIcon icon={peopleOutline} color="light"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
              <IonLabel color="light" className="ion-padding-start"><h4  style={{ fontSize: "20px" , fontWeight: "bold"}}>iMekteb tim</h4>
                <p style={{ fontSize: "12px" }}> Ljudi koji su implementirali iMekteb projekat</p></IonLabel>
            </IonItem>
            <IonItem className="dark-brown white-line" style={{ marginBottom: "0px" }}>
            <IonAvatar>
                <IonIcon icon={arrowRedoOutline} color="light"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
            <IonLabel color="light" className="ion-padding-start"><h4  style={{ fontSize: "20px" , fontWeight: "bold"}}>Podijelite</h4>
                <p style={{ fontSize: "12px" }}> Podijelite link za iMekteb app sa porodicom i prijateljima</p></IonLabel>
            </IonItem>
            <IonItem className="dark-brown" lines="none" style={{ marginBottom: "0px" }}>
            <IonAvatar>
                <IonIcon icon={thumbsUpOutline} color="light"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
            <IonLabel color="light" className="ion-padding-start"><h4  style={{ fontSize: "20px" , fontWeight: "bold"}}>Ocijenite iMekteb</h4>
                <p style={{ fontSize: "12px" }}>Ocijenite iMekteb app i ostavite komentar na kako vam se svidja </p></IonLabel>
            </IonItem>
            
          </IonCard>
          <IonCard className="lesson-header" color="burgundy" style={{ marginTop: "20px" }}>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonText style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Budite u vezi
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4">
                  <IonButton fill="clear">
                  <IonIcon
                    style={{ fontSize: "20px" }}
                    icon={linkSharp}
                    color="light"
                    slot="start"
                  />
                  <IonText color="light" >Web</IonText>
                  </IonButton>
                  
                </IonCol>
                <IonCol size="4">
                <IonButton fill="clear">
                  <IonIcon
                    style={{ fontSize: "20px" }}
                    icon={logoFacebook}
                    color="light"
                    slot="start"
                  />
                  <IonText color="light">Facebook</IonText>
                  </IonButton>
                </IonCol>
                <IonCol size="4">
                <IonButton fill="clear">
                  <IonIcon
                    style={{ fontSize: "20px" }}
                    icon={mailOpen}
                    color="light"
                    slot="start"
                  />
                  <IonText color="light">Kontakt</IonText>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
        </div>
        
      </IonContent>
      <IonFooter className="ion-padding ion-no-border">
            <IonText style={{ fontSize: "12px" }} color="light">Privacy policy</IonText>
          </IonFooter>
    </IonPage>
  );
};

export default OptionsPage;
