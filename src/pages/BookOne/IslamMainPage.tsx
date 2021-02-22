import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const IslamMainPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                color="light"
                defaultHref="/BookOneMainPage"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-purple-gradient" fullscreen>
        <IonCard className="lesson-header ion-padding transparent ion-text-center" >
        <IonCardTitle>
              <h1 className="lesson" >{translationService.getLabel('label-book1-lesson12-title')}</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle color="light">
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
              routerLink={`/ShahadahPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Shahadah.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3>{translationService.getLabel('label-shahadah')} </h3>
              </IonText>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/PrayerDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Prayers.png"
                 
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> {translationService.getLabel('label-prayer')}</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="3"
              routerLink={`/RamadhanDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Fasting.png"
                 
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> {translationService.getLabel('label-ramadhan')}</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="4"
              routerLink={`/CharityDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Charity.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start " color="light">
                <h3> {translationService.getLabel('label-charity')}</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="5"
              routerLink={`/HajjDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Kaba.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> {translationService.getLabel('label-hajj')}</h3>
              </IonText>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default IslamMainPage;