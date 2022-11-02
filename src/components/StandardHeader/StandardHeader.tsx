import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react'
import React from 'react'
import usePrayerTimes from '../../hooks/usePrayerTimes'
import './StandardHeader.css'

export const StandardHeader=()=>{
  const{color}=usePrayerTimes(new Date().getDay());
    return(
        <IonHeader className="standardHeader ion-no-border">
        <IonToolbar className="standardToolbar">
          <IonButtons slot="start">
            <IonBackButton color={color}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    )
}