import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const HajjDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard className="lesson-header ion-padding" color="purple">
            <IonCardHeader className="ion-text-center">
              <IonCardSubtitle>
                <h1 className="lesson-header">Hadž</h1>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note">
                  Hadž je posjeta Ka&#39;be (Bejtullaha-Božije kuće) u gradu
                  Mekki jednom u životu.Allah dž.š. u Kur&#39;anu poziva sve
                  muslimane i muslimanke da posjete Ka&#39;bu i izvrše propisane
                  obrede hadža ako zato (za to) imaju mogućnosti.Hadž ima tri osnovna farza koja mora svaki hadžija izvršiti.
                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonItem
            key="1"
            detail={false}
            color="light"
            lines="none"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            <IonGrid className="ion-text-left">
            
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>Ihram</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonNote>
                   Obući ihram  koji se sastoji od dva čista ogrtača za muškarce, a žene pokrivaju i glavu.
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>Arefat</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonNote>
                    Boraviti na Arefatu deveti dan zul-hidžeta,
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>Tavaf</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonNote>
                  Tavafi zijaret što je počasni obilazak oko Ka&#39;be u danima Kurban-bajrama.
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default HajjDefinitionPage;