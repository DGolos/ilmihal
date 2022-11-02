import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonCol, IonRow } from "@ionic/react";
import React from "react";
import { MenuItem } from "../../components";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";


export const MainBookPage: React.FC = () => {
  const{translate}=useTranslation();

  return (
    <IonPage>
      <IonContent className="bg-image-standard">
      <LessonHeader title={translate("label-book-main")} quoteText={translate("label-book3-lesson15-quote")} quoteReference={translate("label-book3-lesson15-quote-reference")}/>
      <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    label="1"
                    title={translate("label-book-part-one")} 
                    description={translate("label-book-part-one-description")} 
                    link="/tabs/BookOneMainPage"
                    color="Razimic"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    label="2"
                    title={translate("label-book-part-two")} 
                    description={translate("label-book-part-two-description")} 
                    link="/tabs/BookTwoMainPage"
                    color="Razimic"/>
                
              </IonCol>
            </IonRow>
            
          </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};


