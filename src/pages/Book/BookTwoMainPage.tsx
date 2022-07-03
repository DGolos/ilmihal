import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import {MenuButton,MenuItem} from "../../components";
import useTranslation from "../../hooks/useTranslation";


export const BookTwoMainPage: React.FC = () => {
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

  const setSixth = () => {
    setActiveButton(6);
  };
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/tabs/MainBookPage" />
          </IonButtons>
          <IonTitle color="burgundy" style={{fontWeight:"bold"}}>
            {translate("label-book-two-title")}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <div style={{ margin: "10px" }}>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
              <MenuButton label="1-7" isActive={activeButton===1} color="Burgundy" onClick={setFirst}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="8-10" isActive={activeButton===2} color="Burgundy" onClick={setSecond}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="11-14" isActive={activeButton===3} color="Burgundy" onClick={setThird}/>
                
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="4">
              <MenuButton label="15-20" isActive={activeButton===4} color="Burgundy" onClick={setFourth}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="21-27" isActive={activeButton===5} color="Burgundy" onClick={setFifth}/>
                
              </IonCol>
              <IonCol size="4">
              <MenuButton label="28-30" isActive={activeButton===6} color="Burgundy" onClick={setSixth}/>
                
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
                    title={translate("label-book2-lesson1-title")} 
                    description={translate("label-book2-lesson1-description")} 
                    link="/tabs/StandardLessonPage/2/1"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="2"
                    title={translate("label-book2-lesson2-title")} 
                    description={translate("label-book2-lesson2-description")} 
                    link="/tabs/StandardLessonPage/2/2"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="3"
                    title={translate("label-book2-lesson3-title")} 
                    description={translate("label-book2-lesson3-description")} 
                    link="/tabs/StandardLessonPage/2/3"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="4"
                    title={translate("label-book2-lesson4-title")} 
                    description={translate("label-book2-lesson4-description")} 
                    link="/tabs/StandardLessonPage/2/4"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="5"
                    title={translate("label-book2-lesson5-title")} 
                    description={translate("label-book2-lesson5-description")} 
                    link="/tabs/StandardLessonPage/2/5"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="6"
                    title={translate("label-book2-lesson6-title")} 
                    description={translate("label-book2-lesson6-description")} 
                    link="/tabs/StandardLessonPage/2/6"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="7"
                    title={translate("label-book2-lesson7-title")} 
                    description={translate("label-book2-lesson7-description")} 
                    link="/tabs/StandardLessonPage/2/7"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
            
          </IonGrid>
        </div>
        <div id="second" hidden={activeButton !== 2} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="8"
                    title={translate("label-book2-lesson8-title")} 
                    description={translate("label-book2-lesson8-description")} 
                    link="/tabs/StandardLessonPage/2/8"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="9"
                    title={translate("label-book2-lesson9-title")} 
                    description={translate("label-book2-lesson9-description")} 
                    link="/tabs/StandardLessonPage/2/9"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="10"
                    title={translate("label-book2-lesson10-title")} 
                    description={translate("label-book2-lesson10-description")} 
                    link="/tabs/StandardLessonPage/2/10"
                    color="Burgundy"/>
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
                    title={translate("label-book2-lesson11-title")} 
                    description={translate("label-book2-lesson11-description")} 
                    link="/tabs/EidPrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="12"
                    title={translate("label-book2-lesson12-title")} 
                    description={translate("label-book2-lesson12-description")} 
                    link="/tabs/FuneralPrayerPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="13"
                    title={translate("label-book2-lesson13-title")} 
                    description={translate("label-book2-lesson13-description")} 
                    link="/tabs/TarawihPrayerPage"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="14"
                    title={translate("label-book2-lesson14-title")} 
                    description={translate("label-book2-lesson14-description")} 
                    link="/tabs/JummahPrayerPage"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="fourth" hidden={activeButton !== 4} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="15"
                    title={translate("label-book2-lesson15-title")} 
                    description={translate("label-book2-lesson15-description")} 
                    link="/tabs/StandardLessonPage/2/15"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="16"
                    title={translate("label-book2-lesson16-title")} 
                    description={translate("label-book2-lesson16-description")} 
                    link="/tabs/StandardLessonPage/2/16"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="17"
                    title={translate("label-book2-lesson17-title")} 
                    description={translate("label-book2-lesson17-description")} 
                    link="/tabs/StandardLessonPage/2/17"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="18"
                    title={translate("label-book2-lesson18-title")} 
                    description={translate("label-book2-lesson18-description")} 
                    link="/tabs/StandardLessonPage/2/18"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <MenuItem
                    label="19"
                    title={translate("label-book2-lesson19-title")} 
                    description={translate("label-book2-lesson19-description")} 
                    link="/tabs/StandardLessonPage/2/19"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="20"
                    title={translate("label-book2-lesson20-title")} 
                    description={translate("label-book2-lesson20-description")} 
                    link="/tabs/StandardLessonPage/2/20"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div id="fifth" hidden={activeButton !== 5} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="21"
                    title={translate("label-book2-lesson21-title")} 
                    description={translate("label-book2-lesson21-description")} 
                    link="/tabs/StandardLessonPage/2/21"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="22"
                    title={translate("label-book2-lesson22-title")} 
                    description={translate("label-book2-lesson22-description")} 
                    link="/tabs/StandardLessonPage/2/22"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="23"
                    title={translate("label-book2-lesson23-title")} 
                    description={translate("label-book2-lesson23-description")} 
                    link="/tabs/StandardLessonPage/2/23"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="24"
                    title={translate("label-book2-lesson24-title")} 
                    description={translate("label-book2-lesson24-description")} 
                    link="/tabs/StandardLessonPage/2/24"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="25"
                    title={translate("label-book2-lesson25-title")} 
                    description={translate("label-book2-lesson25-description")} 
                    link="/tabs/StandardLessonPage/2/25"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="26"
                    title={translate("label-book2-lesson26-title")} 
                    description={translate("label-book2-lesson26-description")} 
                    link="/tabs/StandardLessonPage/2/26"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="27"
                    title={translate("label-book2-lesson27-title")} 
                    description={translate("label-book2-lesson27-description")} 
                    link="/tabs/StandardLessonPage/2/27"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>

        <div id="sixth" hidden={activeButton !== 6} className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="28"
                    title={translate("label-book2-lesson28-title")} 
                    description={translate("label-book2-lesson28-description")} 
                    link="/tabs/SegmentLessonPage/2/28"
                    color="Burgundy"/>
              </IonCol>
              <IonCol size="6">
              <MenuItem
                    label="29"
                    title={translate("label-book2-lesson29-title")} 
                    description={translate("label-book2-lesson29-description")} 
                    link="/tabs/SegmentLessonPage/2/29"
                    color="Burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
              <MenuItem
                    label="30"
                    title={translate("label-book2-lesson30-title")} 
                    description={translate("label-book2-lesson30-description")} 
                    link="/tabs/SegmentLessonPage/2/30"
                    color="Burgundy"/>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        </IonContent>
      </IonPage>
    );
}

