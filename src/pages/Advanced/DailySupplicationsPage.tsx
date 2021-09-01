import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
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
import { translationService } from "../../services/TranslationService";

export const DailySupplicationsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              color="burgundy"
              defaultHref="/tabs/SupplicationMainPage"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="burgundy"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson18-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson18-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson18-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem detail={false} className="lesson-note" lines="none">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                    {translationService.getLabel(
                      "label-book3-lesson18_section1-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section1-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section1-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section2-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section2-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section2-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section3-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section3-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section3-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section4-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section4-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section4-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section5-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section5-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section5-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section6-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section6-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section6-paragraph2"
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
                    {translationService.getLabel(
                      "label-book3-lesson18_section7-header"
                    )}
                  </IonChip>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section7-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book3-lesson18_section7-paragraph2"
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
