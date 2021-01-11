import { RouteComponentProps } from "react-router";
import {IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRange, IonRow, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import React, { useEffect, useRef, useState } from "react";
import './QuranPlayerPage.css';
import { pause, play } from "ionicons/icons";
import { Surah } from "../objects/surah";
import { dataService } from "../services/dataService";
import {Howl} from 'howler';
import ShowMore from 'react-show-more';

export const QuranPlayerPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [isPlaying,setIsPlaying]=useState(false);
    const [currentSurah,setCurrentSurah]=useState<Surah>();
    const [isLoaded,setIsLoaded]=useState(false);
    const playerRef=useRef(new Howl({src:[""]}));
    const [duration,setDuration]=useState(0);
    const [showMore,setShowMore]=useState(false);

    const loadSurah =function (){
        setCurrentSurah(dataService.getSurahById(+(match.params.id)));
        
      };
    
      useIonViewWillEnter(() => {
          loadSurah();
        });

       

    const toglePlayPause=()=>{
        if(isLoaded===false){
            playerRef.current=new Howl({
                src:`/assets/audio/Mishary/${currentSurah?.id}.mp3`,
                preload:false
                }
            )
            playerRef.current.load();
            setDuration(playerRef.current.duration());
            setIsLoaded(true);
            
            
        }
        if(isPlaying){
            playerRef.current.pause();
            setIsPlaying(false);
        }
        else{
            playerRef.current.play();
            setIsPlaying(true);
        }

    }

    const trimString=(text:string,length:number)=>{
        return text.length>length?text.substr(0,length)+'...':text;
    }

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="burgundy">
          <IonRow>
            <IonCol size="4">
            <IonButton color="oker" shape="round" expand="full">
                <IonLabel color="light" className="ion-text-center">
                  Ucaci
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>


       
          <IonCard className="surah" color="burgundy">
            <div className="overlay">
              <img className="mask" src="./assets/images/quran-page.jpg" />
            </div>

            <div>
              <h6 className="note ion-no-padding ion-text-center">
                {currentSurah?.name}
              </h6>
            </div>
            <div>
              <h6 className="arabic ion-no-padding ion-text-center">
                {currentSurah?.arabic}
              </h6>
            </div>
          </IonCard>
          <div>
            <IonItem color="light" className="surah">
              <ShowMore lines={5} more="Više" less="Manje" anchorClass="">
                {currentSurah?.description}
              </ShowMore>
            </IonItem>
          </div>
          <div className="ion-padding">
            <IonItem className="reciter">
              <IonGrid className="list-grid ">
                <IonRow className="ion-no-padding">
                  <IonCol size="3">
                    <IonAvatar>
                      <img
                        src="/assets/images/Mishary.jpg"
                        
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="9">
                    <IonRow>
                      <h6 className="list-item-header">
                        <IonLabel>
                            Mishary Al Alfasy
                        </IonLabel>
                      </h6>
                    </IonRow>

                    <IonRow>
                      <IonNote className="list-item-note">
                        On je je sejh i Kuvajta
                      </IonNote>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </IonContent>
        <IonFooter className="ion-no-border">
          <IonToolbar color="burgundy" className="ion-text-center">
            <IonRow>
              <IonCol size="12">
                <IonRange
                  min={0}
                  max={200}
                  color="oker"
                  className="ion-padding"
                >
                  <IonLabel className="progress" slot="start">
                    0:00
                  </IonLabel>
                  <IonLabel className="progress" slot="end">
                    {duration}
                  </IonLabel>
                </IonRange>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonAvatar
                  className="play"
                  onClick={() => {
                    toglePlayPause();
                  }}
                >
                  <IonIcon
                    className="ion-padding-top"
                    size="large"
                    icon={isPlaying ? pause : play}
                  />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
}