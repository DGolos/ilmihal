import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
  useIonViewWillLeave,
} from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";

const DhikrPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);

  useIonViewWillLeave(() => {
    if (isPlaying) {
      playerRef.current.stop();
    }
  });

  const toglePlayPause = () => {
    if (isLoaded === false) {
      const onEnd = () => {
        setIsPlaying(false);
      };

      const onLoad = () => {
        setIsLoaded(true);
      };

      const onPlay = () => {};

      playerRef.current = new Howl({
        src: `/assets/audio/lessons/EuzaBismilla.m4a`,
        preload: true,
        html5: true,
        onend: onEnd,
        onload: onLoad,
        onplay: onPlay,
        format: ["m4a"],
      });
    }
    if (isPlaying) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" defaultHref="/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-book1-lesson24-title')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-book1-lesson24-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-book1-lesson24-quote-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
              {translationService.getLabel('label-book1-lesson24_section1-paragraph1')}
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div>
          <IonSlides>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-center">
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonText>{translationService.getLabel('label-header-arabic')}</IonText>
                      </IonChip>
                      <IonButton
                        className="no-shadow ion-float-right"
                        onClick={() => {
                          toglePlayPause();
                        }}
                        fill="clear"
                        color="light"
                        size="default"
                        style={{ position: "fixed" }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={
                            isPlaying ? pauseCircleOutline : volumeHighOutline
                          }
                          color="purple"
                        />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonNote>
                        Allahumme entes-selamu ve minkes-selam. Tebarekte ja
                        zel-dželali vel-ikram.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonLabel>{translationService.getLabel('label-header-bosnian')}</IonLabel>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineššejta-nirradžim
                        Bismillahir-rahmanir-rahim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-center">
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonText>Arapski</IonText>
                      </IonChip>
                      <IonButton
                        className="no-shadow ion-float-right"
                        onClick={() => {
                          toglePlayPause();
                        }}
                        fill="clear"
                        color="light"
                        size="default"
                        style={{ position: "fixed" }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={
                            isPlaying ? pauseCircleOutline : volumeHighOutline
                          }
                          color="purple"
                        />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonNote>
                        Ala resulillahi salavat. Allahumme salli ala Muhammedin
                        ve ala ali Muhammed. Subhanallahi vel-hamdu lillahi ve
                        la ilahe illellahu vallahu ekber. Ve la havle ve la
                        kuvvete illa billahil-alijjil-azim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineššejta-nirradžim
                        Bismillahir-rahmanir-rahim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-center">
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonText>Arapski</IonText>
                      </IonChip>
                      <IonButton
                        className="no-shadow ion-float-right"
                        onClick={() => {
                          toglePlayPause();
                        }}
                        fill="clear"
                        color="light"
                        size="default"
                        style={{ position: "fixed" }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={
                            isPlaying ? pauseCircleOutline : volumeHighOutline
                          }
                          color="purple"
                        />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineš-šejtanir-radžim
                        Bismillahir-rahmanir-rahim, Allahu la illahe illa Hu.
                        El-hajjul-kajjum. La tehuzuhu sinetun ve la nevm. Lehu
                        ma fis-semavati ve ma fil-erd. Men zellezi ješfe’u
                        indehu illa bi-iznih. J ́alemu ma bejne ejdihim ve ma
                        halfehum, ve la jahitune bi šej-in min ilmihi illa bima
                        šae. Vesia kurijjuhus-semavati vel-erda, ve la jeuduhu
                        hifzuhuma ve huvel- alijjul-azim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineššejta-nirradžim
                        Bismillahir-rahmanir-rahim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem
                className="lesson-note"
                style={{ marginLeft: "15px", marginRight: "15px" }}
                lines="none"
              >
                <IonText>
                  <h2 className="lesson-note">
                    Ja Rabbi zel-dželali subhanallah a zatim Subhanallah 33 puta
                  </h2>
                  <h2 className="lesson-note">
                    Subhanel-baki daimen elhamdu lillah a zatim Elhamdu lillah
                    33 puta
                  </h2>
                  <h2 className="lesson-note">
                    Rabbil-allmine teala šanuhu Allahu ekber a zatim Allahu
                    ekber 33 puta
                  </h2>
                </IonText>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-center">
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonText>Arapski</IonText>
                      </IonChip>
                      <IonButton
                        className="no-shadow ion-float-right"
                        onClick={() => {
                          toglePlayPause();
                        }}
                        fill="clear"
                        color="light"
                        size="default"
                        style={{ position: "fixed" }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={
                            isPlaying ? pauseCircleOutline : volumeHighOutline
                          }
                          color="purple"
                        />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonNote>
                        La ilahe illellahu vahdehu la šerike leh. Lehul-mulku ve
                        lehul-hamdu ve Huve ́ala kulli šej-in kadir. Ve ma
                        erselnake illa rahmeten lil-alemin.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineššejta-nirradžim
                        Bismillahir-rahmanir-rahim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-center">
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonText>Arapski</IonText>
                      </IonChip>
                      <IonButton
                        className="no-shadow ion-float-right"
                        onClick={() => {
                          toglePlayPause();
                        }}
                        fill="clear"
                        color="light"
                        size="default"
                        style={{ position: "fixed" }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={
                            isPlaying ? pauseCircleOutline : volumeHighOutline
                          }
                          color="purple"
                        />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonNote>
                        El-hamdu lillahi rabbil-‘alemin. Ves-salatu ves-selamu
                        ‘ala sejjidina Muhammedin ve ‘ala alihi ve sahbihi
                        edžmein. Allahumme rabbena tekabbel minna salatena
                        inneke entes- semiul-‘alim. Ve tub ‘alejna ja mevlana
                        inneke entet-tevvabur- rahim. Allahumme rabbena atina
                        fid-dunja haseneten ve fil-ahireti haseneten vekina
                        ‘azaben-nar. Rabbena-gfir li ve li validejje ve lil-
                        mu’minine jevme jekumul-hisab. Subhane rabbike
                        rabbil-‘izzeti ‘amma jesifun. Ve selamun ‘alel-
                        murselin. Vel-hamdu lillahi rabbil-’alemīn. El-Fatiha.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ayah">
                    <IonCol size="12">
                      <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                      </IonChip>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        Euzu billahi mineššejta-nirradžim
                        Bismillahir-rahmanir-rahim.
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DhikrPage;
