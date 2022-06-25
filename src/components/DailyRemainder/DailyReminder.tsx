import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react'
import React from 'react'
import useDailyRemainder from '../../hooks/useDailyReminder';
import useTranslation from '../../hooks/useTranslation';
import './DailyRemainder.css';

export const DailyRemainder = () => {
  const {dailyRemainder}=useDailyRemainder();
  const {translate}=useTranslation();
  return (
    <IonCard className='dailyRemainderCard ion-text-centered'>
        <IonCardHeader>
            
            <IonCardTitle className='dailyRemainderCardTitle'>Es-selamu alejkum</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              <div>
              <IonText className='dailyRemainderCardSubject'>
              {translate(dailyRemainder?.subject)}
              </IonText>
              </div>
              <br/>
              <div>
              <IonText className='dailyRemainderCardSubjectReference'>
              {translate(dailyRemainder?.text)}
              </IonText>
              </div>
              <div style={{marginTop:"5px"}}>
              <IonText className='dailyRemainderCardSubjectReference'>
              {translate(dailyRemainder?.source)}
              </IonText>
              </div>
              <div>
              <IonText className='dailyRemainderCardSubjectReference'>
              {translate(dailyRemainder?.reference)}
              </IonText>
              </div>
              
            
      </IonCardContent>
        </IonCard>
  )
}

