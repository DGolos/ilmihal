import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react'
import React from 'react'
import useDailyAyah from '../../hooks/useDailyAyah';
import useTranslation from '../../hooks/useTranslation';
import './DailyAyah.css'

export const DailyAyah = () => {
  const {dailyAyah}=useDailyAyah();
  const {translate}=useTranslation();
  return (
    <IonCard className='dailyAyahCard'>
        <IonCardHeader className='dailyAyahCardHeader'>
            <IonText>{translate('label-daily-ayah')}</IonText>
            
        </IonCardHeader>
          <IonCardContent>
              <div>
              <IonText className='arabicText'>
              {dailyAyah?.arabicText}
              </IonText>
              </div>
              <div>
              <IonText>
              {translate(dailyAyah?.translation)}
              </IonText>
              </div>
              <div>
              <IonText >
              {translate(dailyAyah?.reference)}
              </IonText>
              </div>
              <div>
              
              </div>
              
            
      </IonCardContent>
        </IonCard>
  )
}

