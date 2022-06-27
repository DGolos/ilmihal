import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { translationService } from "../services/TranslationService";
import {MenuButton,MenuItem} from "../components";
import useTranslation from "../hooks/useTranslation";

const MainCategoryPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState(1);
  const {translate}=useTranslation();

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

  const setSixth = () => {
    setActiveButton(6);
  };

  return (
    <IonPage>
      <IonContent className="bg-image-standard">
        <div style={{ margin: "10px" }}>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
              <MenuButton label={translate("label-button-quran")} color="DarkBrown" isActive={activeButton===1} onClick={setFirst}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label={translate("label-button-prayer")} color="DarkBrown"  isActive={activeButton===2} onClick={setSecond}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label={translate("label-button-faith")} color="DarkBrown"  isActive={activeButton===3} onClick={setThird}/>
                
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="4">
              <MenuButton label={translate("label-button-dhikr")} color="DarkBrown"  isActive={activeButton===4} onClick={setFourth}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label={translate("label-button-messanger")} color="DarkBrown"  isActive={activeButton===5} onClick={setFifth}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label={translate("label-button-homeland")} color="DarkBrown"  isActive={activeButton===6} onClick={setSixth}/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div hidden={activeButton !== 1}>
          <IonGrid>
            <IonRow>
              <IonCol
                size="6">
                  <MenuItem 
                    title={translate("label-book3-lesson1-title")} 
                    description={translate("label-book3-lesson1-title-description")} 
                    icon="/assets/images/sound.png" 
                    link="/tabs/Quran/Reader"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson2-title")} 
                    description={translate("label-book3-lesson2-title-description")} 
                    icon="/assets/images/book.png" 
                    link="/tabs/SliderLessonPage/3/3"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson3-title")} 
                    description={translate("label-book4-lesson3-title")} 
                    icon="/assets/images/Revelation.png" 
                    link="/tabs/SliderLessonPage/3/3"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
                 <MenuItem 
                    title={translate("label-book3-lesson4-title")} 
                    description={translate("label-book3-lesson4-title-description")} 
                    icon="/assets/images/ChosenVerses.png" 
                    link="/tabs/SliderLessonPage/3/4"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow hidden={translationService.isNorwegian() === true}>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson5-title")} 
                    description={translate("label-book3-lesson5-title-description")} 
                    icon="/assets/images/ChosenVerses.png" 
                    link="/tabs/ChosenVerses"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book3-lesson6-title")} 
                    description={translate("label-book3-lesson6-title-description")} 
                    icon="/assets/images/ChosenVerses.png" 
                    link="/tabs/SliderLessonPage/3/6"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div hidden={activeButton !== 2}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-prayer-voluntary-prayers")} 
                    description={translate("label-prayer-voluntary-prayers-description")} 
                    icon="/assets/images/Prayers.png" 
                    link="/tabs/VoluntaryPrayersPage"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-prayer-wudhu")} 
                    description={translate("label-prayer-wudhu-description")} 
                    icon="/assets/images/Wudhu.png" 
                    link="/tabs/WudhuPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-prayer-ghusl")} 
                    description={translate("label-prayer-ghusl-description")} 
                    icon="/assets/images/Gusl.png" 
                    link="StandardLessonPage/2/8"
                    color="Burgundy"/>
               
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div hidden={activeButton !== 3}>
          <IonGrid>
            <IonRow>
            
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book1-lesson32-title")} 
                    description={translate("label-book1-lesson32-description")} 
                    icon="/assets/images/Fasting.png" 
                    link="/tabs/StandardLessonPage/1/32"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book1-lesson33-title")} 
                    description={translate("label-book1-lesson33-description")}
                    icon="/assets/images/Charity.png" 
                    link="/tabs/StandardLessonPage/1/33"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-book1-lesson34-title")} 
                    description={translate("label-book1-lesson34-description")}
                    icon="/assets/images/Kaba.png" 
                    link="/tabs/HajjDefinitionPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div hidden={activeButton !== 4}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-dhikr-dua")} 
                    description={translate("label-dhikr-dua-description")} 
                    icon="/assets/images/Dua.png" 
                    link="/tabs/SupplicationMainPage"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-dhikr-tasbih")} 
                    description={translate("label-dhikr-tasbih-description")} 
                    icon="/assets/images/Tasbih.png" 
                    link="/tabs/DhikrMainPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-dhikr-shahadah")} 
                    description={translate("label-dhikr-shahadah-description")} 
                    icon="/assets/images/Shahadah.png" 
                    link="/tabs/SegmentLessonPage/1/2"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div hidden={activeButton !== 5}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-messanger-sirah")} 
                    description={translate("label-messanger-sirah-description")} 
                    icon="/assets/images/History.png" 
                    link="/tabs/SirahPage"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-messanger-hadith")} 
                    description={translate("label-messanger-hadith-description")} 
                    icon="/assets/images/Hadith.png" 
                    link="/tabs/HadeethPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-messanger-companions")} 
                    description={translate("label-messanger-companions-description")} 
                    icon="/assets/images/Ashabi.png" 
                    link="/tabs/CompanionsPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div hidden={activeButton !== 6}>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-homeland-scholars")} 
                    description={translate("label-homeland-scholars-description")} 
                    icon="/assets/images/IslamHistory.png" 
                    link="/tabs/BosnianScholarsPage"
                    color="Burgundy"/>
                
              </IonCol>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-homeland-country")} 
                    description={translate("label-homeland-country-description")} 
                    icon="/assets/images/BosnianHistory.png" 
                    link="/tabs/BosniaPage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem 
                    title={translate("label-homeland-culture")} 
                    description={translate("label-homeland-culture-description")} 
                    icon="/assets/images/BosnianPeople.png" 
                    link="/tabs/BosnianCulturePage"
                    color="Burgundy"/>
                
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MainCategoryPage;
