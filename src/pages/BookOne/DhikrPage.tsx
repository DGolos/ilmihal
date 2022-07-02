import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { MenuItem } from "../../components";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";
import { translationService } from "../../services/TranslationService";

const DhikrPage: React.FC = () => {

  const{translate}=useTranslation();

  
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
      <LessonHeader title={translate("label-book1-lesson24-title")} quoteText={translate("label-book1-lesson24-quote")} quoteReference={translate("label-book1-lesson24-quote-reference")} color="burgundy" />
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
              {translate('label-book1-lesson24_section1-paragraph1')}
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div>
          <IonGrid>
            <IonRow>
            
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Shahadah.png" 
                    title={translate("label-book1-lesson35-title")} 
                    description={translate("label-book1-lesson35-description")} 
                    link="/tabs/SegmentLessonPage/1/35"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Prayers.png" 
                    title={translate("label-book1-lesson36-title")} 
                    description={translate("label-book1-lesson36-description")} 
                    link="/tabs/SegmentLessonPage/1/36"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Fasting.png" 
                    title={translate("label-book1-lesson37-title")} 
                    description={translate("label-book1-lesson37-description")} 
                    link="/tabs/SegmentLessonPage/1/37"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Charity.png" 
                    title={translate("label-book1-lesson38-title")} 
                    description={translate("label-book1-lesson38-description")} 
                    link="/tabs/SegmentLessonPage/1/38"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Kaba.png" 
                    title={translate("label-book1-lesson39-title")} 
                    description={translate("label-book1-lesson39-description")} 
                    link="/tabs/TasbihPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Kaba.png" 
                    title={translate("label-book1-lesson40-title")} 
                    description={translate("label-book1-lesson40-description")} 
                    link="/tabs/SegmentLessonPage/1/40"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    icon="/assets/images/Kaba.png" 
                    title={translate("label-book1-lesson41-title")} 
                    description={translate("label-book1-lesson41-description")} 
                    link="/tabs/SegmentLessonPage/1/41"
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
};

export default DhikrPage;
