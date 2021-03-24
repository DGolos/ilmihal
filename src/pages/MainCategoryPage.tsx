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
              <IonButton color={current===1?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(1) }>
                <IonLabel color="light" className="ion-text-center">
                  {translationService.getLabel('label-header-quran')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===2?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(2) }>
                <IonLabel color="light" className="ion-text-center">
                {translationService.getLabel('label-header-prayer')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===3?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(3) }>
                <IonLabel color="light" className="ion-text-center">
                {translationService.getLabel('label-header-faith')}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonButton color={current===4?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(4) }>
                <IonLabel color="light" className="ion-text-center">
                {translationService.getLabel('label-header-dhikr')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===5?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(5) }>
                <IonLabel color="light" className="ion-text-center">
                {translationService.getLabel('label-header-muhammad')}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===6?"dark-brown":"brown"} expand="block" onClick={ () => setCurrent(6) }>
                <IonLabel color="light" className="ion-text-center">
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
                  routerLink={`/Quran/Reader`}
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
                        <h4 className="title">Čitaj </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'an</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 style={{fontSize:"12px"}}>
                      Čitaj odabrane sure iz Časnog Kur'ana.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/Quran/Player`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/Sound.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Slušaj </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'an</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 className="title">
                      Slušaj odabrane sure iz Časnog Kur'ana.
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
                  routerLink={`/QuranRevelationPage`}
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
                        <h4 className="title">Objava </h4>
                      </span>
                      <span>
                        <h4 className="title">Kur'ana</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 className="title">
                      Objava Kur'ana Muhammedu a.s.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/ChosenVerses`}
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
                    <h6 className="title">
                      Čitaj odabrane ajete iz Časnog Kur'ana.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              
            </IonRow>
            <IonRow>
              <IonCol size="6" style={{ marginTop: "0px", marginBottom: "0px" }}>
              <IonCard
                  routerLink={`/QuranTranslationPage`}
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
                    <h6 className="title">
                      Čitaj odabrane ajete iz Časnog Kur'ana.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6" style={{ marginTop: "0px", marginBottom: "0px" }}>
              <IonCard
                  routerLink={`/QuranRecitationPage`}
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
                    <h6 className="title">
                      Čitaj odabrane ajete iz Časnog Kur'ana.
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
                  routerLink={`/PrayerTimes`}
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
                    <h6 className="title">
                      Danasnja vaktija za zemlje iznad 50 paralele
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/VoluntaryPrayersPage`}
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
                    <h6 className="title">
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
                  routerLink={`/WudhuPage`}
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
                    <h6 className="title">
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
                  routerLink={`/StandardLessonPage/2/8`}
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
                    <h6 className="title">
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
                  routerLink={`/StandardLessonPage/1/30`}
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
                    <h6 className="title">
                      Osnove o ramazanskom postu
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/StandardLessonPage/1/31`}
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
                    <h6 className="title">
                      Osnove o davanju zekata
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
                  routerLink={`/HajjDefinitionPage`}
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
                    <h6 className="title">
                      Osnove o obavljanju hadžža
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
                  routerLink={`/UnderConstructionPage`}
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
                    <h6 className="title">
                      Odabrane dove koje upućujemo Allahu dž.š.
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/UnderConstructionPage`}
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
                    <h6 className="title">
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
                  routerLink={`/UnderConstructionPage`}
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
                    <h6 className="title">
                      Označavanje pripadnosti islamu
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol
                size="6"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                <IonCard
                  routerLink={`/BeautifulNames`}
                  color="light"
                  class="category"
                >
                  <IonRow className="ion-no-padding">
                    <img
                      src="/assets/images/99.png"
                      height="40px"
                      width="40px"
                    />

                    <IonLabel className="ion-padding-start ion-text-centered">
                      <span>
                        <h4 className="title">Allahova</h4>
                      </span>
                      <span>
                        <h4 className="title">imena</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 className="title">
                      Allahova najljepša imena
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
                  routerLink={`/SirahPage`}
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
                    <h6 className="title">
                    Život posljednjeg Allahovog poslanika
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/HadeethPage`}
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
                    <h6 className="title">
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
                  routerLink={`/CompanionsPage`}
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
                    <h6 className="title">
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
                  routerLink={`/BosnianScholarsPage`}
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
                    <h6 className="title">
                      Kratko o historiji islama
                    </h6>
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard
                  routerLink={`/BosniaPage`}
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
                        <h4 className="title">Domovina </h4>
                      </span>
                      
                      
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 className="title">
                    Kratko o historiji Bosne
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
                  routerLink={`/UnderConstructionPage`}
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
                        <h4 className="title">Poznati</h4>
                      </span>
                      <span>
                        <h4 className="title">Bosnjaci</h4>
                      </span>
                    </IonLabel>
                  </IonRow>
                  <IonRow>
                    <h6 className="title">
                    Kratko o znamenitim bošnjacima
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
