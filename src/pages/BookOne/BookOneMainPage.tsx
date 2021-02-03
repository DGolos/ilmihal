import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import LessonListItem from "../../components/LessonListItem";

const BookOneMainPage: React.FC = () => {
  const [current, setCurrent] = useState(1);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/HomePage" />
          </IonButtons>
          <IonTitle color="light">Ilmihal Prvi dio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-purple-gradient" fullscreen>
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
                  1-6
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
                  7-10
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
                  11-12
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
                  13-18
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
                  title="Euzubilla i bismilla"
                  link="/EuzaPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="2"
                  title="Kelimei-Šehadet"
                  link="/ShahadahPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="3"
                  title="Naša vjera"
                  link="/OurFaithPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="4"
                  title="Rabbi jessir"
                  link="/RabbiJessirPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="5"
                  title="Subhaneke"
                  link="/SubhanekePage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem id="6" title="Selam" link="/SelamPage" />
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
                  title="Sura El-Fatiha"
                  link="/SurahFatihaPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="8"
                  title="Sura En-Nas"
                  link="/SurahNasPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="9"
                  title="Sura El-Felek"
                  link="/SurahFelekPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="10"
                  title="Sura El-Ihlas"
                  link="/SurahIhlasPage"
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
                  title="Imanski šarti"
                  link="/ImanMainPage"
                />
              </IonCol>

              <IonCol size="6">
                <LessonListItem
                  id="12"
                  title="Islamski šarti"
                  link="/IslamMainPage"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="fourth" hidden={current !== 4} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <LessonListItem id="13" title="Abdest" link="/WudhuPage" />
              </IonCol>
              <IonCol size="6">
                <LessonListItem id="14" title="Ezan" link="/AdhanPage" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem id="15" title="Ikamet" link="/IqamahPage" />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="16"
                  title="Et-tehijatu"
                  link="/EttehijatuPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem id="17" title="Salavati" link="/SalavatPage" />
              </IonCol>
              <IonCol size="6">
                <LessonListItem id="18" title="Dove" link="/DuaPage" />
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
                  title="Sabah namaz"
                  link="/FajrPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="20"
                  title="Podne namaz"
                  link="/DhuhrPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="21"
                  title="Ikindija namaz"
                  link="/AsrPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="22"
                  title="Akšam namaz"
                  link="/MaghribPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="23"
                  title="Jacija namaz"
                  link="/IshaPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem id="24" title="Zikr" link="/DhikrPage" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BookOneMainPage;
