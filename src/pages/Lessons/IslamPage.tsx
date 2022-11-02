import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import { LessonHeader } from "../../components/LessonHeader";
import {MenuItem} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import './IslamPage.css'
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";

export const IslamMainPage: React.FC = () => {
  const{translate}=useTranslation();
    return (
      <IonPage>
        <StandardHeader />
        <IonContent className="bg-image-standard" fullscreen>
        <LessonHeader title={translate("label-book1-lesson12-title")} quoteText={translate("label-book1-lesson12-quote")} quoteReference={translate("label-hadeeth-reference")}/>
        
        
          <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>
            <IonItem className="lesson-note" lines="none">
              <IonText>
                <p className="islamPageParagraphText" >
                {translate('label-book1-lesson12_section1-paragraph1')}
                </p>
              </IonText>
            </IonItem>
          </div>
          <div>
          <IonGrid>
            <IonRow>
            
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Shahadah.png" 
                    title={translate("label-book1-lesson2-title")} 
                    description={translate("label-book1-lesson1-description")} 
                    link="/tabs/StandardLessonPage/1/2"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Prayers.png" 
                    title={translate("label-book1-lesson31-title")} 
                    description={translate("label-book1-lesson31-description")} 
                    link="/tabs/PrayerDefinitionPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Fasting.png" 
                    title={translate("label-book1-lesson32-title")} 
                    description={translate("label-book1-lesson32-description")} 
                    link="/tabs/StandardLessonPage/1/32"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Charity.png" 
                    title={translate("label-book1-lesson33-title")} 
                    description={translate("label-book1-lesson33-description")} 
                    link="/tabs/StandardLessonPage/1/33"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Kaba.png" 
                    title={translate("label-book1-lesson34-title")} 
                    description={translate("label-book1-lesson5-description")} 
                    link="/tabs/HajjDefinitionPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
          
        </IonContent>
      </IonPage>
    );
}

