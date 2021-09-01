import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonItem, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const PrayerDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="dark-brown" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="dark-brown"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-book1-lesson34-title')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-book1-lesson34-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-book1-lesson34-quote-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-book1-lesson34_section1-paragraph1')}
                </h2>
              </IonText>
            </IonItem>
          </div>
          
            <IonCard className="prayer white" routerLink={`/tabs/FajrPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/fajr.png'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle className="black" style={{fontWeight:"bold"}}>{translationService.getLabel('label-fajr-prayer')}</IonCardTitle>
                    <IonCardSubtitle className="black">2 {translationService.getLabel('label-rakah-sunnah')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">2 {translationService.getLabel('label-rakah-fardh')}</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard className="prayer white" routerLink={`/tabs/DhuhrPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/dhuhr.png'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle className="black" style={{fontWeight:"bold"}}>{translationService.getLabel('label-dhuhr-prayer')}</IonCardTitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-sunnah')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-fardh')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">2 {translationService.getLabel('label-rakah-sunsunnah')}</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard className="prayer white" routerLink={`/tabs/AsrPrayerPage`}>
              <IonCardContent style={{ marginTop: "0px", marginBottom: "6px" }}>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/asr.png'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle className="black" style={{fontWeight:"bold"}}>{translationService.getLabel('label-asr-prayer')}</IonCardTitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-sunnah')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-fardh')}</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard className="prayer white" routerLink={`/tabs/MaghribPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/maghrib.png'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle className="black" style={{fontWeight:"bold"}}>{translationService.getLabel('label-maghrib-prayer')}</IonCardTitle>
                    <IonCardSubtitle className="black">3 {translationService.getLabel('label-rakah-fardh')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">2 {translationService.getLabel('label-rakah-sunnah')}</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard className="prayer white" routerLink={`/tabs/IshaPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/isha.png'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle className="black" style={{fontWeight:"bold"}}>{translationService.getLabel('label-isha-prayer')}</IonCardTitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-sunnah')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">4 {translationService.getLabel('label-rakah-fardh')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">2 {translationService.getLabel('label-rakah-sunsunnah')}</IonCardSubtitle>
                    <IonCardSubtitle className="black">3 {translationService.getLabel('label-rakah-witr')}</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          
        </IonContent>
      </IonPage>
    );
}

export default PrayerDefinitionPage;