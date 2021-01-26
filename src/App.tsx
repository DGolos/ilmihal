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
import { ellipse, square, triangle } from 'ionicons/icons';
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
import EuzaPage from './pages/BookOne/EuzaPage';
import ShahadahPage from './pages/BookOne/ShahadahPage';
import OurFaithPage from './pages/BookOne/OurFaithPage';
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
import FajrPrayerPage from './pages/BookOne/FajrPrayerPage';
import DhuhrPrayerPage from './pages/BookOne/DhuhrPrayerPage';
import AsrPrayerPage from './pages/BookOne/AsrPrayerPage';
import MaghribPrayerPage from './pages/BookOne/MaghribPrayerPage';
import IshaPrayerPage from './pages/BookOne/IshaPrayerPage';
import FajrPrayerDetailsPage from './pages/BookOne/FajrPrayerDetailsPage';

const App: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  
  const initialization = useCallback(async () => {
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
          <Route path="/BookOneMainPage" component={BookOneMainPage}/>
          <Route path="/EuzaPage" component={EuzaPage}/>
          <Route path="/ShahadahPage" component={ShahadahPage}/>
          <Route path="/OurFaithPage" component={OurFaithPage}/>
          <Route path="/RabbiJessirPage" component={RabbiJessirPage}/>
          <Route path="/SubhanekePage" component={SubhanekePage}/>
          <Route path="/SelamPage" component={SelamPage}/>
          <Route path="/SurahFatihaPage" component={SurahFatihaPage}/>
          <Route path="/SurahNasPage" component={SurahNasPage}/>
          <Route path="/SurahFelekPage" component={SurahFelekPage}/>
          <Route path="/SurahIhlasPage" component={SurahIhlasPage}/>
          <Route path="/AdhanPage" component={AdhanPage}/>
          <Route path="/IqamahPage" component={IqamahPage}/>
          <Route path="/EttehijatuPage" component={EttehijatuPage}/>
          <Route path="/SalavatPage" component={SalavatPage}/>
          <Route path="/FajrPrayerPage" component={FajrPrayerPage}/>
          <Route path="/FajrPrayerDetailsPage/:type" component={FajrPrayerDetailsPage}/>
          <Route path="/DhuhrPrayerPage" component={DhuhrPrayerPage}/>
          <Route path="/AsrPrayerPage" component={AsrPrayerPage}/>
          <Route path="/MaghribPrayerPage" component={MaghribPrayerPage}/>
          <Route path="/IshaPrayerPage" component={IshaPrayerPage}/>
          <Route path="/BookTwoMainPage" component={BookTwoMainPage}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="HomePage" href="/HomePage">
            <IonIcon icon={triangle} />
            <IonLabel>{translationService.getLabel(1)}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MainCategoryPage" href="/MainCategoryPage">
            <IonIcon icon={ellipse} />
            <IonLabel>{translationService.getLabel(2)}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="OptionsPage" href="/OptionsPage">
            <IonIcon icon={square} />
            <IonLabel>{translationService.getLabel(3)}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
