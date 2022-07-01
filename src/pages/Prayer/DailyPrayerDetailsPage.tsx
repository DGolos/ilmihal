import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
  useIonViewDidLeave,
} from "@ionic/react";
import { Howl } from "howler";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import FirstRakah from "../../components/prayer/FirstRakah";
import FourthRakah from "../../components/prayer/FourthRakah";
import Qunut from "../../components/prayer/Qunut";
import SecondRakah from "../../components/prayer/SecondRakah";
import Tashashud from "../../components/prayer/Tashahud";
import ThirdRakah from "../../components/prayer/ThirdRakah";
import { Progress } from "../../components/Progress";
import {
  dailyPrayers,
  DailyPrayerType,
  DailyPrayer,
} from "../../data/PrayerDefinitions";
import useTranslation from "../../hooks/useTranslation";

export const DailyPrayerDetailsPage: React.FC<
  RouteComponentProps<{ prayerId: string; prayerTypeId: string }>
> = ({ match }) => {
  const [currentPrayer, setCurrentPrayer] = useState<DailyPrayer>({
    id:5,
    name:"isha",
    translatedName:"label-book1-lesson23-title",
    description:"label-book1-lesson23-description",
    background:"isha",
    color:"purple",
    types:[
        {
            type:"sunnah",
            numberOfRakah:4,
            name:"label-prayer-isha-sunnah",
            extended:true,
            translatedType:"label-prayer-sunnah",
            intention:"label-isha-sunnah-nijjah"
        },
        {
            type:"fardh",
            numberOfRakah:4,
            name:"label-prayer-isha-fardh",
            extended:false,
            translatedType:"label-prayer-fardh",
            intention:"label-isha-fardh-nijjah"
        },
        {
            type:"sunsunnah",
            numberOfRakah:2,
            name:"label-prayer-isha-sunsunnah",
            extended:false,
            translatedType:"label-prayer-sunsunnah",
            intention:"label-isha-sunsunnah-nijjah"
        },
        {
            type:"witr",
            numberOfRakah:3,
            name:"label-prayer-witr",
            extended:true,
            translatedType:"label-prayer-witr",
            intention:"label-witr-nijjah"
        }
    ]
});
  const [prayerType, setPrayerType] = useState<DailyPrayerType>(
    {
        type:"witr",
        numberOfRakah:3,
        name:"label-prayer-witr",
        extended:true,
        translatedType:"label-prayer-witr",
        intention:"label-witr-nijjah"
    });
  const { translate } = useTranslation();
  const [isPlaying,setIsPlaying]=useState(false);
  const [currentAudio,setCurrentAudio]=useState("");
  const playerRef = useRef(new Howl({ src: [""] }));

  /*useEffect(() => {
    
    setCurrentPrayer(
      dailyPrayers.find((prayer) => prayer.id === +match.params.prayerId)
    );
        
    setPrayerType(
        currentPrayer?.types.find((type) => type.type === match.params.prayerTypeId)
    );
    
    
  }, [match.params.prayerId, match.params.prayerTypeId]);*/

  useIonViewDidLeave(() => {
    playerRef.current.unload();
  });

  const stopPlaying = () => {
    playerRef.current.unload();
    setCurrentAudio("");
  }

  const play=(file:string)=>{
    const onEnd = () => {
      setCurrentAudio("");
    };
    
   playerRef.current = new Howl({
        src: `/assets/audio/Lessons/${file}.mp3`,
        preload: true,
        html5: true,
        format: ["mp3"],
        onend: onEnd
      });
      setCurrentAudio(file);
   
    setIsPlaying(true);
    playerRef.current.play();
  }

  const toglePlayPause = (file: string) => {

    if(isPlaying){
      if(currentAudio===file){
        playerRef.current.pause();
        setIsPlaying(false);
      }
      else{
        playerRef.current.unload();
        play(file);
      }
    }
    else{
      if(currentAudio===file){
        playerRef.current.play();
        setIsPlaying(true);
      }
      else{
        play(file);
      }
      
    }
 
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color={currentPrayer?.color} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}>
          <IonGrid>
            <IonRow style={{ marginTop: 5 }}>
              <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">{translate(prayerType?.name)}</h1>
                </IonText>
              </IonCol>
              <IonCol size="5" className="ion-text-right">
                <IonText>
                  <h2 className="black">
                    {prayerType?.numberOfRakah}{" "}
                    {translate("label-prayer-rakah")}
                  </h2>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div>
        <IonSlides onIonSlideDidChange={() => {stopPlaying();}}>
        <IonSlide>
        <IonItem
                key="1"
                detail={false}
                className="lesson-note"
                lines="none"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color={currentPrayer.color} style={{ marginLeft: "0px" }}>
                        {translate("label-before-prayer")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={prayerType.numberOfRakah}
                        color={currentPrayer.color}
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="black">
                          {translate("label-nijjah-header")}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                        {translate("label-nijjah-definition")}
                        </h2>
                        
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                        {translate(
                          prayerType.intention
                        )}
                        </h2>
                        
                      </IonText>
                      
                    </IonCol>
                  </IonRow>
                </IonGrid>
         </IonItem>
         </IonSlide>
         
        <FirstRakah color={currentPrayer.color} prayerLength={prayerType.numberOfRakah} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>

        <SecondRakah color={currentPrayer.color}prayerLength={prayerType.numberOfRakah} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>
        <Tashashud
              first={prayerType.numberOfRakah>2 ? true : false}
              color={currentPrayer.color}
              prayerLength={prayerType.numberOfRakah}
              salawat={prayerType.extended}
              currentAudio={currentAudio} 
              togglePlayPause={toglePlayPause}
            />

            {prayerType.numberOfRakah>2 &&
            
             <ThirdRakah
                type={prayerType.type}
                showSubhaneke={prayerType.extended}
                color={currentPrayer.color}
                prayerLength={prayerType.numberOfRakah}
                currentAudio={currentAudio} togglePlayPause={toglePlayPause}
              />
            }
            {
                prayerType.type==="witr" &&
                <Qunut color={currentPrayer.color} prayerLength={prayerType.numberOfRakah} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>
            }
            {prayerType.numberOfRakah===3 &&
                <Tashashud
                first={false}
                color={currentPrayer.color}
                prayerLength={prayerType.numberOfRakah}
                salawat={false}
                currentAudio={currentAudio}
                togglePlayPause={toglePlayPause}
              />

            }
            {prayerType.numberOfRakah>3 &&
               <FourthRakah
               type={prayerType.name}
               color={currentPrayer.color}
               prayerLength={prayerType.numberOfRakah}
               currentAudio={currentAudio} togglePlayPause={toglePlayPause}
             />

            }
            {prayerType.numberOfRakah===4 &&
                <Tashashud
                first={false}
                color={currentPrayer.color}
                prayerLength={prayerType.numberOfRakah}
                salawat={false}
                currentAudio={currentAudio}
                togglePlayPause={toglePlayPause}
              />

            }
        </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};
