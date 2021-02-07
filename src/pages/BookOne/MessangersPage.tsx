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

const MessangersPage: React.FC = () => {
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
              <h1 className="lesson" >Božiji poslanici</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi smo svakom narodu poslanika poslali.”</h3>
              <p className="quote-reference">Kur'an En-Nehl,36</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Božiji poslanici su odabrani ljudi (pejgamberi) kojima je Bog dž. š. slao svoje objave da
ih prenesu i objasne ljudima.</h2>
                    <h2 className="lesson-note">Bilo je mnogo Božijih poslanika, u hadisu su se spominje da ih je bilo oko 124 hiljade a u Kur'anu ih je spomenuto 25.</h2>
                    <h2 className="lesson-note">Prvi Božiji poslanik je Adem, a.s., koji je ujedno i prvi čovjek na zemlji. Posljednji Božiji
poslanik je Muhammed, a.s.. Poslije Muhammeda, a.s., neće doći nijedan poslanik niti ijedna objava poslije Kur'ana.</h2>
                    <h2 className="lesson-note">Od ostalih Božijih poslanika najpoznatiji su: Nuh, Ibrahim,Ismail,Jakub,Jusuf,Musa,Sulejman,Davud i Isa.</h2>
                </IonText>
            </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MessangersPage;
