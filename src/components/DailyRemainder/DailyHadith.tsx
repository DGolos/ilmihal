import { IonCard, IonCardContent, IonCardHeader, IonText } from '@ionic/react'
import React from 'react'
import './DailyHadith.css'

export const DailyHadith = () => {
  return (
    <IonCard className='dailyHadithCard'>
        <IonCardHeader className='dailyHadithCardHeader'>
            Dnevni hadis
        </IonCardHeader>
          <IonCardContent>
              <div>
              
              </div>
              <div>
              <IonText>
              "As for those who persist in disbelief, it is the same whether you warn them or not—they will never believe."
              </IonText>
              </div>
              <div>
              <IonText >
              - The Holy Qur'an
              </IonText>
              </div>
              <div>
              
              </div>
              
            
      </IonCardContent>
        </IonCard>
  )
}

