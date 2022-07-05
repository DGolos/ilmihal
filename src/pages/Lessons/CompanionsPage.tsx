import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { MenuItem } from "../../components";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";

export const CompanionsPage: React.FC = () => {
  const {translate}=useTranslation();
  return (
    <IonPage>
     
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/tabs/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <LessonHeader title={translate("label-book3-lesson22-title")} quoteText={translate("label-book3-lesson22-quote")} quoteReference={translate("label-book3-lesson22-quote-reference")} color="razimic" />
        <IonGrid>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson23-title")} 
                    description={translate("label-book3-lesson23-description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/SliderLessonPage/3/23"
                    color="Burgundy"/>
            </IonCol>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson24-title")} 
                    description={translate("label-book3-lesson24-description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/StandardLessonPage/3/24"
                    color="Burgundy"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson25-title")} 
                    description={translate("label-book3-lesson25-description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/SliderLessonPage/3/25"
                    color="Burgundy"/>
            </IonCol>
            <IonCol size="6">

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
