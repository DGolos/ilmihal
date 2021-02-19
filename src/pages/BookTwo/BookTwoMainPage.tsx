import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import LessonListItem from "../../components/LessonListItem";

const BookTwoMainPage: React.FC = () => {
    const [current, setCurrent] = useState(1);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/HomePage" />
            </IonButtons>
            <IonTitle color="light">Ilmihal Drugi dio</IonTitle>
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
                  title="Uvjeti za namaz"
                  link="/PrayerRequirementsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="2"
                  title="Dijelovi namaza"
                  link="/PrayerPartsPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="3"
                  title="Sehvi sedžda"
                  link="/SahwiSujudPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="4"
                  title="Propušteni namazi"
                  link="/OverduePrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="5"
                  title="Namaz u džematu"
                  link="/CongregationalPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
              <LessonListItem id="6" title="Namaz putnika" link="/TravellerPrayerPage" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <LessonListItem id="7" title="Namaz bolesnika" link="/SickPersonPrayerPage" />
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
                  title="Gusul"
                  link="/WashingPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="9"
                  title="Tejemum"
                  link="/StoneWashingPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="10"
                  title="Mesh"
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
                  title="Bajram namaz"
                  link="/EidPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="12"
                  title="Dženaze namaz"
                  link="/FuneralPrayerPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="13"
                  title="Teravih namaz"
                  link="/TarawihPrayerPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="14"
                  title="Džuma namaz"
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
                  title="Hidžetska godina"
                  link="/HijriYearPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="16"
                  title="Mevlud"
                  link="/MawludPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="17"
                  title="Mubarek noći"
                  link="/BlessedNightsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="18"
                  title="Kur'an"
                  link="/QuranDefinitionPage"
                />
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="19"
                  title="Poslanik"
                  link="/MuhammadMainPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="20"
                  title="Kibla-Kaba"
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
                  title="Dužnosti prema Allahu"
                  link="/ObligationsToAllahPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="22"
                  title="Dužnosti prema roditeljima"
                  link="/ObligationsToParentsPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="23"
                  title="Dužnosti roditelja"
                  link="/ParentsObligationsPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="24"
                  title="Dužnosti prema sebi"
                  link="/OwnObligationsPage"
                />
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="25"
                  title="Srednji put"
                  link="/MiddleWayPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="26"
                  title="Snaga istine"
                  link="/PowerOfTruthPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="27"
                  title="Grijesi"
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
                  title="Sura Leheb"
                  link="/SurahLehebPage"
                />
              </IonCol>
              <IonCol size="6">
                <LessonListItem
                  id="29"
                  title="Sura En-Nasr"
                  link="/SurahNasrPage"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <LessonListItem
                  id="30"
                  title="Sura El-Kafirun"
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