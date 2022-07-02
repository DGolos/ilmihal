import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToggle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { PrayerWatch } from "../../components/prayer/PrayerWatch";
import {
    dailyPrayers,
    DailyPrayerType,
    DailyPrayer,
  } from "../../data/PrayerDefinitions";
import useTranslation from "../../hooks/useTranslation";
import { translationService } from "../../services/TranslationService";

export const DailyPrayerWatchPage:React.FC<
RouteComponentProps<{ prayerId: string,prayerTypeId:string }>
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
            type:"sunnah",
            numberOfRakah:4,
            name:"label-prayer-isha-sunnah",
            extended:true,
            translatedType:"label-prayer-sunnah",
            intention:"label-isha-sunnah-nijjah"
        });
    
      const { translate } = useTranslation();
      const [isMan,setIsMan]=useState(true);
      const[length,setLength]=useState(0);

      useEffect(()=>{
        if(prayerType.numberOfRakah===2) setLength(16);
        else if(prayerType.numberOfRakah===3) setLength(23);
        if(prayerType.numberOfRakah===4 || prayerType.type==="witr") setLength(29);
      },[]);

      const toggleGender=()=>{
        setIsMan(previous=>!previous);
      }
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/IshaPrayerPage" />
            </IonButtons>
            <IonButtons slot="end">
              <IonText color="purple">
                {translationService.getLabel("label-man")}
              </IonText>
              <IonToggle
                onIonChange={() => toggleGender()}
                className="purple"
              />
              <IonText
                style={{ marginRight: "10px" }}
                color={currentPrayer.color}
              >
                {translate("label-woman")}
              </IonText>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}>
            <IonGrid>
              <IonRow style={{ marginTop: 5 }}>
                <IonCol size="7">
                  <IonText>
                    <h1 className="prayer-description">
                      {translate(prayerType?.name)}
                    </h1>
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
            <IonSlides>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  header="label-nijjah-header"
                  image={
                    isMan
                      ? "/assets/images/Beginning.png"
                      : "/assets/images/BeginningWoman.png"
                  }
                  current={1}
                  max={length}
                  description={prayerType.intention}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  header="label-prayer-tekbir"
                  image={
                    isMan
                      ? "/assets/images/Tekbir.png"
                      : "/assets/images/TekbirWoman.png"
                  }
                  current={2}
                  max={length}
                  description={"label-prayer-first-rakah-beginning-watch"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-qijam-header"
                  image={
                    isMan
                      ? "/assets/images/Qijam.png"
                      : "/assets/images/QijamWoman.png"
                  }
                  current={3}
                  max={length}
                  description={"label-prayer-first-rakah-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-ruku-header"
                  image={
                    isMan
                      ? "/assets/images/Ruku.png"
                      : "/assets/images/RukuWoman.png"
                  }
                  current={4}
                  max={length}
                  description="label-prayer-ruku-watch-description"
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-ruku-return--header"
                  image={
                    isMan
                      ? "/assets/images/Beginning.png"
                      : "/assets/images/BeginningWoman.png"
                  }
                  current={5}
                  max={length}
                  description={"label-prayer-ruku-return-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={6}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-between-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Tashashud.png"
                      : "/assets/images/TashashudWoman.png"
                  }
                  current={7}
                  max={length}
                  description={"label-prayer-between-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-first-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={8}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-qijam-header"
                  image={
                    isMan
                      ? "/assets/images/Qijam.png"
                      : "/assets/images/QijamWoman.png"
                  }
                  current={9}
                  max={length}
                  description={"label-prayer-second-rakah-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-ruku-header"
                  image={
                    isMan
                      ? "/assets/images/Ruku.png"
                      : "/assets/images/RukuWoman.png"
                  }
                  current={10}
                  max={length}
                  description="label-prayer-ruku-watch-description"
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-ruku-return--header"
                  image={
                    isMan
                      ? "/assets/images/Beginning.png"
                      : "/assets/images/BeginningWoman.png"
                  }
                  current={11}
                  max={length}
                  description={"label-prayer-ruku-return-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={12}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-between-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Tashashud.png"
                      : "/assets/images/TashashudWoman.png"
                  }
                  current={13}
                  max={length}
                  description={"label-prayer-between-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={14}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              {prayerType.numberOfRakah === 2 && (
                <>
                  <IonSlide>
                    <PrayerWatch
                      color={currentPrayer.color}
                      title="label-second-rakah-header"
                      header="label-prayer-end-header"
                      image={
                        isMan
                          ? "/assets/images/Tashashud.png"
                          : "/assets/images/TashashudWoman.png"
                      }
                      current={15}
                      max={length}
                      description={"label-prayer-end-watch-description"}
                    />
                  </IonSlide>
                  <IonSlide>
                  <PrayerWatch
                      color={currentPrayer.color}
                      title="label-second-rakah-header"
                      header="label-prayer-selam-header"
                      image={
                        isMan
                          ? "/assets/images/Selam.png"
                          : "/assets/images/SelamWoman.png"
                      }
                      current={16}
                      max={length}
                      description={"label-prayer-selam-watch-description"}
                    />
                  </IonSlide>
                </>
              )}
              {
                  prayerType.numberOfRakah>2 &&
                  <>
                  <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-second-rakah-header"
                  header="label-prayer-first-tashahud-header"
                  image={
                    isMan
                      ? "/assets/images/Tashashud.png"
                      : "/assets/images/TashashudWoman.png"
                  }
                  current={15}
                  max={length}
                  description={prayerType.extended? "label-prayer-first-tashahud-sunnah-description":"label-prayer-first-tashahud-description"}
                />
              </IonSlide>
                    <IonSlide>
                  <PrayerWatch
                      color={currentPrayer.color}
                      title="label-third-rakah-header"
                      header="label-prayer-qijam-header"
                      image={
                        isMan
                          ? "/assets/images/Qijam.png"
                          : "/assets/images/QijamWoman.png"
                      }
                      current={16}
                      max={length}
                      description={prayerType.extended?"label-prayer-first-rakah-description":(prayerType.type==="fardh"?"label-prayer-qijam-description-third-rakah":"label-prayer-second-rakah-description")}
                    />
                  </IonSlide>
                  </>
                  
              }
              {
                  prayerType.type==="witr" &&
                  <>
                  <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-tekbir"
                  image={
                    isMan
                      ? "/assets/images/Tekbir.png"
                      : "/assets/images/TekbirWoman.png"
                  }
                  current={17}
                  max={length}
                  description={"label-prayer-first-rakah-beginning-watch"}
                />
              </IonSlide>
              <IonSlide>
              <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-qunut-header"
                  image={
                    isMan
                      ? "/assets/images/Qijam.png"
                      : "/assets/images/QijamWoman.png"
                  }
                  current={18}
                  max={length}
                  description={"label-prayer-qunut-watch"}
                />
              </IonSlide>
                  </>
              }

              {
                  prayerType.numberOfRakah>2 &&
                  <>
                <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-ruku-header"
                  image={
                    isMan
                      ? "/assets/images/Ruku.png"
                      : "/assets/images/RukuWoman.png"
                  }
                  current={17}
                  max={length}
                  description="label-prayer-ruku-watch-description"
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-ruku-return--header"
                  image={
                    isMan
                      ? "/assets/images/Beginning.png"
                      : "/assets/images/BeginningWoman.png"
                  }
                  current={18}
                  max={length}
                  description={"label-prayer-ruku-return-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={19}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-between-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Tashashud.png"
                      : "/assets/images/TashashudWoman.png"
                  }
                  current={20}
                  max={length}
                  description={"label-prayer-between-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-third-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={21}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
                  
                  </>
                  
              }

              {
                  prayerType.numberOfRakah>3 &&
                  <>
                  <IonSlide>
                  <PrayerWatch
                      color={currentPrayer.color}
                      title="label-fourth-rakah-header"
                      header="label-prayer-qijam-header"
                      image={
                        isMan
                          ? "/assets/images/Qijam.png"
                          : "/assets/images/QijamWoman.png"
                      }
                      current={22}
                      max={length}
                      description={prayerType.extended?"label-prayer-first-rakah-description":(prayerType.type==="fardh"?"label-prayer-qijam-description-third-rakah":"label-prayer-second-rakah-description")}
                    />
                  </IonSlide>
                  <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-fourth-rakah-header"
                  header="label-prayer-ruku-header"
                  image={
                    isMan
                      ? "/assets/images/Ruku.png"
                      : "/assets/images/RukuWoman.png"
                  }
                  current={23}
                  max={length}
                  description="label-prayer-ruku-watch-description"
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-fourth-rakah-header"
                  header="label-prayer-ruku-return--header"
                  image={
                    isMan
                      ? "/assets/images/Beginning.png"
                      : "/assets/images/BeginningWoman.png"
                  }
                  current={24}
                  max={length}
                  description={"label-prayer-ruku-return-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-fourth-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={25}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-fourth-rakah-header"
                  header="label-prayer-between-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Tashashud.png"
                      : "/assets/images/TashashudWoman.png"
                  }
                  current={26}
                  max={length}
                  description={"label-prayer-between-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                <PrayerWatch
                  color={currentPrayer.color}
                  title="label-fourth-rakah-header"
                  header="label-prayer-sujud-header"
                  image={
                    isMan
                      ? "/assets/images/Sujud.png"
                      : "/assets/images/SujudWoman.png"
                  }
                  current={27}
                  max={length}
                  description={"label-prayer-sujud-watch-description"}
                />
              </IonSlide>
              <IonSlide>
                    <PrayerWatch
                      color={currentPrayer.color}
                      title="label-fourth-rakah-header"
                      header="label-prayer-end-header"
                      image={
                        isMan
                          ? "/assets/images/Tashashud.png"
                          : "/assets/images/TashashudWoman.png"
                      }
                      current={28}
                      max={length}
                      description={"label-prayer-end-watch-description"}
                    />
                  </IonSlide>
                  <IonSlide>
                  <PrayerWatch
                      color={currentPrayer.color}
                      title="label-fourth-rakah-header"
                      header="label-prayer-selam-header"
                      image={
                        isMan
                          ? "/assets/images/Selam.png"
                          : "/assets/images/SelamWoman.png"
                      }
                      current={29}
                      max={length}
                      description={"label-prayer-selam-watch-description"}
                    />
                  </IonSlide>
                  </>
              }
              
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}