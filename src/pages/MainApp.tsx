import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bookOutline, homeOutline, informationOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import { translationService } from "../services/TranslationService";
import { CaliphsPage } from "./Advanced/CaliphsPage";
import CreditsPage from "./Advanced/CeditsPage";
import { ChosenCompanionsPage } from "./Advanced/ChosenCompanionsPage";
import { CompanionsPage } from "./Advanced/CompanionsPage";
import { DailySupplicationsPage } from "./Advanced/DailySupplicationsPage";
import DhikrMainPage from "./Advanced/DhikrMainPage";
import ForgivnesPage from "./Advanced/ForgivnesOage";
import { HadeethPage } from "./Advanced/HadeethPage";
import { BosnianCulturePage } from "./Advanced/Homeland/BosnianCulturePage";
import { BosnianScholarsPage } from "./Advanced/Homeland/BosnianScholarsPage";
import { BosniaPage } from "./Advanced/Homeland/BosniaPage";
import { MessangersSupplicationsPage } from "./Advanced/MessangersSupplicationsPage";
import { GuidancePrayerPage } from "./Advanced/Prayer/GuidancePrayerPage";
import { MorningPrayerPage } from "./Advanced/Prayer/MorningPrayerPage";
import { NightPrayerPage } from "./Advanced/Prayer/NightPrayerPage";
import PrayerTimesPage from "./Advanced/Prayer/PrayerTimesPage";
import { VoluntaryPrayersPage } from "./Advanced/Prayer/VoluntaryPrayersPage";
import { AyahPage } from "./Advanced/Quran/AyahPage";
import { BeautifulNamesPage } from "./Advanced/Quran/BeautifulNamesPage";
import { ChosenVersesPage } from "./Advanced/Quran/ChosenVersesPage";
import { PearlsAyahPage } from "./Advanced/Quran/PearlsAyahPage";
import { QuranMainPage } from "./Advanced/Quran/QuranMainPage";
import { QuranPlayerPage } from "./Advanced/Quran/QuranPlayerPage";
import { QuranReaderPage } from "./Advanced/Quran/QuranReaderPage";
import { QuranRecitationPage } from "./Advanced/Quran/QuranRecitationPage";
import { QuranRevelationPage } from "./Advanced/Quran/QuranRevelationPage";
import { QuranTranslationPage } from "./Advanced/Quran/QuranTranslations";
import { RubiesAyahPage } from "./Advanced/Quran/RubiesAyahPage";
import RepetancePage from "./Advanced/RepetencePage";
import { SirahPage } from "./Advanced/SirahPage";
import SupplicationMainPage from "./Advanced/SupplicationMainPage";
import { SupplicationValuePage } from "./Advanced/SupplicationsValuePage";
import { WomensPage } from "./Advanced/WomensPage";
import AsrPrayerPage from "./BookOne/AsrPrayerPage";
import AsrPrayerDetailsPage from "./BookOne/AsrPrayerPageDetails";
import AsrPrayerWatchPage from "./BookOne/AsrPrayerWatchPage";
import BeliefPage from "./BookOne/BeliefPage";
import BookOneMainPage from "./BookOne/BookOneMainPage";
import DhikrPage from "./BookOne/DhikrPage";
import DhuhrPrayerPage from "./BookOne/DhuhrPrayerPage";
import DhuhrPrayerDetailsPage from "./BookOne/DhuhrPrayerPageDetails";
import DhuhrPrayerWatchPage from "./BookOne/DhuhrPrayerWatchPage";
import FajrPrayerDetailsPage from "./BookOne/FajrPrayerDetailsPage";
import FajrPrayerPage from "./BookOne/FajrPrayerPage";
import FajrPrayerWatchPage from "./BookOne/FajrPrayerWatchPage";
import HajjDefinitionPage from "./BookOne/HajjDefinitionPage";
import ImanMainPage from "./BookOne/ImanMainPage";
import IshaPrayerPage from "./BookOne/IshaPrayerPage";
import IshaPrayerDetailsPage from "./BookOne/IshaPrayerPageDetails";
import IshaPrayerWatchPage from "./BookOne/IshaPrayerWatchPage";
import IslamMainPage from "./BookOne/IslamMainPage";
import MaghribPrayerPage from "./BookOne/MaghribPrayerPage";
import MaghribPrayerDetailsPage from "./BookOne/MaghribPrayerPageDetails";
import MaghribPrayerWatchPage from "./BookOne/MaghribPrayerWatchPage";
import PrayerDefinitionPage from "./BookOne/PrayerDefinitionPage";
import TasbihPage from "./BookOne/TasbihPage";
import WudhuPage from "./BookOne/WudhuPage";
import BookTwoMainPage from "./BookTwo/BookTwoMainPage";
import { EidPrayerPage } from "./BookTwo/EidPrayerPage";
import { FuneralPrayerPage } from "./BookTwo/FuneralPrayerPage";
import { JummahPrayerPage } from "./BookTwo/JummahPrayerPage";
import { TarawihPrayerPage } from "./BookTwo/TarawihPrayerPage";
import SegmentLessonPage from "./Common/SegmentLessonPage";
import { StandardLessonPage } from "./Common/StandardLessonPage";
import HomePage from "./HomePage";
import LanguageOptionsPage from "./LanguageOptionsPage";
import LocationOptionsPage from "./LocationOptionsPage";
import MainCategoryPage from "./MainCategoryPage";
import OptionsPage from "./OptionsPage";
import UnderConstructionPage from "./UnderConstructionPage";

interface MainAppProps{}

