import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { MenuButton, MenuItem } from "../../components";
import useTranslation from "../../hooks/useTranslation";

export const VoluntaryPrayersPage: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const {translate}=useTranslation();
  const setFirst = () => {
    setCurrent(1);
  };

  const setSecond = () => {
    setCurrent(2);
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="razimic" defaultHref="/tabs/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: "20px" }}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuButton label={translate("label-header-communal-prayer")} color="DarkBrown" isActive={current===1} onClick={setFirst}/>
                
              </IonCol>
              <IonCol size="6">
              <MenuButton label={translate("label-header-individual-prayer")} color="DarkBrown" isActive={current===2} onClick={setSecond}/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div hidden={current !== 1}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book2-lesson14-title")} 
                    description={translate("label-book2-lesson14-title-description")} 
                    icon="/assets/images/dhuhr.png" 
                    link="/tabs/JummahPrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book2-lesson11-title")} 
                    description={translate("label-book2-lesson11-title-description")} 
                    icon="/assets/images/fajr.png" 
                    link="/tabs/EidPrayerPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book2-lesson13-title")} 
                    description={translate("label-book2-lesson13-title-description")} 
                    icon="/assets/images/isha.png" 
                    link="/tabs/TarawihPrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book2-lesson12-title")} 
                    description={translate("label-book2-lesson12-title-description")} 
                    icon="/assets/images/asr.png" 
                    link="/tabs/FuneralPrayerPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </div>
        <div
          
          hidden={current !== 2}
        >
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson9-title")} 
                    description={translate("label-book3-lesson9-description")} 
                    icon="/assets/images/isha.png" 
                    link="/tabs/NightPrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson10-title")} 
                    description={translate("label-book3-lesson10-description")} 
                    icon="/assets/images/fajr.png" 
                    link="/tabs/MorningPrayerPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson11-title")} 
                    description={translate("label-book3-lesson11-description")} 
                    icon="/assets/images/asr.png" 
                    link="/tabs/GuidancePrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
                
              </IonCol>
            </IonRow>
          </IonGrid>
            
          
         
        </div>
      </IonContent>
    </IonPage>
  );
};
