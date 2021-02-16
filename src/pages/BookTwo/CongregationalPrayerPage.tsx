import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const CongregationalPrayerPage: React.FC = () => {

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
              <h1 className="lesson" >Namaz u džematu</h1>
             
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
                <h2 className="lesson-note">Farz-namaz klanjamo pojedinačno, svako sam za sebe ili zajednički (džematile), a sunnet
namaze klanjamo samo svako za se. Zajedničko klanjanje za imamom zove se džemat (skup,
zajednica). Klanjanje u džematu preporučeno je Kuranom i Hadisom a ima i veću nagradu od
Boga dž. š. Svaki džemat ima imama, koji ga predvodi i mujezina.</h2>
                <h2 className="lesson-note">Kada osoba zakasni u džemat ona će stati u saff, zanijjetiti će i nastaviti klanjati za
imamom. Na osnovu ostatka namaza znaće šta je od namaza propustila.</h2>
                <h2 className="lesson-note">Na zadnjem sjedenju osoba koja je zakasnila u džemat će učiti samo Ettehijjatu bez Salavata i
Dove. Čekaće da imam preda selam na desnu stranu i počne izgovarati i predavati selam na
lijevu stranu. Ta osoba neće predavati selam nego će ustati i klanjati one rekate koje je
propustila.</h2>   
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default CongregationalPrayerPage;