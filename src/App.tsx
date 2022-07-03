import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLoading,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import { timeService } from './services/TimeService';
import { dataService } from './services/dataService';
import ChooseLanguagePage from './pages/Options/ChooseLanguagePage';
import ChooseLocationPage from './pages/Options/ChooseLocationPage';
import MainApp from './MainApp';
import useLanguage from './hooks/useLanguage';

const App: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  const {language}=useLanguage();
  
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
    return (<IonLoading isOpen={!initialized} message=" Pokretanje..." />)
  }
  
  return (
  <IonApp>
     <IonReactRouter>
      
        <IonRouterOutlet>
          <Route path="/ChooseLanguagePage" component={ChooseLanguagePage} />
          <Route path="/ChooseLocationPage" component={ChooseLocationPage} />
          <Route path="/tabs" component={MainApp} />
          <Route path="/" render={() => <Redirect to={language!==""?"/tabs":"/ChooseLanguagePage"} />} exact={true}/>
                    
        
          
        </IonRouterOutlet>
        
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
