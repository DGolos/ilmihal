import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { alarmOutline, bookOutline, homeOutline, informationOutline, receiptOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import useTranslation from "../hooks/useTranslation";
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
import MonthlyPrayerTimesPage from "./Advanced/Prayer/MonthlyPrayerTimesPage";
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
import { RubiesAyahPage } from "./Advanced/Quran/RubiesAyahPage";
import RepetancePage from "./Advanced/RepetencePage";
import { SirahPage } from "./Advanced/SirahPage";
import SupplicationMainPage from "./Advanced/SupplicationMainPage";
import { SupplicationValuePage } from "./Advanced/SupplicationsValuePage";
import { WomensPage } from "./Advanced/WomensPage";
import BeliefPage from "./BeliefPage";
import BookOneMainPage from "./BookOneMainPage";
import DhikrPage from "./BookOne/DhikrPage";
import HajjDefinitionPage from "./HajjDefinitionPage";
import ImanMainPage from "./ImanMainPage";
import IslamMainPage from "./IslamPage";
import PrayerDefinitionPage from "./BookOne/PrayerDefinitionPage";
import TasbihPage from "./BookOne/TasbihPage";
import WudhuPage from "./WudhuPage";
import BookTwoMainPage from "./BookTwoMainPage";
import { EidPrayerPage } from "./Prayer/EidPrayerPage";
import { FuneralPrayerPage } from "./Prayer/FuneralPrayerPage";
import { JummahPrayerPage } from "./Prayer/JummahPrayerPage";
import { TarawihPrayerPage } from "./Prayer/TarawihPrayerPage";
import SegmentLessonPage from "./SegmentLessonPage";
import { StandardLessonPage } from "./StandardLessonPage";
import HomePage from "./HomePage";
import LanguageOptionsPage from "./LanguageOptionsPage";
import LocationOptionsPage from "./LocationOptionsPage";
import MainBookPage from "./MainBookPage";
import MainCategoryPage from "./MainCategoryPage";
import OptionsPage from "./OptionsPage";
import UnderConstructionPage from "./UnderConstructionPage";
import { SliderLessonPage } from "./SliderLessonPage";
import { DailyPrayerDefinitionPage } from "./Prayer/DailyPrayerDefinitionPage";
import { DailyPrayerDetailsPage } from "./Prayer/DailyPrayerDetailsPage";
import { DailyPrayerWatchPage } from "./Prayer/DailyPrayerWatchPage";

//3D7JW5AHQN.no.izbih.iMekteb
interface MainAppProps{}

const MainApp: React.FC<MainAppProps> = () => {
  const {translate}=useTranslation();
  return (
    
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/HomePage" />
          <Route path="/tabs/HomePage" render={() => <HomePage />}/>
          <Route path="/tabs/MainCategoryPage" render={() => <MainCategoryPage />} exact={true}/>
          <Route path="/tabs/MainBookPage" render={() => <MainBookPage />} exact={true}/>
          <Route path="/tabs/OptionsPage" render={() => <OptionsPage /> } exact={true} />
          <Route path="/tabs/CreditsPage" component={CreditsPage} />
          <Route path="/tabs/LanguageOptionsPage" component={LanguageOptionsPage} />
          <Route path="/tabs/LocationOptionsPage" component={LocationOptionsPage} />
          <Route path="/tabs/Quran/:type" component={QuranMainPage} />
          <Route path="/tabs/QuranReader/:id" component={QuranReaderPage} />
          <Route path="/tabs/QuranPlayer/:id" component={QuranPlayerPage} />
          <Route path="/tabs/PrayerTimes/" component={PrayerTimesPage} />
          <Route path="/tabs/MonthlyPrayerTimes/" component={MonthlyPrayerTimesPage} />
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


          <Route path="/tabs/DailyPrayerDefinitionPage/:prayerId" component={DailyPrayerDefinitionPage} />
          <Route path="/tabs/DailyPrayerDetailsPage/:prayerId/:prayerTypeId" component={DailyPrayerDetailsPage} />
          <Route path="/tabs/DailyPrayerWatchPage/:prayerId/:prayerTypeId" component={DailyPrayerWatchPage} />
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
            <IonLabel>{translate("label-tab-home")}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/tabs/MainBookPage" href="/tabs/MainBookPage">
            <IonIcon icon={bookOutline} color="burgundy" />
            <IonLabel>
              {translate("label-tab-school")}
            </IonLabel>
          </IonTabButton>
          <IonTabButton tab="/tabs/MainCategoryPage" href="/tabs/MainCategoryPage">
            <IonIcon icon={receiptOutline} color="burgundy" />
            <IonLabel>
              {translate("label-tab-advanced-school")}
            </IonLabel>
          </IonTabButton>
          <IonTabButton tab="/tabs/PrayerTimes/" href="/tabs/PrayerTimes/">
            <IonIcon icon={alarmOutline} color="burgundy" />
            <IonLabel>
            {translate("label-tab-praying-times")}
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
