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
    IonToolbar
  } from "@ionic/react";
  import React, { useEffect, useState } from "react";
  
  
  
  export const ChosenVersesPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="burgundy"
          >
            <IonCardTitle>
              <h1 className="lesson">Odabrani ajeti</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>"Ovo su ajeti mudre Knjige"</h3>
                <p className="quote-reference">Kur'an 10:1</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Naša vjera se zove ISLAM.Mi smo po vjeri MUSLIMANI I MUSLIMANKE.</h2>
                    <h2 className="lesson-note">Islam je vjera koju je objavio Allah dželle šanuhu preko Svoga posljednjeg poslanika
Muhammeda cijelom čovječanstvu.</h2>
                    
                </IonText>
            </IonItem>
        </div>
        
          <div>
          
          <IonCard
            className="lesson-header ion-text-center"
            color="purple"
            routerLink={`/RubiesAyahPage`}
          >
            <IonCardTitle>
              <h1 className="lesson">Rubini</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>"Ovo su ajeti mudre Knjige"</h3>
                <p className="quote-reference">Kur'an 10:1</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <IonCard
            className="lesson-header ion-text-center"
            color="dark-brown"
            routerLink={`/PearlsAyahPage`}
          >
            <IonCardTitle>
              <h1 className="lesson">Biseri</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>"Ovo su ajeti mudre Knjige"</h3>
                <p className="quote-reference">Kur'an 10:1</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          </div>
          
        </IonContent>
      </IonPage>
    );
  };
  