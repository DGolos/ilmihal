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

const MainCategoryPage: React.FC = () => {
  const[current,setCurrent]=useState(1);
  return (
    <IonPage>
     
      <IonContent className="bg-image-standard">
        <div style={{marginTop:"50px"}}>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton className="no-shadow" color={current===1?"button":"brown"} expand="block" onClick={ () => setCurrent(1) }>
                <IonLabel color={current===1?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                  {translationService.getLabel('label-header-quran')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton className="no-shadow" color={current===2?"button":"brown"} expand="block" onClick={ () => setCurrent(2) }>
                <IonLabel color={current===2?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                {translationService.getLabel('label-header-prayer')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton className="no-shadow" color={current===3?"button":"brown"} expand="block" onClick={ () => setCurrent(3) }>
                <IonLabel color={current===3?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                {translationService.getLabel('label-header-faith')}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonButton className="no-shadow" color={current===4?"button":"brown"} expand="block" onClick={ () => setCurrent(4) }>
                <IonLabel color={current===4?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                {translationService.getLabel('label-header-dhikr')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton className="no-shadow" color={current===5?"button":"brown"} expand="block" onClick={ () => setCurrent(5) }>
                <IonLabel color={current===5?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                {translationService.getLabel('label-header-muhammad')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton hidden={translationService.isNorwegian()} className="no-shadow" color={current===6?"button":"brown"} expand="block" onClick={ () => setCurrent(6) }>
                <IonLabel color={current===6?"burgundy":"light"} className="ion-text-center" style={{fontWeight:"bold"}}>
                {translationService.getLabel('label-header-homeland')}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        </div>
        <div className="ion-no-padding" id="quran" hidden={current!==1}>
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
                
              >
                <IonCard
                  routerLink={`/tabs/Quran/Reader`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Book.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">{translationService.getLabel('label-read-quran')} </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'an</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    {translationService.getLabel('label-read-quran-description')}
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/QuranRevelationPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Revelation.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">{translationService.getLabel('label-quran-revelation')} </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'ana</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    {translationService.getLabel('label-quran-revelation-description')}
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol size="6" style={{ marginTop: "0px", marginBottom: "0px" }}>
              <IonCard
                  routerLink={`/tabs/QuranRecitationPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/ChosenVerses.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Učenje </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'ana</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Etiketa učenja Časnog Kur'ana
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/ChosenVerses`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/ChosenVerses.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Odabrani </h4>
                      </span>
                      <span>
                        <h4 className="title">ajeti</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Čitaj odabrane ajete iz Časnog Kur'ana.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol hidden={translationService.isNorwegian()} size="6" style={{ marginTop: "0px", marginBottom: "0px" }}>
              <IonCard
                  routerLink={`/tabs/QuranTranslationPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/ChosenVerses.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Prijevodi </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'ana</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Prijevodi Časnog Kur'ana na bosanski jezik
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-no-padding" id="prayer" hidden={current!==2}>
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/PrayerTimes`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/PrayerTimes.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Vakat</h4>
                      </span>
                      <span>
                        <h4 className="title">namazi</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Danasnja vaktija za zemlje iznad 50 paralele
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/tabs/VoluntaryPrayersPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Prayers.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Ostali </h4>
                      </span>
                      <span>
                        <h4 className="title">namazi</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Ostali namazi pored dnevnih vakata
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/WudhuPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Wudhu.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Abdest</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Kako se pravilno uzima abdest
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/StandardLessonPage/2/8`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Gusl.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Gusul</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Kako se pravilno uzima gusul
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>

        <div className="ion-no padding" hidden={current!==3}>
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/StandardLessonPage/1/30`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Fasting.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Ramazan</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Osnove o ramazanskom postu
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/tabs/StandardLessonPage/1/31`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Charity.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Zekat </h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Osnove o davanju zekata i sadake
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/HajjDefinitionPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Kaba.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Hadžž</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Osnove o obavljanju hadžža i umre
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
              
            </IonRow>
          </IonGrid>
        </div>

        <div className="ion-no-padding" hidden={current!==4}>
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/SupplicationMainPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Dua.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Dove </h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Odabrane dove koje upućujemo Allahu dž.š.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/tabs/DhikrMainPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Tasbih.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Tespih </h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Zikr koji činimo Allahu dž.š.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/SegmentLessonPage/1/2`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Shahadah.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Šehadet</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Označavanje pripadnosti islamu
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
              
            </IonRow>
          </IonGrid>
        </div>

        <div className="ion-no-padding" hidden={current!==5}>
          
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/SirahPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/History.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Sira </h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    Život posljednjeg Allahovog poslanika
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/tabs/HadeethPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Hadith.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">{translationService.getLabel('label-book3-lesson1-title')} </h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    Govor posljednjeg Allahovog poslanika
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/CompanionsPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Ashabi.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Ashabi</h4>
                      </span>
                      <span>
                        <h4 className="title"></h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Ashabi posljednjeg Allahovog poslanika.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        <div className="ion-no-padding" hidden={current!==6}> 
          
          <IonGrid>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/BosnianScholarsPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/IslamHistory.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Bošnjački</h4>
                      </span>
                      <span>
                        <h4 className="title">alimi</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Alimi koji su dali veliki doprinos islamu u Bosni
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/tabs/BosniaPage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/BosnianHistory.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Naša</h4>
                      </span>
                      <span>
                        <h4 className="title">zemlja </h4>
                      </span>
                      
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    Kratko o našoj domovini Bosni i Hercegovini
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow
              className="ion-no-padding"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/tabs/BosnianCulturePage`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/BosnianPeople.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Kultura</h4>
                      </span>
                      <span>
                        <h4 className="title">Bošnjaka</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                    Kratko o vrijednostima bošnjačke kulture i tradicije
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default MainCategoryPage;
