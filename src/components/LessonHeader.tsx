import { IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonText, IonCardHeader } from '@ionic/react';
import React from 'react';
import './LessonHeader.css'

interface LessonHeaderProps{
    title?:string;
    quoteText?:string;
    quoteReference?:string;
    color?:string;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({title,quoteText,quoteReference,color}) => {
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