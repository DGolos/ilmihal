import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const CharityDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="razimic" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="razimic">
            <IonCardHeader className="ion-text-center">
              <IonCardSubtitle>
                <h1 className="lesson-header">Zekat</h1>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Zekat je obavezno davanje jednog dijela iz viška imovine siromašnim
muslimanima i muslimankama ili u druge korisne svrhe islamske zajednice
(Bejtul-mal) u cilju postizanja Allahova zadovoljstva.Zekat je dužan davati svaki musliman i muslimanka, koji su punoljetani, umno
zdravi, slobodani i koji posjeduju nisab.
                </h2>
              </IonText>
            </IonItem>
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Nisab je određena vrijednost ili količina imovine koju posjedujemo tokom godine
dana da bi podlegla obavezi zekata.Zekat se daje na novac, dragocjenosti (nakit, zlato, srebro), trgovačku robu,
živo blago (stoku) i ostale vrijednosti. Imovina koja spada u zekat dijeli se u
toku godine do vrijednosti od 2,5% od te imovine.
                </h2>
              </IonText>
            </IonItem>
          </div>
         
        </IonContent>
      </IonPage>
    );
}

export default CharityDefinitionPage;