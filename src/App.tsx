import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonLoading,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, buildOutline, ellipse, homeOutline, settingsOutline, square, triangle } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import MainCategoryPage from './pages/MainCategoryPage';
import OptionsPage from './pages/OptionsPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.scss';
import { translationService } from './services/TranslationService';
import { QuranMainPage } from './pages/QuranMainPage';
import { QuranReaderPage } from './pages/QuranReaderPage';
import { QuranPlayerPage } from './pages/QuranPlayerPage';
import BookOneMainPage from './pages/BookOne/BookOneMainPage';
import BookTwoMainPage from './pages/BookTwo/BookTwoMainPage';
import PrayerTimesPage from './pages/PrayerTimesPage';
import { timeService } from './services/TimeService';
import RabbiJessirPage from './pages/BookOne/RabbiJessirPage';
import SubhanekePage from './pages/BookOne/SubhanekePage';
import SelamPage from './pages/BookOne/SelamPage';
import SurahFatihaPage from './pages/BookOne/SurahFatihaPage';
import SurahNasPage from './pages/BookOne/SurahNasPage';
import SurahFelekPage from './pages/BookOne/SurahFelekPage';
import SurahIhlasPage from './pages/BookOne/SurahIhlasPage';
import AdhanPage from './pages/BookOne/AdhanPage';
import IqamahPage from './pages/BookOne/IqamahPage';
import EttehijatuPage from './pages/BookOne/EttehijatuPage';
import SalavatPage from './pages/BookOne/SalavatPage';
import DuaPage from './pages/BookOne/DuaPage';
import FajrPrayerPage from './pages/BookOne/FajrPrayerPage';
import DhuhrPrayerPage from './pages/BookOne/DhuhrPrayerPage';
import AsrPrayerPage from './pages/BookOne/AsrPrayerPage';
import MaghribPrayerPage from './pages/BookOne/MaghribPrayerPage';
import IshaPrayerPage from './pages/BookOne/IshaPrayerPage';
import FajrPrayerDetailsPage from './pages/BookOne/FajrPrayerDetailsPage';
import DhuhrPrayerDetailsPage from './pages/BookOne/DhuhrPrayerPageDetails';
import AsrPrayerDetailsPage from './pages/BookOne/AsrPrayerPageDetails';
import MaghribPrayerDetailsPage from './pages/BookOne/MaghribPrayerPageDetails';
import IshaPrayerDetailsPage from './pages/BookOne/IshaPrayerPageDetails';
import IslamMainPage from './pages/BookOne/IslamMainPage';
import ImanMainPage from './pages/BookOne/ImanMainPage';
import RamadhanDefinitionPage from './pages/BookOne/RamadhanDefinitionPage';
import CharityDefinitionPage from './pages/BookOne/CharityDefinitionPage';
import HajjDefinitionPage from './pages/BookOne/HajjDefinitionPage';
import PrayerDefinitionPage from './pages/BookOne/PrayerDefinitionPage';
import FajrPrayerWatchPage from './pages/BookOne/FajrPrayerWatchPage';
import DhuhrPrayerWatchPage from './pages/BookOne/DhuhrPrayerWatchPage';
import AsrPrayerWatchPage from './pages/BookOne/AsrPrayerWatchPage';
import MaghribPrayerWatchPage from './pages/BookOne/MaghribPrayerWatchPage';
import IshaPrayerWatchPage from './pages/BookOne/IshaPrayerWatchPage';
import DhikrPage from './pages/BookOne/DhikrPage';
import WudhuPage from './pages/BookOne/WudhuPage';
import BeliefPage from './pages/BookOne/BeliefPage';
import AngelsPage from './pages/BookOne/AngelsPage';
import RevelationsPage from './pages/BookOne/RevelationsPage';
import MessangersPage from './pages/BookOne/MessangersPage';
import JudgementDayPage from './pages/BookOne/JudgementDay.Page';
import DestinyPage from './pages/BookOne/DestinyPage';
import { BeautifulNamesPage } from './pages/Advanced/BeautifulNamesPage';
import { ChosenVersesPage } from './pages/Advanced/ChosenVersesPage';
import { RubiesAyahPage } from './pages/Advanced/RubiesAyahPage';
import { PearlsAyahPage } from './pages/Advanced/PearlsAyahPage';
import { AyahPage } from './pages/Advanced/AyahPage';
import PrayerRequirementsPage from './pages/BookTwo/PrayerRequirementsPage';
import PrayerPartsPage from './pages/BookTwo/PrayerPartsPage';
import SahwiSujudPage from './pages/BookTwo/SahwiSujudPage';
import OverduePrayerPage from './pages/BookTwo/OverduePrayerPage';
import CongregationalPrayerPage from './pages/BookTwo/CongregationalPrayerPage';
import TravellerPrayerPage from './pages/BookTwo/TravellerPrayerPage';
import SickPersonPrayerPage from './pages/BookTwo/SickPersonPrayerPage';
import WashingPage from './pages/BookTwo/WashingPage';
import StoneWashingPage from './pages/BookTwo/StoneWashingPage';
import WipingPage from './pages/BookTwo/WipingPage';
import SurahLehebPage from './pages/BookTwo/SurahLehebPage';
import SurahNasrPage from './pages/BookTwo/SurahNasrPage';
import SurahKafirunPage from './pages/BookTwo/SurahKafirunPage';
import HijriYearPage from './pages/BookTwo/HijriYearPage';
import MawludPage from './pages/BookTwo/MawludPage';
import BlessedNightsPage from './pages/BookTwo/BlessedNightsPage';
import QuranDefinitionPage from './pages/BookTwo/QuranDefinitionPage';
import KabaPage from './pages/BookTwo/KabaPage';
import { EidPrayerPage } from './pages/BookTwo/EidPrayerPage';
import { FuneralPrayerPage } from './pages/BookTwo/FuneralPrayerPage';
import { TarawihPrayerPage } from './pages/BookTwo/TarawihPrayerPage';
import { JummahPrayerPage } from './pages/BookTwo/JummahPrayerPage';
import ObligationsToAllahPage from './pages/BookTwo/ObligationsToAllahPage';
import ObligationsToParentsPage from './pages/BookTwo/ObligationsToParentsPage';
import ParentsObligationsPage from './pages/BookTwo/ParentsObligationsPage';
import OwnObligationsPage from './pages/BookTwo/OwnObligationsPage';
import MiddleWayPage from './pages/BookTwo/MiddleWayPage';
import PowerOfTruthPage from './pages/BookTwo/PowerOfTruthPage';
import MistakesPage from './pages/BookTwo/MistakesPage';
import MuhammadMainPage from './pages/BookTwo/MuhammadMainPage';
import { dataService } from './services/dataService';
import { StandardLessonPage } from './pages/Common/StandardLessonPage';