const MainApp: React.FC<MainAppProps> = () => {
  return (
    
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/HomePage" />
          <Route path="/tabs/HomePage" render={() => <HomePage />}                   />
          <Route path="/tabs/MainCategoryPage" render={() => <MainCategoryPage />} exact={true}/>
          <Route path="/tabs/OptionsPage" render={() => <OptionsPage /> } exact={true} />
          <Route path="/tabs/CreditsPage" component={CreditsPage} />
          <Route path="/tabs/LanguageOptionsPage" component={LanguageOptionsPage} />
          <Route path="/tabs/LocationOptionsPage" component={LocationOptionsPage} />
          <Route path="/tabs/Quran/:type" component={QuranMainPage} />
          <Route path="/tabs/QuranReader/:id" component={QuranReaderPage} />
          <Route path="/tabs/QuranPlayer/:id" component={QuranPlayerPage} />
          <Route path="/tabs/PrayerTimes/" component={PrayerTimesPage} />
          <Route
            path="/tabs/VoluntaryPrayersPage/"
            component={VoluntaryPrayersPage}
          />
          <Route path="/tabs/NightPrayerPage/" component={NightPrayerPage} />
          <Route path="/tabs/MorningPrayerPage/" component={MorningPrayerPage} />
          <Route path="/tabs/GuidancePrayerPage/" component={GuidancePrayerPage} />
          <Route path="/tabs/BeautifulNames/" component={BeautifulNamesPage} />
          <Route path="/tabs/ChosenVerses/" component={ChosenVersesPage} />
          <Route path="/tabs/RubiesAyahPage/" component={RubiesAyahPage} />
          <Route path="/tabs/PearlsAyahPage/" component={PearlsAyahPage} />
          <Route
            path="/tabs/QuranTranslationPage/"
            component={QuranTranslationPage}
          />
          <Route path="/tabs/QuranRecitationPage/" component={QuranRecitationPage} />
          <Route path="/tabs/QuranRevelationPage/" component={QuranRevelationPage} />
          <Route
            path="/tabs/AyahPage/:surahId/:firstAyahId/:lastAyahId"
            component={AyahPage}
          />
          <Route
            path="/tabs/SupplicationMainPage/"
            component={SupplicationMainPage}
          />
          <Route
            path="/tabs/SupplicationValuePage/"
            component={SupplicationValuePage}
          />
          <Route
            path="/tabs/MessangersSupplicationsPage/"
            component={MessangersSupplicationsPage}
          />
          <Route
            path="/tabs/DailySupplicationsPage/"
            component={DailySupplicationsPage}
          />
          <Route path="/tabs/DhikrMainPage/" component={DhikrMainPage} />
          <Route path="/tabs/RepetancePage/" component={RepetancePage} />
          <Route path="/tabs/ForgivnesPage/" component={ForgivnesPage} />
          <Route path="/tabs/HadeethPage/" component={HadeethPage} />
          <Route path="/tabs/SirahPage/" component={SirahPage} />
          <Route path="/tabs/CompanionsPage/" component={CompanionsPage} />
          <Route path="/tabs/CaliphsPage" component={CaliphsPage} />
          <Route
            path="/tabs/ChosenCompanionsPage"
            component={ChosenCompanionsPage}
          />
          <Route path="/tabs/BosnianScholarsPage" component={BosnianScholarsPage} />
          <Route path="/tabs/BosnianCulturePage" component={BosnianCulturePage} />
          <Route path="/tabs/BosniaPage" component={BosniaPage} />
          <Route path="/tabs/WomensPage" component={WomensPage} />
          <Route path="/tabs/BookOneMainPage" component={BookOneMainPage} />
          <Route
            path="/tabs/StandardLessonPage/:bookId/:lessonId"
            component={StandardLessonPage}
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
          <Route path="/tabs/FajrPrayerPage" component={FajrPrayerPage} />
          <Route
            path="/tabs/FajrPrayerDetailsPage/:type"
            component={FajrPrayerDetailsPage}
          />
          <Route
            path="/tabs/FajrPrayerWatchPage/:type"
            component={FajrPrayerWatchPage}
          />
          <Route
            path="/tabs/DhuhrPrayerDetailsPage/:type"
            component={DhuhrPrayerDetailsPage}
          />
          <Route
            path="/tabs/DhuhrPrayerWatchPage/:type"
            component={DhuhrPrayerWatchPage}
          />
          <Route path="/tabs/DhuhrPrayerPage" component={DhuhrPrayerPage} />
          <Route path="/tabs/AsrPrayerPage" component={AsrPrayerPage} />
          <Route
            path="/tabs/AsrPrayerDetailsPage/:type"
            component={AsrPrayerDetailsPage}
          />
          <Route
            path="/tabs/AsrPrayerWatchPage/:type"
            component={AsrPrayerWatchPage}
          />
          <Route
            path="/tabs/MaghribPrayerDetailsPage/:type"
            component={MaghribPrayerDetailsPage}
          />
          <Route
            path="/tabs/MaghribPrayerWatchPage/:type"
            component={MaghribPrayerWatchPage}
          />
          <Route path="/tabs/MaghribPrayerPage" component={MaghribPrayerPage} />
          <Route
            path="/tabs/IshaPrayerDetailsPage/:type"
            component={IshaPrayerDetailsPage}
          />
          <Route
            path="/tabs/IshaPrayerWatchPage/:type"
            component={IshaPrayerWatchPage}
          />
          <Route path="/tabs/IshaPrayerPage" component={IshaPrayerPage} />
          <Route path="/tabs/DhikrPage" component={DhikrPage} />
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
            <IonLabel>{translationService.getLabel("label-tab-home")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/tabs/MainCategoryPage" href="/tabs/MainCategoryPage">
            <IonIcon icon={bookOutline} color="burgundy" />
            <IonLabel>
              {translationService.getLabel("label-tab-treasure")}
            </IonLabel>
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
