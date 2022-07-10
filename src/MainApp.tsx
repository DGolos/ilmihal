import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import {
  alarmOutline,
  bookOutline,
  homeOutline,
  informationOutline,
  receiptOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import useTranslation from "./hooks/useTranslation";
import { translationService } from "./services/TranslationService";


import { AyahPage } from "./pages/Advanced/Quran/AyahPage";
import { ChosenVersesPage } from "./pages/Advanced/Quran/ChosenVersesPage";
import { PearlsAyahPage } from "./pages/Advanced/Quran/PearlsAyahPage";
import { RubiesAyahPage } from "./pages/Advanced/Quran/RubiesAyahPage";

import {
  BeautifulNamesPage,
  BeliefPage,
  BookOneMainPage,
  BookTwoMainPage,
  CompanionsPage,
  CreditsPage,
  DailyPrayerDefinitionPage,
  DailyPrayerDetailsPage,
  DailyPrayerWatchPage,
  DailyPrayerDhikrPage,
  DailySupplicationsPage,
  DhikrMainPage,
  EidPrayerPage,
  FuneralPrayerPage,
  GuidancePrayerPage,
  HajjDefinitionPage,
  HomePage,
  ImanMainPage,
  IslamMainPage,
  JummahPrayerPage,
  LanguageOptionsPage,
  LocationOptionsPage,
  MainBookPage,
  MainCategoryPage,
  MonthlyPrayerTimesPage,
  MorningPrayerPage,
  NightPrayerPage,
  OptionsPage,
  PrayerDefinitionPage,
  PrayerTimesPage,
  QuranReaderListPage,
  QuranPlayerListPage,
  QuranPlayerPage,
  SegmentLessonPage,
  SliderLessonPage,
  StandardLessonPage,
  SupplicationMainPage,
  TarawihPrayerPage,
  TasbihPage,
  UnderConstructionPage,
  VoluntaryPrayersPage,
  WudhuPage,
} from "./pages";

//3D7JW5AHQN.no.izbih.iMekteb
interface MainAppProps {}

const MainApp: React.FC<MainAppProps> = () => {
  const { translate } = useTranslation();
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/HomePage" />
        <Route path="/tabs/HomePage" render={() => <HomePage />} />
        <Route
          path="/tabs/MainCategoryPage"
          render={() => <MainCategoryPage />}
          exact={true}
        />
        <Route
          path="/tabs/MainBookPage"
          render={() => <MainBookPage />}
          exact={true}
        />
        <Route
          path="/tabs/OptionsPage"
          render={() => <OptionsPage />}
          exact={true}
        />
        <Route path="/tabs/CreditsPage" component={CreditsPage} />
        <Route
          path="/tabs/LanguageOptionsPage"
          component={LanguageOptionsPage}
        />
        <Route
          path="/tabs/LocationOptionsPage"
          component={LocationOptionsPage}
        />
        <Route path="/tabs/QuranReaderListPage" component={QuranReaderListPage} />
        <Route path="/tabs/QuranPlayerListPage" component={QuranPlayerListPage} />
        <Route path="/tabs/QuranPlayer/:id" component={QuranPlayerPage} />
        <Route path="/tabs/PrayerTimes/" component={PrayerTimesPage} />
        <Route
          path="/tabs/MonthlyPrayerTimes/"
          component={MonthlyPrayerTimesPage}
        />
        <Route
          path="/tabs/VoluntaryPrayersPage/"
          component={VoluntaryPrayersPage}
        />
        <Route path="/tabs/NightPrayerPage/" component={NightPrayerPage} />
        <Route path="/tabs/MorningPrayerPage/" component={MorningPrayerPage} />
        <Route
          path="/tabs/GuidancePrayerPage/"
          component={GuidancePrayerPage}
        />
        <Route path="/tabs/BeautifulNames/" component={BeautifulNamesPage} />
        <Route path="/tabs/ChosenVerses/" component={ChosenVersesPage} />
        <Route path="/tabs/RubiesAyahPage/" component={RubiesAyahPage} />
        <Route path="/tabs/PearlsAyahPage/" component={PearlsAyahPage} />
        <Route
          path="/tabs/AyahPage/:surahId/:firstAyahId/:lastAyahId"
          component={AyahPage}
        />
        <Route
          path="/tabs/SupplicationMainPage/"
          component={SupplicationMainPage}
        />

        <Route
          path="/tabs/DailySupplicationsPage/"
          component={DailySupplicationsPage}
        />

        <Route path="/tabs/DhikrMainPage/" component={DhikrMainPage} />
        <Route path="/tabs/CompanionsPage/" component={CompanionsPage} />

        <Route path="/tabs/BookOneMainPage" component={BookOneMainPage} />
        <Route
          path="/tabs/StandardLessonPage/:bookId/:lessonId"
          component={StandardLessonPage}
        />
        <Route
          path="/tabs/SliderLessonPage/:bookId/:lessonId"
          component={SliderLessonPage}
        />
        <Route
          path="/tabs/SegmentLessonPage/:bookId/:lessonId"
          component={SegmentLessonPage}
        />
        <Route path="/tabs/ImanMainPage" component={ImanMainPage} />
        <Route path="/tabs/BeliefPage" component={BeliefPage} />
        <Route path="/tabs/IslamMainPage" component={IslamMainPage} />
        <Route
          path="/tabs/PrayerDefinitionPage"
          component={PrayerDefinitionPage}
        />
        <Route path="/tabs/HajjDefinitionPage" component={HajjDefinitionPage} />
        <Route path="/tabs/WudhuPage" component={WudhuPage} />

        <Route
          path="/tabs/DailyPrayerDefinitionPage/:prayerId"
          component={DailyPrayerDefinitionPage}
        />
        <Route
          path="/tabs/DailyPrayerDetailsPage/:prayerId/:prayerTypeId"
          component={DailyPrayerDetailsPage}
        />
        <Route
          path="/tabs/DailyPrayerWatchPage/:prayerId/:prayerTypeId"
          component={DailyPrayerWatchPage}
        />
        <Route
          path="/tabs/DailyPrayerDhikrPage"
          component={DailyPrayerDhikrPage}
        />
        <Route path="/tabs/TasbihPage" component={TasbihPage} />
        <Route path="/tabs/BookTwoMainPage" component={BookTwoMainPage} />
        <Route path="/tabs/EidPrayerPage" component={EidPrayerPage} />
        <Route path="/tabs/FuneralPrayerPage" component={FuneralPrayerPage} />
        <Route path="/tabs/TarawihPrayerPage" component={TarawihPrayerPage} />
        <Route path="/tabs/JummahPrayerPage" component={JummahPrayerPage} />
        <Route
          path="/tabs/UnderConstructionPage"
          component={UnderConstructionPage}
        />
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        color="background"
        hidden={!translationService.isLoaded()}
      >
        <IonTabButton tab="/tabs/HomePage" href="/tabs/HomePage">
          <IonIcon icon={homeOutline} color="burgundy" />
          <IonLabel>{translate("label-tab-home")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/tabs/MainBookPage" href="/tabs/MainBookPage">
          <IonIcon icon={bookOutline} color="burgundy" />
          <IonLabel>{translate("label-tab-school")}</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="/tabs/MainCategoryPage"
          href="/tabs/MainCategoryPage"
        >
          <IonIcon icon={receiptOutline} color="burgundy" />
          <IonLabel>{translate("label-tab-advanced-school")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/tabs/PrayerTimes/" href="/tabs/PrayerTimes/">
          <IonIcon icon={alarmOutline} color="burgundy" />
          <IonLabel>{translate("label-tab-praying-times")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/tabs/OptionsPage" href="/tabs/OptionsPage">
          <IonIcon icon={informationOutline} color="burgundy" />
          <IonLabel>{translationService.getLabel("label-tab-info")}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainApp;
