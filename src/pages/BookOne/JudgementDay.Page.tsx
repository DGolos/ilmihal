import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const JudgementDayPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/ImanMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Sudnji dan</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi smo naredili čovjeku da sluša roditelje svoje.”</h3>
              <p className="quote-reference">Kur'an Lukman,14</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Posljednji dan je dan kada će ovaj svijet i sve živo na njemu nestati. Sudnji je dan kada
će Svemogući Bog stvoriti drugi vječni život i sve mrtvo oživjeti i pozvati ljude da im sudi
za njihova djela.</h2>
                    <h2 className="lesson-note">Svakom čovjeku na Sudnjem danu bit će predočena njegova dobra i loša djela za koja
će biti nagrađen ili kažnjen. Za dobra djela nagrada na Sudnjem danu je Džennet (raj),
a za loša djela kazna je Džehennem (pakao).</h2>
                    <h2 className="lesson-note">Niko, osim Allah, dž.š., ne zna kada će biti Sudnji dan.</h2>
                </IonText>
            </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default JudgementDayPage;
