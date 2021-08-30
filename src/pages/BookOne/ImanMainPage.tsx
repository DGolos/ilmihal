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
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const ImanMainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/tabs/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-burgundy" fullscreen>
        <IonCard className="lesson-header ion-padding transparent ion-text-center">
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book1-lesson11-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle color="light">
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book1-lesson11-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book1-lesson11-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel("label-book1-lesson11-paragraph1")}
              </h2>
              <h2 className="lesson-note">
                {translationService.getLabel("label-book1-lesson11-paragraph2")}
              </h2>
            </IonText>
          </IonItem>
        </div>
        <IonList className="transparent ion-padding">
          <IonItem
            key="1"
            routerLink={`/tabs/BeliefPage`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            <IonLabel color="light">
              <h4 style={{fontSize:"20px"}}> Amentu billahi</h4>
              <p style={{fontSize:"16px"}}>
                
                {translationService.getLabel("label-book1-lesson11-paragraph3")}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem
            key="2"
            routerLink={`/tabs/StandardLessonPage/1/25`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            <IonLabel color="light">
              <h4 style={{fontSize:"20px"}}> Ve melaiketihi</h4>
              <p style={{fontSize:"16px"}}>
               
                {translationService.getLabel("label-book1-lesson11-paragraph4")}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem
            key="3"
            routerLink={`/tabs/StandardLessonPage/1/26`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            
            <IonLabel color="light">
              <h4 style={{fontSize:"20px"}}> Ve kutubihi</h4>
              <p style={{fontSize:"16px"}}>
               
                {translationService.getLabel("label-book1-lesson11-paragraph5")}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem
            key="4"
            routerLink={`/tabs/StandardLessonPage/1/27`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            
            <IonLabel color="light">
              <h4 style={{fontSize:"20px"}}> Ve rusulihi</h4>
              <p style={{fontSize:"16px"}}>
                {translationService.getLabel("label-book1-lesson11-paragraph6")}{" "}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem
            key="5"
            routerLink={`/tabs/StandardLessonPage/1/28`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            
            <IonLabel color="light">
              <h4 style={{fontSize:"20px"}}> Vel jevmil-ahiri</h4>
              <p style={{fontSize:"16px"}}>
               
                {translationService.getLabel("label-book1-lesson11-paragraph7")}
              </p>
            </IonLabel>
          </IonItem>
          <IonItem
            key="6"
            routerLink={`/tabs/StandardLessonPage/1/29`}
            lines="none"
            detail={false}
            className="welcome ion-text-center"
          >
            
            <IonLabel color="light">
              <h4 style={{fontSize:"18px"}}> Ve bil-kaderi hajrihi ve šerrihi minellahi teala</h4>
              <p style={{fontSize:"14px"}}>
                
                {translationService.getLabel("label-book1-lesson11-paragraph8")}
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ImanMainPage;
