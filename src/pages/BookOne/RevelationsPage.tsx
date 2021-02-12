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

const RelevationsPage: React.FC = () => {
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
              <h1 className="lesson" >Božiji kitabi</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi ti, doista, objavljujemo Knjigu”</h3>
              <p className="quote-reference">Kur'an 39:2</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Božije knjige (kitabi) su Božije objave koje su ljudima prenosili Božiji poslanici. U Božijim
kitabima sadržane su upute, savjeti i propisi o životu ljudi i obavljanju vjerskih dužnosti
koje je Allah dž. š. naredio ili zabranio ljudima.Svim Božijim poslanicima (pejgamberima) objavu je dostavljao melek Džibirl.Najpoznatija su nam četiri velika kitaba:</h2>
                    <h2 className="lesson-note"><b>Tevrat</b> objavljen Musau a.s.</h2>
                    <h2 className="lesson-note"><b>Zebur</b> objavljen Davudu a.s.</h2>
                    <h2 className="lesson-note"><b>Indžil</b> objavljen Isau a.s.</h2>
                    <h2 className="lesson-note"><b>Kur'an</b> objavljen Muhammedu a.s.</h2>
                </IonText>
            </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RelevationsPage;
