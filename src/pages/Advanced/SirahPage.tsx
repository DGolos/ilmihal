import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonSlide,
  IonSlides,
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonNote,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/common/Progress";
import { translationService } from "../../services/TranslationService";

export const SirahPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" defaultHref="/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson14-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson14-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson14-quote-reference"
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
                          "label-book3-lesson14_section1-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section1-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section2-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={2}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section2-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section3-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={3}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section3-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section4-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={4}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section4-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section5-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={5}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section5-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section6-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={6}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section6-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section7-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={7}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section7-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section8-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={8}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section8-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section9-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={9}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section9-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section10-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={10}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section10-paragraph1"
                        )}
                      </IonNote>
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
                          "label-book3-lesson14_section11-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={11}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section11-paragraph6"
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
                          "label-book3-lesson14_section12-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={12}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph5"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson14_section12-paragraph6"
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
                          "label-book3-lesson14_section13-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={13}
                        maxValue={13}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson14_section13-paragraph1"
                        )}
                      </IonNote>
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