const App: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  
  const initialization = useCallback(async () => {
    await translationService.load();
    await dataService.load();
    await timeService.init();
    setInitialized(true);
  }, []);

  useEffect(() => {
    initialization();
  }, [initialization]);

  if (!initialized) {
    return (<IonLoading isOpen={!initialized} message=" Starter..." />)
  }
  
  return (
  <IonApp>
     <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/HomePage" component={HomePage} exact={true} />
          <Route path="/MainCategoryPage" component={MainCategoryPage} exact={true} />
          <Route path="/OptionsPage" component={OptionsPage} />
          <Route path="/" render={() => <Redirect to="/HomePage" />} exact={true} />
          <Route path="/Quran/:type" component={QuranMainPage} />
          <Route path="/QuranReader/:id" component={QuranReaderPage} />
          <Route path="/QuranPlayer/:id" component={QuranPlayerPage} />
          <Route path="/PrayerTimes/" component={PrayerTimesPage} />
          <Route path="/BeautifulNames/" component={BeautifulNamesPage} />
          <Route path="/ChosenVerses/" component={ChosenVersesPage} />
          <Route path="/RubiesAyahPage/" component={RubiesAyahPage} />
          <Route path="/PearlsAyahPage/" component={PearlsAyahPage} />
          <Route path="/AyahPage/:surahId/:firstAyahId/:lastAyahId" component={AyahPage} />
          <Route path="/BookOneMainPage" component={BookOneMainPage}/>
          <Route path="/StandardLessonPage/:bookId/:lessonId" component={StandardLessonPage}/>
          <Route path="/RabbiJessirPage" component={RabbiJessirPage}/>
          <Route path="/SubhanekePage" component={SubhanekePage}/>
          <Route path="/SurahFatihaPage" component={SurahFatihaPage}/>
          <Route path="/SurahNasPage" component={SurahNasPage}/>
          <Route path="/SurahFelekPage" component={SurahFelekPage}/>
          <Route path="/SurahIhlasPage" component={SurahIhlasPage}/>
          <Route path="/ImanMainPage" component={ImanMainPage}/>
          <Route path="/BeliefPage" component={BeliefPage}/>
          <Route path="/AngelsPage" component={AngelsPage}/>
          <Route path="/RevelationsPage" component={RevelationsPage}/>
          <Route path="/MessangersPage" component={MessangersPage}/>
          <Route path="/JudgementDayPage" component={JudgementDayPage}/>
          <Route path="/DestinyPage" component={DestinyPage}/>
          <Route path="/IslamMainPage" component={IslamMainPage}/>
          <Route path="/PrayerDefinitionPage" component={PrayerDefinitionPage}/>
          <Route path="/RamadhanDefinitionPage" component={RamadhanDefinitionPage}/>
          <Route path="/CharityDefinitionPage" component={CharityDefinitionPage}/>
          <Route path="/HajjDefinitionPage" component={HajjDefinitionPage}/>
          <Route path="/WudhuPage" component={WudhuPage}/>
          <Route path="/AdhanPage" component={AdhanPage}/>
          <Route path="/IqamahPage" component={IqamahPage}/>
          <Route path="/EttehijatuPage" component={EttehijatuPage}/>
          <Route path="/SalavatPage" component={SalavatPage}/>
          <Route path="/DuaPage" component={DuaPage}/>
          <Route path="/FajrPrayerPage" component={FajrPrayerPage}/>
          <Route path="/FajrPrayerDetailsPage/:type" component={FajrPrayerDetailsPage}/>
          <Route path="/FajrPrayerWatchPage/:type" component={FajrPrayerWatchPage}/>
          <Route path="/DhuhrPrayerDetailsPage/:type" component={DhuhrPrayerDetailsPage}/>
          <Route path="/DhuhrPrayerWatchPage/:type" component={DhuhrPrayerWatchPage}/>
          <Route path="/DhuhrPrayerPage" component={DhuhrPrayerPage}/>
          <Route path="/AsrPrayerPage" component={AsrPrayerPage}/>
          <Route path="/AsrPrayerDetailsPage/:type" component={AsrPrayerDetailsPage}/>
          <Route path="/AsrPrayerWatchPage/:type" component={AsrPrayerWatchPage}/>
          <Route path="/MaghribPrayerDetailsPage/:type" component={MaghribPrayerDetailsPage}/>
          <Route path="/MaghribPrayerWatchPage/:type" component={MaghribPrayerWatchPage}/>
          <Route path="/MaghribPrayerPage" component={MaghribPrayerPage}/>
          <Route path="/IshaPrayerDetailsPage/:type" component={IshaPrayerDetailsPage}/>
          <Route path="/IshaPrayerWatchPage/:type" component={IshaPrayerWatchPage}/>
          <Route path="/IshaPrayerPage" component={IshaPrayerPage}/>
          <Route path="/DhikrPage" component={DhikrPage}/>
          <Route path="/BookTwoMainPage" component={BookTwoMainPage}/>
          <Route path="/PrayerRequirementsPage" component={PrayerRequirementsPage}/>
          <Route path="/PrayerPartsPage" component={PrayerPartsPage}/>
          <Route path="/SahwiSujudPage" component={SahwiSujudPage}/>
          <Route path="/OverduePrayerPage" component={OverduePrayerPage}/>
          <Route path="/CongregationalPrayerPage" component={CongregationalPrayerPage}/>
          <Route path="/TravellerPrayerPage" component={TravellerPrayerPage}/>
          <Route path="/SickPersonPrayerPage" component={SickPersonPrayerPage}/>
          <Route path="/WashingPage" component={WashingPage}/>
          <Route path="/StoneWashingPage" component={StoneWashingPage}/>
          <Route path="/WipingPage" component={WipingPage}/>
          <Route path="/EidPrayerPage" component={EidPrayerPage}/>
          <Route path="/FuneralPrayerPage" component={FuneralPrayerPage}/>
          <Route path="/TarawihPrayerPage" component={TarawihPrayerPage}/>
          <Route path="/JummahPrayerPage" component={JummahPrayerPage}/>
          <Route path="/HijriYearPage" component={HijriYearPage}/>
          <Route path="/MawludPage" component={MawludPage}/>
          <Route path="/BlessedNightsPage" component={BlessedNightsPage}/>
          <Route path="/QuranDefinitionPage" component={QuranDefinitionPage}/>
          <Route path="/KabaPage" component={KabaPage}/>
          <Route path="/MuhammadMainPage" component={MuhammadMainPage}/>
          <Route path="/ObligationsToAllahPage" component={ObligationsToAllahPage}/>
          <Route path="/ObligationsToParentsPage" component={ObligationsToParentsPage}/>
          <Route path="/ParentsObligationsPage" component={ParentsObligationsPage}/>
          <Route path="/OwnObligationsPage" component={OwnObligationsPage}/>
          <Route path="/MiddleWayPage" component={MiddleWayPage}/>
          <Route path="/PowerOfTruthPage" component={PowerOfTruthPage}/>
          <Route path="/MistakesPage" component={MistakesPage}/>
          <Route path="/SurahLehebPage" component={SurahLehebPage}/>
          <Route path="/SurahNasrPage" component={SurahNasrPage}/>
          <Route path="/SurahKafirunPage" component={SurahKafirunPage}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="background">
          <IonTabButton tab="HomePage" href="/HomePage">
            <IonIcon icon={homeOutline} color="burgundy"/>
            <IonLabel>{translationService.getLabel('label-tab-home')}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MainCategoryPage" href="/MainCategoryPage">
            <IonIcon icon={bookOutline} color="burgundy"/>
            <IonLabel>{translationService.getLabel('label-tab-treasure')}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="OptionsPage" href="/OptionsPage">
            <IonIcon icon={settingsOutline} color="burgundy" />
            <IonLabel>{translationService.getLabel('label-tab-options')}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
