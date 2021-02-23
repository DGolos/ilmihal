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
import { bookOutline, homeOutline, settingsOutline} from 'ionicons/icons';
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
import { BeautifulNamesPage } from './pages/Advanced/BeautifulNamesPage';
import { ChosenVersesPage } from './pages/Advanced/ChosenVersesPage';
import { RubiesAyahPage } from './pages/Advanced/RubiesAyahPage';
import { PearlsAyahPage } from './pages/Advanced/PearlsAyahPage';
import { AyahPage } from './pages/Advanced/AyahPage';
import { EidPrayerPage } from './pages/BookTwo/EidPrayerPage';
import { FuneralPrayerPage } from './pages/BookTwo/FuneralPrayerPage';
import { TarawihPrayerPage } from './pages/BookTwo/TarawihPrayerPage';
import { JummahPrayerPage } from './pages/BookTwo/JummahPrayerPage';
import { dataService } from './services/dataService';
import { StandardLessonPage } from './pages/Common/StandardLessonPage';
import SegmentLessonPage from './pages/Common/SegmentLessonPage';

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
          <Route path="/SegmentLessonPage/:bookId/:lessonId" component={SegmentLessonPage}/>
          <Route path="/ImanMainPage" component={ImanMainPage}/>
          <Route path="/BeliefPage" component={BeliefPage}/>
          <Route path="/IslamMainPage" component={IslamMainPage}/>
          <Route path="/PrayerDefinitionPage" component={PrayerDefinitionPage}/>
          <Route path="/HajjDefinitionPage" component={HajjDefinitionPage}/>
          <Route path="/WudhuPage" component={WudhuPage}/>
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
          <Route path="/EidPrayerPage" component={EidPrayerPage}/>
          <Route path="/FuneralPrayerPage" component={FuneralPrayerPage}/>
          <Route path="/TarawihPrayerPage" component={TarawihPrayerPage}/>
          <Route path="/JummahPrayerPage" component={JummahPrayerPage}/>
          
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
