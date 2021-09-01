import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const IslamMainPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                className="white"
                defaultHref="/tabs/BookOneMainPage"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-purple" fullscreen>
        <IonCard className="lesson-header ion-padding transparent ion-text-center" >
        <IonCardTitle>
              <h1 className="lesson" >{translationService.getLabel('label-book1-lesson12-title')}</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle className="white">
              <h3 style={{fontStyle:"italic"} }>{translationService.getLabel('label-book1-lesson12-quote')}</h3>
              <p className="quote-reference">{translationService.getLabel('label-hadeeth-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note" >
                {translationService.getLabel('label-book1-lesson12-paragraph1')}
                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonList className="ion-padding transparent" style={{marginTop:0}}>
            <IonItem
              key="1"
              routerLink={`/tabs/SegmentLessonPage/1/2`}
              lines="none"
              detail={false}
              className="welcome ion-text-center"
            >
              
              <IonLabel className="white">
                <h3 style={{fontSize:"24px"}}>{translationService.getLabel('label-shahadah')} </h3>
              </IonLabel>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/tabs/PrayerDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome ion-text-center"
            >
              
              <IonLabel className="white">
                <h3 style={{fontSize:"24px"}}> {translationService.getLabel('label-prayer')}</h3>
              </IonLabel>
            </IonItem>
            <IonItem
              key="3"
              routerLink={`/tabs/StandardLessonPage/1/30`}
              lines="none"
              detail={false}
              className="welcome ion-text-center"
            >
              
              <IonLabel className="white">
                <h3 style={{fontSize:"24px"}}> {translationService.getLabel('label-ramadhan')}</h3>
              </IonLabel>
            </IonItem>
            <IonItem
              key="4"
              routerLink={`/tabs/StandardLessonPage/1/31`}
              lines="none"
              detail={false}
              className="welcome ion-text-center"
            >
              
              <IonLabel className="white">
                <h3 style={{fontSize:"24px"}}> {translationService.getLabel('label-charity')}</h3>
              </IonLabel>
            </IonItem>
            <IonItem
              key="5"
              routerLink={`/tabs/HajjDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome ion-text-center"
            >
              
              <IonLabel className="white">
                <h3 style={{fontSize:"24px"}}> {translationService.getLabel('label-hajj')}</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default IslamMainPage;