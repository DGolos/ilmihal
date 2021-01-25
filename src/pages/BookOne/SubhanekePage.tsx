import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const SubhanekePage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="purple" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Subhaneke</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Allaha, dž.š., veličamo i slavimo spominjući Njegova lijepa imene i hvaleći Njegove Uzvišene
osobine.</h2>
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
        <IonGrid className="ion-text-center">
            <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="purple">
                        <IonLabel>Arapski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow className="ayah">
            <IonCol size="12">
              <IonNote>
              Subhane-kellahumme ve bi-hamdike, ve tebare-kesmuke, ve te-&#39;ala
džedduke, va la-ilahe gajruke.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow >
            <IonCol size="12">
              <IonNote>
              Samo tebi pripada veličanje, moj Bože, i Tebi hvala. Tvoje je ime uzvišeno, Tvoje je
veličanstvo veliko, nema drugog Boga osim Tebe.
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default SubhanekePage;