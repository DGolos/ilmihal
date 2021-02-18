import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const StoneWashingPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Tejemum</h1>
             
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
                <h2 className="lesson-note">U izvjesnm slučajevima može se, umjesto abdesta ili gusula, uzeti tejemmum, tj. može se
obaviti simbolično čišćenje čistom zemljom (prahom) ili predmetima napravljenim od
zemlje.Sve što kvari abdest, pokvariće i tejemmum.</h2>
                                   
                    
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Tejemum se uzima u slijedećim slučajevima</h2>
                <h2 className="lesson-note">-kada u toku jednog namaskog vremena nije moguće pribaviti vode;</h2>                   
                <h2 className="lesson-note">-kada imamo samo malo vode, koja nam je potrebna za piće ili za pribavljanje
hrane;</h2>   
                <h2 className="lesson-note">-kad se, u slučaju potrebe, nije moguće okupati.</h2> 
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Tejemum se uzima na slijedeći način</h2>
                <h2 className="lesson-note">-Izgovoriti nijjet. Nijjet tejemmuma za namaz glasi: Ja odlučih uzeti tejemmum
radi namaza i radi toga da se očistim, kako bih se mogao približiti Uzvišenom
Allahu.</h2>                   
                <h2 className="lesson-note">-Zatim dotaknemo dlanovima čistu zemlju, ili predmet od zemlje, dlanove
otresemo i njima potaremo lice, kao da ga peremo.</h2>   
                <h2 className="lesson-note">-Na isti način ponovo dotaknemo dlanovima čistu zemlju, ili predmet od zemlje,
pa potaremo lijevom desnu, a desnom lijevu ruku, sa vrha prstiju do iza laktova.</h2> 
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default StoneWashingPage;