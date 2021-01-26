import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage,  IonSearchbar,  IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { dataService } from '../services/dataService';
import { Surah } from '../objects/Surah';
import './QuranMainPage.css';

export const QuranMainPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {

  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [filteredSurahs,setFilteredSurahs]=useState<Surah[]>([]);
  const [searchText, setSearchText] = useState('');
  const [showArabic,setShowArabic]=useState(true);
  const [showTranslation,setShowTranslation]=useState(true);
  const [showTranscription,setShowTranscription]=useState(false);
  
  const loadSurahs =function (){
    setSurahs(dataService.getAllSuras());
    
  };

  useIonViewWillEnter(() => {
      loadSurahs();
    });

    useEffect(() => {
      setFilteredSurahs(
        surahs.filter(
              surah=>{
                  return surah.name.toLowerCase().includes(searchText.toLowerCase());
                  
              }
          )
      )
  }, [searchText,surahs]);


    const surahsListItems = filteredSurahs.map((surah) => (
      <IonItem key={surah.id} routerLink={`/Quran${match.params.type}/${surah.id}`} lines="none" detail={false} color="light">
              <IonAvatar className={surah.color} >
              
              <IonLabel className="ion-padding-top">
                    <h1>{surah.id}</h1>
                </IonLabel>
              
                
              </IonAvatar>
              <IonLabel className="ion-padding-start">
              <h4 className="name">{surah.name}</h4>
          <h6>{surah.revelationCity} {surah.numberOfAyah} ajeta</h6>
                
              </IonLabel>
              <IonLabel className="ion-text-right"><h3 className="arabic">{surah.arabic}</h3></IonLabel>
              
              
            </IonItem>
    ));

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonSearchbar
            color="light"
            className="ion-padding"
            placeholder="Traži"
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>

          <IonList className="ion-padding">{surahsListItems}</IonList>
        </IonContent>
      </IonPage>
    );

}