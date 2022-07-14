import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import {MenuButton,MenuItem} from "../..//components";
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useTranslation from "../../hooks/useTranslation";


export const BookOneMainPage: React.FC = () => {
  const {translate}=useTranslation();
  const [activeButton, setActiveButton] = useState(1);

  const setFirst = () => {
    setActiveButton(1);
  };

  const setSecond = () => {
    setActiveButton(2);
  };

  const setThird = () => {
    setActiveButton(3);
  };

  const setFourth = () => {
    setActiveButton(4);
  };

  const setFifth = () => {
    setActiveButton(5);
  };

  return (
    <IonPage>
      <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
      <div >
          <IonGrid>
            <IonRow>
              <IonCol size="4">
              <MenuButton label="1-6" isActive={activeButton===1} color="Purple" onClick={setFirst}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="7-10" isActive={activeButton===2} color="Purple" onClick={setSecond}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="11-12" isActive={activeButton===3} color="Purple" onClick={setThird}/>
                
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="4">
              <MenuButton label="13-18" isActive={activeButton===4} color="Purple" onClick={setFourth}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="19-24" isActive={activeButton===5} color="Purple" onClick={setFifth}/>
                
              </IonCol>
             
            </IonRow>
          </IonGrid>
        </div>
   
        <div id="first" hidden={activeButton !== 1} className="ion-no-padding">
          <IonGrid>
            <IonRow>
            
              <IonCol size="6">
              <MenuItem
                    label="1"
                    title={translate("label-book1-lesson1-title")} 
                    description={translate("label-book1-lesson1-description")} 
                    link="/tabs/SegmentLessonPage/1/1"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="2"
                    title={translate("label-book1-lesson2-title")} 
                    description={translate("label-book1-lesson2-description")} 
                    link="/tabs/SegmentLessonPage/1/2"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="3"
                    title={translate("label-book1-lesson3-title")} 
                    description={translate("label-book1-lesson3-description")} 
                    link="/tabs/StandardLessonPage/1/3"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="4"
                    title={translate("label-book1-lesson4-title")} 
                    description={translate("label-book1-lesson4-description")} 
                    link="/tabs/SegmentLessonPage/1/4"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="5"
                    title={translate("label-book1-lesson5-title")} 
                    description={translate("label-book1-lesson5-description")} 
                    link="/tabs/SegmentLessonPage/1/5"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="6"
                    title={translate("label-book1-lesson6-title")} 
                    description={translate("label-book1-lesson6-description")} 
                    link="/tabs/StandardLessonPage/1/6"
                    color="Purple"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="second" hidden={activeButton !== 2} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="7"
                    title={translate("label-book1-lesson7-title")} 
                    description={translate("label-book1-lesson7-description")} 
                    link="/tabs/SegmentLessonPage/1/7"
                    color="Purple"/>
              </IonCol>
              
              <IonCol size="6">
              <MenuItem
                    label="8"
                    title={translate("label-book1-lesson8-title")} 
                    description={translate("label-book1-lesson8-description")} 
                    link="/tabs/SegmentLessonPage/1/8"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="9"
                    title={translate("label-book1-lesson9-title")} 
                    description={translate("label-book1-lesson9-description")} 
                    link="/tabs/SegmentLessonPage/1/9"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="10"
                    title={translate("label-book1-lesson10-title")} 
                    description={translate("label-book1-lesson10-description")} 
                    link="/tabs/SegmentLessonPage/1/10"
                    color="Purple"/>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        
        <div id="third" hidden={activeButton !== 3} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="11"
                    title={translate("label-book1-lesson11-title")} 
                    description={translate("label-book1-lesson11-description")} 
                    link="/tabs/ImanMainPage"
                    color="Purple"/>
              </IonCol>

              <IonCol size="6">
              <MenuItem
                    label="12"
                    title={translate("label-book1-lesson12-title")} 
                    description={translate("label-book1-lesson12-description")} 
                    link="/tabs/IslamMainPage"
                    color="Purple"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        
        <div id="fourth" hidden={activeButton !== 4} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="13"
                    title={translate("label-book1-lesson13-title")} 
                    description={translate("label-book1-lesson13-description")} 
                    link="/tabs/WudhuPage"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="14"
                    title={translate("label-book1-lesson14-title")} 
                    description={translate("label-book1-lesson13-description")} 
                    link="/tabs/SegmentLessonPage/1/14"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="15"
                    title={translate("label-book1-lesson15-title")} 
                    description={translate("label-book1-lesson15-description")} 
                    link="/tabs/SegmentLessonPage/1/15"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="16"
                    title={translate("label-book1-lesson16-title")} 
                    description={translate("label-book1-lesson16-description")} 
                    link="/tabs/SegmentLessonPage/1/16"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="17"
                    title={translate("label-book1-lesson17-title")} 
                    description={translate("label-book1-lesson17-description")} 
                    link="/tabs/SegmentLessonPage/1/17"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="18"
                    title={translate("label-book1-lesson18-title")} 
                    description={translate("label-book1-lesson18-description")} 
                    link="/tabs/SegmentLessonPage/1/18"
                    color="Purple"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        
        <div className="ion-no-padding" id="fifth" hidden={activeButton !== 5}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="19"
                    title={translate("label-book1-lesson19-title")} 
                    description={translate("label-book1-lesson19-description")} 
                    link="/tabs/DailyPrayerDefinitionPage/1"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="20"
                    title={translate("label-book1-lesson20-title")} 
                    description={translate("label-book1-lesson20-description")} 
                    link="/tabs/DailyPrayerDefinitionPage/2"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="21"
                    title={translate("label-book1-lesson21-title")} 
                    description={translate("label-book1-lesson21-description")} 
                    link="/tabs/DailyPrayerDefinitionPage/3"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="22"
                    title={translate("label-book1-lesson22-title")} 
                    description={translate("label-book1-lesson22-description")} 
                    link="/tabs/DailyPrayerDefinitionPage/4"
                    color="Purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="23"
                    title={translate("label-book1-lesson23-title")} 
                    description={translate("label-book1-lesson23-description")} 
                    link="/tabs/DailyPrayerDefinitionPage/5"
                    color="Purple"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="24"
                    title={translate("label-book1-lesson24-title")} 
                    description={translate("label-book1-lesson24-description")} 
                    link="/tabs/DailyPrayerDhikrPage"
                    color="Purple"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};


