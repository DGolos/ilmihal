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
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/Progress";
import { translationService } from "../../services/TranslationService";

export const WomensPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="dark-brown" defaultHref="/CompanionsPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="dark-brown"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson6-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson6-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson6-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonSlides>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header1"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section1-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header2"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={2}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section2-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header3"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={3}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section3-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header4"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={4}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section4-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header5"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={5}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section5-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header6"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={6}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section6-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header7"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={7}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section7-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header8"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={8}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section8-paragraph1"
                          )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem detail={false} className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson6-header9"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={9}
                        maxValue={9}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson6_section9-paragraph1"
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
