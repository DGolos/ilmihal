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
    IonList,
    IonPage,
    IonText,
    IonToolbar,
    useIonViewWillLeave,
  } from "@ionic/react";
  import React, { useRef, useState } from "react";
  import { translationService } from "../../services/TranslationService";
  
  const DhikrMainPage: React.FC = () => {
   
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="razimic" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="razimic"
          >
            <IonCardTitle>
              <h1 className="lesson">{translationService.getLabel('label-book3-lesson20-title')}</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel('label-book3-lesson20-quote')}
                </h3>
                <p className="quote-reference">{translationService.getLabel('label-book3-lesson20-quote-reference')}</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          
          <div className="ion-padding">
            <IonList className="white">
              <IonItem color="light" lines="full" routerLink='/RepetancePage'>
                <IonText slot="start" >
                  <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book3-lesson21-title')}</h2>
                </IonText>
                
              </IonItem>
  
              <IonItem color="light" lines="full" routerLink='/ForgivnesPage'>
                <IonText slot="start">
                  <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book3-lesson22-title')}</h2>
                </IonText>
               
              </IonItem>
              <IonItem color="light" lines="full" routerLink='/BeautifulNames'>
                <IonText slot="start">
                  <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book3-lesson23-title')}</h2>
                </IonText>
               
              </IonItem>
              
            </IonList>
          </div>
           
        </IonContent>
      </IonPage>
    );
  };
  
  export default DhikrMainPage;
  