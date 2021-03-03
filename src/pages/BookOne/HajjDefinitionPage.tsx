import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const HajjDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-book1-lesson33-title')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-book1-lesson33-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-hadeeth-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note">
                {translationService.getLabel('label-book1-lesson33_section1-paragraph1')}
                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonItem
            key="1"
            detail={false}
            color="light"
            lines="none"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            <IonGrid className="ion-text-left">
            
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translationService.getLabel('label-book1-lesson33-section2-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonNote>
                  {translationService.getLabel('label-book1-lesson33_section2-paragraph1')}
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translationService.getLabel('label-book1-lesson33-section3-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonNote>
                  {translationService.getLabel('label-book1-lesson33_section3-paragraph1')}
                  </IonNote>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translationService.getLabel('label-book1-lesson33-section4-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonNote>
                  {translationService.getLabel('label-book1-lesson33_section4-paragraph1')}
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default HajjDefinitionPage;