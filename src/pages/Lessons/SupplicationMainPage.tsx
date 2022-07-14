import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { MenuItem } from "../../components";
import { LessonHeader } from "../../components/LessonHeader";
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useTranslation from "../../hooks/useTranslation";


export const SupplicationMainPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
      <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book3-lesson12-title")} quoteText={translate("label-book3-lesson12-quote")} quoteReference={translate("label-book3-lesson12-quote-reference")} color="dark-brown" />
        <IonGrid>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson13-title")} 
                    description={translate("label-book3-lesson13--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/StandardLessonPage/3/13"
                    color="Burgundy"/>
            </IonCol>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson14-title")} 
                    description={translate("label-book3-lesson14--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/StandardLessonPage/3/14"
                    color="Burgundy"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson15-title")} 
                    description={translate("label-book3-lesson15--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/DailySupplicationsPage"
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

