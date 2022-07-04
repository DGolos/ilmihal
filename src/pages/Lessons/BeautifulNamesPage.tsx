import {
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
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";


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
      className="white lesson-header ion-text-center"
      style={{ marginLeft: "0px", marginRight: "0px", marginTop: "0px" }}
    >
      <IonText>
        <h3 style={{ fontSize: 24 }} className="arabic-ayah ion-no-padding">
          {arabic}{" "}
        </h3>
        <h6 style={{ fontStyle: "italic" }}>{transcription}</h6>
        <p style={{ fontSize: "12px" }}>{translation}</p>
      </IonText>
    </IonCard>
  );
};
export const BeautifulNamesPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="razimic" defaultHref="/tabs/DhikrMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book3-lesson20-title")} quoteText={translate("label-book3-lesson20-quote")} quoteReference={translate("label-book3-lesson20-quote-reference")} color="razimic" />
        <div>
          <IonSlides className="ion-padding">
            <IonSlide>
              <img
                style={{ height: 230 }}
                src="/assets/images/Allah-razimic.svg"
                alt=""
              />
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلرَّحْمَٰنُ"
                      transcription="Er-Rahman"
                      translation="Sveopći Dobročinitelj"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلرَّحِيمُ"
                      transcription="Er-Rahim"
                      translation="Svemilostivi"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمَلِكُ"
                      transcription="El-Melik"
                      translation="Vladar, Suvereni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="لْقُدُّوسُ"
                      transcription="El-Kuddus"
                      translation="Sveti, Najčistiji"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلسَّلَٰمُ"
                      transcription="Es-Selam"
                      translation="Onaj koji daj mir"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُؤْمِنُ"
                      transcription="El-Mu'min"
                      translation="Pouzdani"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُهَيْمِنُ"
                      transcription="El-Muhejmin"
                      translation="Zaštitnik"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَزِيزُ"
                      transcription="El-Aziz"
                      translation="Onaj koji sve pazi i prati"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْجَبَّارُ"
                      transcription="El-Džebbar"
                      translation="Silni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُتَكَبِّرُ"
                      transcription="El-Mutekebbir"
                      translation="Gordi"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْخَالِقُ"
                      transcription="El-Halik"
                      translation="Stvoritelj"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَارِئُ"
                      transcription="El-Bari'"
                      translation="Onaj koji divno stvara"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُصَوِّرُ"
                      transcription="El-Musavvir"
                      translation="Oblikovatelj"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْغَفَّارُ"
                      transcription="El-Gaffar"
                      translation="Svepraštajući"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْقَهَّارُ"
                      transcription="El-Kahhar"
                      translation="Onaj koji nadvladava"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَهَّابُ"
                      transcription="El-Vehhab"
                      translation="Milostivi darivatelj"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْرَّزَّاقُ"
                      transcription="Er-Rezzak"
                      translation="Obskrbitelj"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْفَتَّاحُ"
                      transcription="El-Fettah"
                      translation="Onaj koji sve otvara"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَلِيمُ"
                      transcription="El-Alim"
                      translation="Sveznajući"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْقَابِضُ"
                      transcription="El-Kabid"
                      translation="Onaj koji steže i stišće"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُصَوِّرُ"
                      transcription="El-Musavvir"
                      translation="Oblikovatelj"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَاسِطُ"
                      transcription="El-Basit"
                      translation="Onaj koji pruža"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْخَافِضُ"
                      transcription="El-Hafid"
                      translation="Onaj koji spušta"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْرَّافِعُ"
                      transcription="Er-Rafi’"
                      translation="Onaj koji uzdiže"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُعِزُّ"
                      transcription="El-Mu’izz"
                      translation="Onaj koji uzvisuje"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُذِلُّ"
                      transcription="El-Muzill"
                      translation="Onaj koji ponižava"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْسَّمِيعُ"
                      transcription="Es-Semi’"
                      translation="Svečujni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَصِيرُ"
                      transcription="El-Besir"
                      translation="Svevideći"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَكَمُ"
                      transcription="El-Hakem"
                      translation="Sudac"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَاسِطُ"
                      transcription="El-Basit"
                      translation="Onaj koji pruža"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَدْلُ"
                      transcription="El-‘Adl"
                      translation="Pravedni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْلَّطِيفُ"
                      transcription="El-Latif "
                      translation="Dobri"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْخَبِيرُ"
                      transcription="El-Habir"
                      translation="O svemu obaviješteni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَلِيمُ"
                      transcription="El-Halim"
                      translation="Blagi, Srdačni"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَظِيمُ"
                      transcription="El-Azim"
                      translation="Veliki, Neizmjerljivi"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْغَفُورُ"
                      transcription="El-Gafur"
                      translation="Svepraštajući"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْشَّكُورُ"
                      transcription="Eš-Šekur"
                      translation="Zahvalni"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَلِيُّ"
                      transcription="El-‘Alijj"
                      translation="Uzvišeni"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْكَبِيرُ"
                      transcription="El-Kebir"
                      translation="Beskrajno veliki"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَفِيظُ"
                      transcription="El-Hafiz"
                      translation="Onaj koji čuva"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُقِيتُ"
                      transcription="El-Mukit"
                      translation="Onaj koji pazi i uzdržava"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَسِيبُ"
                      transcription="El-Hasib"
                      translation="Onaj koji obračun svodi"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْجَلِيلُ"
                      transcription="El-Dželil"
                      translation="Veličanstveni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْكَرِيمُ"
                      transcription="El-Kerim"
                      translation="Plemeniti"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْرَّقِيبُ"
                      transcription="Er-Rekib"
                      translation="Budni"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُجِيبُ"
                      transcription="El-Mudžib"
                      translation="Onaj koji uslišava molbe"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَاسِعُ"
                      transcription="El-Vasi’"
                      translation="Onaj koji sve obuhvata"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَكِيمُ"
                      transcription="El-Hakim"
                      translation="Mudri"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَدُودُ"
                      transcription="El-Vedud"
                      translation="Onaj koji voli"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمَجِيدُ"
                      transcription="El-Medžid"
                      translation="Slavljeni, Najslavniji"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَاعِثُ"
                      transcription="El-Ba’is"
                      translation="Onaj koji podiže iz mrtvih"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْشَّهِيدُ"
                      transcription="Eš-Šahid"
                      translation="Svjedok svemu"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَقُّ"
                      transcription="El-Hakk"
                      translation="Svjedok svemu"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَكِيلُ"
                      transcription="El-Vekil"
                      translation="Sveopći Skrbnik"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْقَوِيُّ"
                      transcription="El-Kavijj"
                      translation="Moćni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمَتِينُ"
                      transcription="El-Metin"
                      translation="Čvrsti, Postojani"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَلِيُّ"
                      transcription="El-Velijj"
                      translation="Zaštitnik"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَمِيدُ"
                      transcription="El-Hamid"
                      translation="Hvaljeni"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُحْصِيُ"
                      transcription="El-Muhsi"
                      translation="Onaj koji sve obuhvata"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُبْدِئُ"
                      transcription="El-Mubdi"
                      translation="Početni Stvaralac"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُعِيدُ"
                      transcription="El-Mu’id"
                      translation="Onaj koji daje novo postojanje"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُحْيِى"
                      transcription="El-Muhijj"
                      translation="Onaj koji život daje"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُمِيتُ"
                      transcription="El-Mumit"
                      translation="Onaj koji usmrćuje"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْحَىُّ"
                      transcription="El-Hajj"
                      translation="Živi"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْقَيُّومُ"
                      transcription="El-Kajjum"
                      translation="Onaj koji sve održava"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَاجِدُ"
                      transcription="El-Vadžid"
                      translation="Bogati"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمَاجِدُ"
                      transcription="El-Madžid"
                      translation="Slavni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَاحِدُ"
                      transcription="El-Vahid"
                      translation="Jedan"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْأَحَد"
                      transcription="El-Ahad"
                      translation="Jedini"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْصَّمَدُ"
                      transcription="Es-Samed"
                      translation="Onaj kome se svatko obraća"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْقَادِرُ"
                      transcription="El-Kadir"
                      translation="Svemoćni"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُقْتَدِرُ"
                      transcription="El-Muktedir"
                      translation="Onaj kome apsolutna moć pripada"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُقَدِّمُ"
                      transcription="El-Mukaddim"
                      translation="Onaj koji unapređuje"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُؤَخِّرُ"
                      transcription="El-Mu’ehhir"
                      translation="Onaj koji unazađuje"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلأَوَّلُ"
                      transcription="El-Evvel"
                      translation="Prvi"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْآخِرُ"
                      transcription="El-Ahir"
                      translation="Posljednji"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْظَّاهِرُ"
                      transcription="El-Zahir"
                      translation="Vidljivi"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَاطِنُ"
                      transcription="El-Batin"
                      translation="Skriveni"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَالِي"
                      transcription="El-Vali"
                      translation="Čuvar"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُتَعَالِي"
                      transcription="El-Mute’ali"
                      translation="Najuzvišeniji"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَرُّ"
                      transcription="El-Berr"
                      translation="Dobročinitelj"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْتَّوَّابُ"
                      transcription="Et-Tevvab"
                      translation="Onaj koji prima pokajanje"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُنْتَقِمُ"
                      transcription="El-Muntekim"
                      translation="Osvetnik"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْعَفُوُّ"
                      transcription="El-Afuvv"
                      translation="Onaj čiji je oprost neizmjerljiv"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْرَّؤُفُ"
                      transcription="Er-Re’uf "
                      translation="Samilosni, Sažaljivi"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="مَالِكُ ٱلْمُلْكُ"
                      transcription="Malik-ul-Mulk"
                      translation="Posjednik sve Vlasti"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ"
                      transcription="Zul-Dželali vel-Ikram"
                      translation="Posjednik svakog Visočanstva i Darežljivosti"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُقْسِطُ"
                      transcription="El-Muksit"
                      translation="Pravedni"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْجَامِعُ"
                      transcription="El-Džami’"
                      translation="Ujedinitelj"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْغَنيُّ"
                      transcription="El-Ganijj"
                      translation="Bogati"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمُغْنِيُّ"
                      transcription="El-Mugni"
                      translation="Onaj koji bogatstvo dodjeljuje"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْمَانِعُ"
                      transcription="El-Mani’"
                      translation="Onaj koji bogatstvo oduzima"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْضَّارُ"
                      transcription="Ed-Darr"
                      translation="Onaj daje štetu i nevolju"
                    />
                  </IonCol>

                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْنَّافِعُ"
                      transcription="En-Nafi’"
                      translation="Onaj daje korist i dobro"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْنُّورُ"
                      transcription="En-Nur"
                      translation="Sveopće svjetlo"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْهَادِي"
                      transcription="El-Hadi"
                      translation="Onaj koji vodi i upućuje"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid style={{ marginLeft: "0px", marginRight: "0px" }}>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَدِيعُ"
                      transcription="El-Bedi’"
                      translation="Nedostižni, Neusporedivi"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْبَاقِي"
                      transcription="El-Baki"
                      translation="Vječni"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْوَارِثُ"
                      transcription="El-Varis"
                      translation="Nasljednik svega"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْرَّشِيدُ"
                      transcription="Er-Rešid"
                      translation="Upućivatelj na dobro"
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <NamesCard
                      arabic="ٱلْصَّبُورُ"
                      transcription="Es-Sabur"
                      translation="Strpljivi"
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
