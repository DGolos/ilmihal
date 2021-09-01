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

const DhikrPage: React.FC = () => {

  

  
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
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-book1-lesson24-title')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-book1-lesson24-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-book1-lesson24-quote-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
              {translationService.getLabel('label-book1-lesson24_section1-paragraph1')}
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div className="ion-padding">
          <IonList className="white">
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/35'>
              <IonText slot="start" >
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson35-title')}</h2>
              </IonText>
              
            </IonItem>

            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/36'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson36-title')}</h2>
              </IonText>
             
            </IonItem>
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/37'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson37-title')}</h2>
              </IonText>
             
            </IonItem>
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/38'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson38-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/TasbihPage'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson39-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/40'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson40-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem className="lesson-note" lines="full" routerLink='/tabs/SegmentLessonPage/1/41'>
              <IonText slot="start">
                <h2 className="black" style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson41-title')}</h2>
              </IonText>
              
            </IonItem>
          </IonList>
        </div>
         
      </IonContent>
    </IonPage>
  );
};

export default DhikrPage;
