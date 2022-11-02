import {
    IonBackButton,
    IonButtons,
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
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useTranslation from "../../hooks/useTranslation";
  
  
  export const DhikrMainPage: React.FC = () => {
    const{translate}=useTranslation();
    return (
      <IonPage>
        <StandardHeader />
        <IonContent className="bg-image-standard" fullscreen>
        <LessonHeader title={translate("label-book3-lesson16-title")} quoteText={translate("label-book3-lesson16-quote")} quoteReference={translate("label-book3-lesson16-quote-reference")}/>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson17-title")} 
                    description={translate("label-book3-lesson17--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/StandardLessonPage/3/17"
                    color="Burgundy"/>
            </IonCol>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson18-title")} 
                    description={translate("label-book3-lesson18--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/StandardLessonPage/3/18"
                    color="Burgundy"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
            <MenuItem 
                    title={translate("label-book3-lesson20-title")} 
                    description={translate("label-book3-lesson20--description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/BeautifulNames"
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
  

  