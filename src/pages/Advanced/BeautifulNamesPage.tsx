import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";


interface NamesCardProps {
  arabic: string;
  transcription: string;
  translation: string;
}

const NamesCard: React.FC<NamesCardProps> = ({
  arabic,
  transcription,
  translation,
}) => {
  return (
    <IonCard
      className="ion-text-center"
      color="light"
      style={{ marginRight: "0px" }}
    >
      <h3 style={{ fontSize: 24 }} className="arabic-ayah ion-no-padding">
        {arabic}{" "}
      </h3>
      <h6 style={{ fontStyle: "italic" }}>{transcription}</h6>
      <p className="quote-reference">{translation}</p>
    </IonCard>
  );
};
export const BeautifulNamesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="razimic" defaultHref="/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="razimic"
        >
          <IonCardTitle>
            <h1 className="lesson">Allahova imena</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>"On ima najljepša imena"</h3>
              <p className="quote-reference">Kur'an 59:24</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                Vjerodostoji hadisi prenose da svako ko nauči Allahovih 99 imena
                ima osigurano mjesto u džennetu.
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div>
          <IonSlides>
            <IonSlide>
              <div>
                <img style={{ height: 330 }} src="/assets/images/Allah-razimic.svg" />
              </div>
            </IonSlide>
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلرَّحْمَٰنُ"
                      transcription="Er-Rahman"
                      translation="Sveopći Dobročinitelj"
                    />
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلرَّحِيمُ"
                      transcription="Er-Rahim"
                      translation="Svemilostivi"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْمَلِكُ"
                      transcription="El-Melik"
                      translation="Vladar, Suvereni"
                    />
                    
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="لْقُدُّوسُ"
                      transcription="El-Kuddus"
                      translation="Sveti, Najčistiji"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلسَّلَٰمُ"
                      transcription="Es-Selam"
                      translation="Onaj koji daj mir"
                    />
                    
                  </IonCol>
                  
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْمُؤْمِنُ"
                      transcription="El-Mu'min"
                      translation="Pouzdani"
                    />
                          
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْمُهَيْمِنُ"
                      transcription="El-Muhejmin"
                      translation="Zaštitnik"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْعَزِيزُ"
                      transcription="El-Aziz"
                      translation="Onaj koji sve pazi i prati"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْجَبَّارُ"
                      transcription="El-Džebbar"
                      translation="Silni"
                    />
                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْمُتَكَبِّرُ"
                      transcription="El-Mutekebbir"
                      translation="Gordi"
                    />
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْخَالِقُ"
                      transcription="El-Halik"
                      translation="Stvoritelj"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْبَارِئُ"
                      transcription="El-Bari'"
                      translation="Onaj koji divno stvara"
                    />
                    
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْمُصَوِّرُ"
                      transcription="El-Musavvir"
                      translation="Oblikovatelj"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْغَفَّارُ"
                      transcription="El-Gaffar"
                      translation="Svepraštajući"
                    />
                    
                  </IonCol>
                  
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْقَهَّارُ"
                      transcription="El-Kahhar"
                      translation="Onaj koji nadvladava"
                    />
                          
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْوَهَّابُ"
                      transcription="El-Vehhab"
                      translation="Milostivi darivatelj"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْرَّزَّاقُ"
                      transcription="Er-Rezzak"
                      translation="Obskrbitelj"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْفَتَّاحُ"
                      transcription="El-Fettah"
                      translation="Onaj koji sve otvara"
                    />
                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْعَلِيمُ"
                      transcription="El-Alim"
                      translation="Sveznajući"
                    />
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْقَابِضُ"
                      transcription="El-Kabid"
                      translation="Onaj koji steže i stišće"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْبَاسِطُ"
                      transcription="El-Basit"
                      translation="Onaj koji pruža"
                    />
                    
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْخَافِضُ"
                      transcription="El-Hafid"
                      translation="Onaj koji spušta"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْرَّافِعُ"
                      transcription="Er-Rafi’"
                      translation="Onaj koji uzdiže"
                    />
                    
                  </IonCol>
                  
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْمُعِزُّ"
                      transcription="El-Mu’izz"
                      translation="Onaj koji uzvisuje"
                    />
                          
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْمُذِلُّ"
                      transcription="El-Muzill"
                      translation="Onaj koji ponižava"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْسَّمِيعُ"
                      transcription="Es-Semi’"
                      translation="Svečujni"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْبَصِيرُ"
                      transcription="El-Besir"
                      translation="Svevideći"
                    />
                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْحَكَمُ"
                      transcription="El-Hakem"
                      translation="Sudac"
                    />
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْعَدْلُ"
                      transcription="El-‘Adl"
                      translation="Pravedni"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْلَّطِيفُ"
                      transcription="El-Latif "
                      translation="Dobri"
                    />
                    
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْخَبِيرُ"
                      transcription="El-Habir"
                      translation="O svemu obaviješteni"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْحَلِيمُ"
                      transcription="El-Halim"
                      translation="Blagi, Srdačni"
                    />
                    
                  </IonCol>
                  
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْعَظِيمُ"
                      transcription="El-Azim"
                      translation="Veliki, Neizmjerljivi"
                    />
                          
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْغَفُورُ"
                      transcription="El-Gafur"
                      translation="Svepraštajući"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْشَّكُورُ"
                      transcription="Eš-Šekur"
                      translation="Zahvalni"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْعَلِيُّ"
                      transcription="El-‘Alijj"
                      translation="Uzvišeni"
                    />
                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْكَبِيرُ"
                      transcription="El-Kebir"
                      translation="Beskrajno veliki"
                    />
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْحَفِيظُ"
                      transcription="El-Hafiz"
                      translation="Onaj koji čuva"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْمُقِيتُ"
                      transcription="El-Mukit"
                      translation="Onaj koji pazi i uzdržava"
                    />
                    
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                    <NamesCard
                      arabic="ٱلْحَسِيبُ"
                      transcription="El-Hasib"
                      translation="Onaj koji obračun svodi"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْجَلِيلُ"
                      transcription="El-Dželil"
                      translation="Veličanstveni"
                    />
                    
                  </IonCol>
                  
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْكَرِيمُ"
                      transcription="El-Kerim"
                      translation="Plemeniti"
                    />
                          
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْرَّقِيبُ"
                      transcription="Er-Rekib"
                      translation="Budni"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْمُجِيبُ"
                      transcription="El-Mudžib"
                      translation="Onaj koji uslišava molbe"
                    />
                    
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <NamesCard
                      arabic="ٱلْوَاسِعُ"
                      transcription="El-Vasi’"
                      translation="Onaj koji sve obuhvata"
                    />
                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};
