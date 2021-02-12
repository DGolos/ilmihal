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
  IonItem,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const BeliefPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/ImanMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="burgundy"
        >
          <IonCardTitle>
            <h1 className="lesson">Allah dž.š.</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                “Allah je izvor svjetlosti nebesa i Zemlje”
              </h3>
              <p className="quote-reference">Kur'an 24:35</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
            <h2 className="lesson-note">
            Allahova svojstva su prevelika da bi ih čovjek mogao razumom obuhvatiti i u potpunosti shvatiti,
čovjek zna samo onoliko koliko mu je Allah,dž.š., dao da zna o Njemu, ljudsko znanje je
ograničeno.
              </h2>
              <h2 className="lesson-note">
                Allaha, dž.š., spoznajemo preko Njegovih svojstava ili sifata.
                Njih ima četrnaest, i podjeljeni su u dvije grupe:
              </h2>
            </IonText>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" color="light">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4>Es-Sifatuz-Zatijje</h4>
                    <h2 className="lesson-note">
                      Es-sifatuz-zatijje su osobna, lična svojstva Allaha, dž.š.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Vudžud</b>- Allah ima i postoji.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Kidem</b>- Allah nije postao.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Beka</b>- Bog neće nestati.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Vahdanijet</b>- Allah je jedan i jedini
                    </h2>
                    <h2 className="lesson-note">
                      <b>Muhalefetun lil havadisi</b>- Allah nikome i ničemu nije sličan.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Kijamun bi nefsihi</b>- Allah sam pio sebi opstoji.
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" color="light">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4>Es-Sifatus-Subutijje</h4>
                    <h2 className="lesson-note">
                      Es-sifatus-subutijje su svojstva Božijeg savršenstva.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Hajat</b>- Allah živi.
                    </h2>
                    <h2 className="lesson-note">
                      <b>'ilm'</b>- Allah zna.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Esme'a</b>- Allah čuje.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Besar</b>- Allah vidi.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Kelam</b>- Allah govori.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Iradet</b>- Allah čini sve svojom voljom.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Kudret</b>- Allah je svemoćan.
                    </h2>
                    <h2 className="lesson-note">
                      <b>Tekvim</b>- Allah sve stvara održava i rastvara.
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BeliefPage;
