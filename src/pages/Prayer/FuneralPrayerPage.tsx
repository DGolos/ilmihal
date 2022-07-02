import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonText,
  IonCol,
  IonGrid,
  IonRow,
  IonSlide,
  IonSlides,
  IonChip,

} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/Progress";
import { translationService } from "../../services/TranslationService";

export const FuneralPrayerPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="white" defaultHref="/BookTwoMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-asr" fullscreen>
        <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
          <IonItem className="welcome" lines="none">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    {translationService.getLabel("label-funeral-prayer")}
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" style={{ marginTop: 0 }}>
                  <h3
                    style={{ fontStyle: "italic"}}
                    className="prayer ion-no-padding ion-text-center"
                  >
                    {translationService.getLabel("label-book2-lesson12-quote")}
                  </h3>
                  <p className="quote-reference ion-text-center">
                    {translationService.getLabel(
                      "label-book2-lesson12-quote-reference"
                    )}
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
        <IonSlides>
          <IonSlide>
            <div className="ion-no-padding">
              <IonItem className="lesson-note ion-padding" lines="none">
                <IonText>
                  <h2 className="lesson-note">
                    {translationService.getLabel(
                      "label-book2-lesson12-section1-paragraph1"
                    )}
                  </h2>
                </IonText>
              </IonItem>
              <IonItem
                key="1"
                detail={false}
                className="lesson-note"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-nijjah-header")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={4}
                        color="dark-brown"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section2-paragraph1"
                        )}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </div>
          </IonSlide>
          <IonSlide>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="brown" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book2-lesson11-section1-header3"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={2}
                      maxValue={4}
                      color="dark-brown"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph1"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph2"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph3"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph4"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph5"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph6"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section3-paragraph7"
                        )}
                      </h2>
                      
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
          <IonSlide>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book2-lesson12-section4-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={3}
                      maxValue={4}
                      color="dark-brown"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section4-paragraph1"
                        )}
                      </h2>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section4-paragraph2"
                        )}
                      </h2>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
          <IonSlide>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="dark-brown" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book2-lesson12-section5-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={4}
                      maxValue={4}
                      color="dark-brown"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-book2-lesson12-section5-paragraph1"
                        )}
                      </h2>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
