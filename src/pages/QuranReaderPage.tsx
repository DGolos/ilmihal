import { RouteComponentProps } from "react-router";
import {IonContent, IonPage, useIonViewWillEnter} from '@ionic/react';
import React, { useRef, useState } from "react";
import './QuranReaderPage.css';
import { Surah } from "../objects/Surah";
import { dataService } from "../services/dataService";

export const QuranReaderPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const surahRef=useRef<Surah>(new Surah());
    
    const loadSurah =()=>{
        surahRef.current=dataService.getSurahById(+(match.params.id));
        //setCurrentSurah(plainToClass(Surah,suras.find(surah=>surah.id===+(match.params.id))));
        console.log(surahRef);
        
     };

    useIonViewWillEnter(() => {
        loadSurah();
      });
    return(
        <IonPage>
            <IonContent>
            <h1>Reader</h1>
            </IonContent>
            
        </IonPage>
    );
}