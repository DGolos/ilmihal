import { IonBackButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";

export const HajjDefinitionPage: React.FC = () => {
    const{translate}=useTranslation();
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
        <LessonHeader title={translate("label-book1-lesson34-title")} quoteText={translate("label-book1-lesson34-quote")} quoteReference={translate("label-book1-lesson34-quote-reference")} color="purple" />
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note">
                {translate('label-book1-lesson34_section1-paragraph1')}
                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonItem
            key="1"
            detail={false}
            className="lesson-note"
            lines="none"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            <IonGrid className="ion-text-left">
            
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translate('label-book1-lesson34-section2-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                <IonText>
                <h2 className="lesson-note">
                  {translate('label-book1-lesson34_section2-paragraph1')}
                  </h2>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="ayah">
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translate('label-book1-lesson34-section3-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                  <h2 className="lesson-note">
                  {translate('label-book1-lesson34_section3-paragraph1')}
                  </h2>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonChip color="purple">
                    <IonText>{translate('label-book1-lesson34-section4-header')}</IonText>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                  <h2 className="lesson-note">
                  {translate('label-book1-lesson34_section4-paragraph1')}
                  </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonContent>
      </IonPage>
    );
}

