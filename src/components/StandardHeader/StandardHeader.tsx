import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react'
import React from 'react'
import './StandardHeader.css'

export const StandardHeader=()=>{
    return(
        <IonHeader className="standardHeader ion-no-border">
        <IonToolbar className="standardToolbar">
          <IonButtons slot="start">
            <IonBackButton color="burgundy" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    )
}