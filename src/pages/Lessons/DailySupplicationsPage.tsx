import {
  IonBackButton,
  IonButtons,
  IonChip,
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
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useTranslation from "../../hooks/useTranslation";


export const DailySupplicationsPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
      <StandardHeader />
      
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book3-lesson15-title")} quoteText={translate("label-book3-lesson15-quote")} quoteReference={translate("label-book3-lesson15-quote-reference")}/>
        <div className="ion-padding">
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section1-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section1-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section1-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section2-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section2-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section2-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section3-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section3-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section3-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section4-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section4-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section4-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section5-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section5-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section5-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section6-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section6-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section6-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section7-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section7-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section7-paragraph2"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translate(
                      "label-book3-lesson15_section8-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translate(
                        "label-book3-lesson15_section8-paragraph1"
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
