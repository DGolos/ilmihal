import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const PrayerPartsPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/BookTwoMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="dark-brown">
        <IonCardTitle>
              <h1 className="lesson" >Dijelovi namaza</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Allahu je prava vjera jedino islam."</h3>
              <p className="quote-reference">Kur'an 3:19</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Namaz ima šest sastavnih dijelova, i to:</h2>
                    <h2 className="lesson-note">1. početni tekbir (iftitāh-i tekbir),</h2>
                    <h2 className="lesson-note">2. stajanje (kijam),</h2>
                    <h2 className="lesson-note">3. učenje Kur&#39;ana (kiraet),</h2>
                    <h2 className="lesson-note">4. pregibanje (ruku&#39;),</h2>
                    <h2 className="lesson-note">5. spuštanje lica na zemlju (sedžde),</h2>
                    <h2 className="lesson-note">6. sjedenje na svršetku namaza (ka&#39;de-i ehireh).</h2>
                    
                    
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Sastavni dijelovi namaza zovu se namaski ruknovi. Stajanje, učenje, pregibanje i spuštanje lica
na zemlju čine jedan rekat. Namaz može imati dva, tri ili četiri rekata.</h2>
                <h2 className="lesson-note">Namaski ruknovi su sastavni dijelovi namaza bez kojih se namaz ne može zamisliti, a
izostavljanje nekog od njih, namjerno ili iz zaborava, kvari namaz.Namaz se pokvari: ako se izgubi abdest (pusti vjetar), ako se u namazu progovori, nasmije,
jaukne, glasno zaplače, bez potrebe iskašljava ili učini bilo šta što ne priliči da se učini u
namazu.</h2>
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default PrayerPartsPage;