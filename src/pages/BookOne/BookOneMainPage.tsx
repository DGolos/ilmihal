import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import LessonListItem from "../../components/lesson/LessonListItem";
import { translationService } from "../../services/TranslationService";

const BookOneMainPage: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton className="white" defaultHref="/tabs/HomePage" />
          </IonButtons>
          <IonTitle className="white">
            {translationService.getLabel("label-book1-full-title")}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-purple" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton
                className="pressed"
                expand="block"
                onClick={() => setCurrent(1)}
              >
                <IonLabel className="ion-text-center white">
                  1-6
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                expand="block"
                onClick={() => setCurrent(2)}
              >
                <IonLabel className="ion-text-center white">
                  7-10
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                expand="block"
                onClick={() => setCurrent(3)}
              >
                <IonLabel className="ion-text-center white">
                  11-12
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonButton
                className="pressed"
                expand="block"
                onClick={() => setCurrent(4)}
              >
                <IonLabel className="ion-text-center white">
                  13-18
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                expand="block"
                onClick={() => setCurrent(5)}
              >
                <IonLabel className="ion-text-center white">
                  19-24
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div id="first" hidden={current !== 1} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="1"
                  title={translationService.getLabel(
                    "label-book1-lesson1-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/1"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="2"
                  title={translationService.getLabel(
                    "label-book1-lesson2-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/2"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="3"
                  title={translationService.getLabel(
                    "label-book1-lesson3-title"
                  )}
                  link="/tabs/StandardLessonPage/1/3"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="4"
                  title={translationService.getLabel(
                    "label-book1-lesson4-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/4"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="5"
                  title={translationService.getLabel(
                    "label-book1-lesson5-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/5"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="6"
                  title={translationService.getLabel(
                    "label-book1-lesson6-title"
                  )}
                  link="/tabs/StandardLessonPage/1/6"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="second" hidden={current !== 2} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="7"
                  title={translationService.getLabel(
                    "label-book1-lesson7-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/7"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="8"
                  title={translationService.getLabel(
                    "label-book1-lesson8-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/8"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="9"
                  title={translationService.getLabel(
                    "label-book1-lesson9-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/9"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="10"
                  title={translationService.getLabel(
                    "label-book1-lesson10-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/10"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div id="third" hidden={current !== 3} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="11"
                  title={translationService.getLabel(
                    "label-book1-lesson11-title"
                  )}
                  link="/tabs/ImanMainPage"
                />
              </IonCol>

              <IonCol size="6">
                <LessonListItem
                  id="12"
                  title={translationService.getLabel(
                    "label-book1-lesson12-title"
                  )}
                  link="/tabs/IslamMainPage"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="fourth" hidden={current !== 4} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="13"
                  title={translationService.getLabel(
                    "label-book1-lesson13-title"
                  )}
                  link="/tabs/WudhuPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="14"
                  title={translationService.getLabel(
                    "label-book1-lesson14-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/14"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="15"
                  title={translationService.getLabel(
                    "label-book1-lesson15-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/15"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="16"
                  title={translationService.getLabel(
                    "label-book1-lesson16-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/16"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="17"
                  title={translationService.getLabel(
                    "label-book1-lesson17-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/17"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="18"
                  title={translationService.getLabel(
                    "label-book1-lesson18-title"
                  )}
                  link="/tabs/SegmentLessonPage/1/18"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-no-padding" id="fifth" hidden={current !== 5}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="19"
                  title={translationService.getLabel(
                    "label-book1-lesson19-title"
                  )}
                  link="/tabs/FajrPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="20"
                  title={translationService.getLabel(
                    "label-book1-lesson20-title"
                  )}
                  link="/tabs/DhuhrPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="21"
                  title={translationService.getLabel(
                    "label-book1-lesson21-title"
                  )}
                  link="/tabs/AsrPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="22"
                  title={translationService.getLabel(
                    "label-book1-lesson22-title"
                  )}
                  link="/tabs/MaghribPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="23"
                  title={translationService.getLabel(
                    "label-book1-lesson23-title"
                  )}
                  link="/tabs/IshaPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="24"
                  title={translationService.getLabel(
                    "label-book1-lesson24-title"
                  )}
                  link="/tabs/DhikrPage"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BookOneMainPage;
