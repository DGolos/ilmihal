import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { LessonHeader } from "../../components/LessonHeader";
import {MenuItem} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import './ImanPage.css';

export const ImanMainPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/tabs/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book1-lesson11-title")} quoteText={translate("label-book1-lesson11-quote")} quoteReference={translate("label-book1-lesson11-quote-reference")} color="burgundy" />
        <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <p className="imanPageParagraphText">
                {translate("label-book1-lesson11_section1-paragraph1")}
              </p>
              <p className="imanPageParagraphText">
                {translate("label-book1-lesson11_section1-paragraph2")}
              </p>
            </IonText>
          </IonItem>
        </div>
        <div>
          <IonGrid >
            <IonRow>
            
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Amentu billahi" 
                    description={translate("label-book1-lesson1-description")} 
                    link="/tabs/BeliefPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Ve melaiketihi"
                    description={translate("label-book1-lesson2-description")} 
                    link="/tabs/StandardLessonPage/1/26"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Ve kutubihi"
                    description={translate("label-book1-lesson3-description")} 
                    link="/tabs/StandardLessonPage/1/27"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Ve rusulihi"
                    description={translate("label-book1-lesson4-description")} 
                    link="/tabs/StandardLessonPage/1/28"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Vel jevmil-ahiri"
                    description={translate("label-book1-lesson5-description")} 
                    link="/tabs/StandardLessonPage/1/29"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/ChosenVerses.png" 
                    title="Ve bil-kaderi hajrihi ve šerrihi minellahi teala"
                    description={translate("label-book1-lesson6-description")} 
                    link="/tabs/StandardLessonPage/1/30"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
