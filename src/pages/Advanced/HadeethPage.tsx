import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonText,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/common/Progress";
import { translationService } from "../../services/TranslationService";

export const HadeethPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/MainCategoryPage" />
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
              {translationService.getLabel("label-book3-lesson1-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson1-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson1-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonSlides>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section1-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section1-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section2-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={2}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section2-paragraph6"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section3-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={3}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph6"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section3-paragraph7"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section4-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={4}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph6"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section4-paragraph7"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section5-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={5}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section5-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section5-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section5-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section5-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section5-paragraph5"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} color="light" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson1_section6-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={6}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson1_section6-paragraph6"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};
