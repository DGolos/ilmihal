import { IonHeader } from '@ionic/react';
import React from 'react';
import { timeService } from '../services/TimeService';
import './HomeHeader.css';

export const HomeHeader: React.FC = () => {
    return (
        <IonHeader className="ion-no-border homeHeader">
        
        {timeService.getFormattedDate()}
        <br/>
        {timeService.getFormattedIslamicDate()}
      
    </IonHeader>
    );
  };

