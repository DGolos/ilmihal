import { RouteComponentProps } from "react-router";
import {IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRange, IonRow, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import React, { useEffect, useRef, useState } from "react";
import './QuranPlayerPage.css';
import { pause, play } from "ionicons/icons";
import { Surah } from "../../../objects/surah";
import { dataService } from "../../../services/dataService";
import {Howl} from 'howler';
import ShowMore from 'react-show-more';
import { storageService } from "../../../services/StorageService";

export const QuranPlayerPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [isPlaying,setIsPlaying]=useState(false);
    const [currentSurah,setCurrentSurah]=useState<Surah>();
    const [currentReciter,setCurrentReciter]=useState('');
    const [isLoaded,setIsLoaded]=useState(false);
    const playerRef=useRef(new Howl({src:[""]}));
    const [elapsedTime,setElapsedTime]=useState(0);
    const[progress,setProgress]=useState(0);
    const [showModal,setShowModal]=useState(false);
    

    const loadSurah =function (){
        setCurrentSurah(dataService.getSurahById(+(match.params.id)));
        
        
      };
    
      useIonViewWillEnter(() => {
           loadSurah();
        });

     const updateProgress=()=>{
         setElapsedTime(elapsedTime=>elapsedTime+1);
         setProgress((+playerRef.current.seek()/playerRef.current.duration())*100);
         let timerId=setTimeout(()=>{
          if(+playerRef.current.seek()>playerRef.current.duration()){
            console.log("clear")
            clearTimeout(timerId);
          }else{
            updateProgress();
          }
          
         },1000);
     }

     

    const toglePlayPause=()=>{
      
        if(isLoaded===false){

          const onEnd=()=>{
            setIsPlaying(false);
           
          }

          const onLoad=()=>{
            setIsLoaded(true);
            
          }

          const onPlay=()=>{
            updateProgress();
          }
           
            playerRef.current=new Howl({
                src:`/assets/audio/Mishary/${currentSurah?.id}.mp3`,
                preload:true,
                html5:true,
                onend:onEnd,
                onload:onLoad,
                onplay:onPlay,
                format:["mp3"]
                }
            )
            

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

    const formatTime=(duration:number):string=>{
        let hours=Math.floor(duration/3600);
        let minutes=Math.floor((duration/3600)/60);
        let seconds=Math.floor(duration%3600);

        let ret="";

        if(hours>0){
          ret+=""+hours+":"+(minutes<10?"0":"");
        }

        ret+=""+minutes+":"+(seconds<10?"0":"");
        ret+=""+seconds;

        return ret;
    }

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/Quran/Player" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="burgundy" fullscreen>
          <IonRow style={{ paddingLeft: "10px", paddingBottom: "6px" }}>
            <IonCol size="4">
              <IonButton color="oker" shape="round" expand="full">
                <IonLabel color="light" className="ion-text-center button">
                  Učači
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
          <div className="note" color="burgundy">
            <IonLabel>{currentSurah?.description}</IonLabel>
            <hr></hr>
            <ShowMore lines={3} more="Više" less="Manje" anchorClass="">
              {currentSurah?.note}
            </ShowMore>
          </div>
          <div className="ion-padding">
            <IonItem className="reciter">
              <IonGrid>
                <IonRow
                  className="ion-no-padding"
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                >
                  <IonCol size="3" className="ion-no-padding">
                    <IonAvatar>
                      <img src="/assets/images/Mishary.jpg" />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="9" className="ion-no-padding">
                    <IonRow>
                      <h6 className="reciter">
                        <IonLabel>Mishary Al Alfasy</IonLabel>
                      </h6>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </IonContent>
        <IonFooter className="ion-no-border">
          <IonToolbar color="burgundy" className="ion-text-center player">
            <IonRow>
              <IonRange
                value={progress}
                min={0}
                max={100}
                color="oker"
                className="ion-padding"
              >
                <IonLabel slot="start" className="progress ion-no-padding">
                {formatTime(elapsedTime)}
              </IonLabel>
              <IonLabel slot="end" className="progress">
                {formatTime(playerRef.current.duration())}
              </IonLabel>
              </IonRange>
              
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonAvatar
                  className="play ion-text-center"
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