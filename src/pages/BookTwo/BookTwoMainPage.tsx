import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import LessonListItem from "../../components/LessonListItem";
import { translationService } from "../../services/TranslationService";

const BookTwoMainPage: React.FC = () => {
    const [current, setCurrent] = useState(1);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/HomePage" />
            </IonButtons>
            <IonTitle color="light">{translationService.getLabel("label-book2-full-title")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-burgundy-gradient" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(1)}
              >
                <IonLabel color="light" className="ion-text-center">
                  1-7
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(2)}
              >
                <IonLabel color="light" className="ion-text-center">
                  8-10
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(3)}
              >
                <IonLabel color="light" className="ion-text-center">
                  11-14
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(4)}
              >
                <IonLabel color="light" className="ion-text-center">
                  15-20
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(5)}
              >
                <IonLabel color="light" className="ion-text-center">
                  21-27
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                className="pressed"
                shape="round"
                expand="full"
                onClick={() => setCurrent(6)}
              >
                <IonLabel color="light" className="ion-text-center">
                  28-30
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
                    "label-book2-lesson1-title"
                  )}
                  link="/PrayerRequirementsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="2"
                  title={translationService.getLabel(
                    "label-book2-lesson2-title"
                  )}
                  link="/PrayerPartsPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="3"
                  title={translationService.getLabel(
                    "label-book2-lesson3-title"
                  )}
                  link="/SahwiSujudPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="4"
                  title={translationService.getLabel(
                    "label-book2-lesson4-title"
                  )}
                  link="/OverduePrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="5"
                  title={translationService.getLabel(
                    "label-book2-lesson5-title"
                  )}
                  link="/CongregationalPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
              <LessonListItem id="6" title={translationService.getLabel(
                    "label-book2-lesson6-title"
                  )} link="/TravellerPrayerPage" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <LessonListItem id="7" title={translationService.getLabel(
                    "label-book2-lesson7-title"
                  )} link="/SickPersonPrayerPage" />
              </IonCol>
              
            </IonRow>
            
          </IonGrid>
        </div>
        <div id="second" hidden={current !== 2} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="8"
                  title={translationService.getLabel(
                    "label-book2-lesson8-title"
                  )}
                  link="/WashingPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="9"
                  title={translationService.getLabel(
                    "label-book2-lesson9-title"
                  )}
                  link="/StoneWashingPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="10"
                  title={translationService.getLabel(
                    "label-book2-lesson10-title"
                  )}
                  link="/WipingPage"
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
                    "label-book2-lesson11-title"
                  )}
                  link="/EidPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="12"
                  title={translationService.getLabel(
                    "label-book2-lesson12-title"
                  )}
                  link="/FuneralPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="13"
                  title={translationService.getLabel(
                    "label-book2-lesson13-title"
                  )}
                  link="/TarawihPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="14"
                  title={translationService.getLabel(
                    "label-book2-lesson14-title"
                  )}
                  link="/JummahPrayerPage"
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
                  id="15"
                  title={translationService.getLabel(
                    "label-book2-lesson15-title"
                  )}
                  link="/HijriYearPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="16"
                  title={translationService.getLabel(
                    "label-book2-lesson16-title"
                  )}
                  link="/MawludPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="17"
                  title={translationService.getLabel(
                    "label-book2-lesson17-title"
                  )}
                  link="/BlessedNightsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="18"
                  title={translationService.getLabel(
                    "label-book2-lesson18-title"
                  )}
                  link="/QuranDefinitionPage"
                />
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="19"
                  title={translationService.getLabel(
                    "label-book2-lesson19-title"
                  )}
                  link="/MuhammadMainPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="20"
                  title={translationService.getLabel(
                    "label-book2-lesson20-title"
                  )}
                  link="/KabaPage"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="fifth" hidden={current !== 5} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="21"
                  title={translationService.getLabel(
                    "label-book2-lesson21-title"
                  )}
                  link="/ObligationsToAllahPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="22"
                  title={translationService.getLabel(
                    "label-book2-lesson22-title"
                  )}
                  link="/ObligationsToParentsPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="23"
                  title={translationService.getLabel(
                    "label-book2-lesson23-title"
                  )}
                  link="/ParentsObligationsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="24"
                  title={translationService.getLabel(
                    "label-book2-lesson24-title"
                  )}
                  link="/OwnObligationsPage"
                />
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="25"
                  title={translationService.getLabel(
                    "label-book2-lesson25-title"
                  )}
                  link="/MiddleWayPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="26"
                  title={translationService.getLabel(
                    "label-book2-lesson26-title"
                  )}
                  link="/PowerOfTruthPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="27"
                  title={translationService.getLabel(
                    "label-book2-lesson27-title"
                  )}
                  link="/MistakesPage"
                />
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>

        <div id="sixth" hidden={current !== 6} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="28"
                  title={translationService.getLabel(
                    "label-book2-lesson28-title"
                  )}
                  link="/SurahLehebPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="29"
                  title={translationService.getLabel(
                    "label-book2-lesson29-title"
                  )}
                  link="/SurahNasrPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="30"
                  title={translationService.getLabel(
                    "label-book2-lesson30-title"
                  )}
                  link="/SurahKafirunPage"
                />
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default BookTwoMainPage;