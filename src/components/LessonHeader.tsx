import { IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonText, IonCardHeader } from '@ionic/react';
import React from 'react';
import usePrayerTimes from '../hooks/usePrayerTimes';
import './LessonHeader.css'

interface LessonHeaderProps{
    title?:string;
    quoteText?:string;
    quoteReference?:string;
    
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({title,quoteText,quoteReference}) => {
  const{color}=usePrayerTimes(new Date().getDay());
    return (
        <IonCard
          className="lessonHeader ion-padding"
          color={color}
        >
          <IonCardHeader>
            <IonText className='leasonHeaderTitle'>{title}</IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <p className="quote">
                {quoteText}
              </p>
              <p className="quote-reference">{quoteReference}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
    );
  };