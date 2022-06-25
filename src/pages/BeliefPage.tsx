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
import { LessonHeader } from "../components/LessonHeader";
import useTranslation from "../hooks/useTranslation";

const BeliefPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/ImanMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book1-lesson25-title")} quoteText={translate("label-book1-lesson25-quote")} quoteReference={translate("label-book1-lesson25-quote-reference")} color="burgundy" />
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translate(
                  "label-book1-lesson25_section1-paragraph1"
                )}
              </h2>
              <h2 className="lesson-note">
                {translate(
                  "label-book1-lesson25_section1-paragraph2"
                )}
              </h2>
            </IonText>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" className="lesson-note">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4 className="black">
                      {translate(
                        "label-book1-lesson25_section2-header"
                      )}
                    </h4>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph2"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph3"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph4"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph5"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph6"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section2-paragraph7"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" className="lesson-note">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4 className="black"> 
                      {translate(
                        "label-book1-lesson25_section3-header"
                      )}
                    </h4>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph2"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph3"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph4"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph5"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph6"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph7"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph8"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book1-lesson25_section3-paragraph9"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BeliefPage;
