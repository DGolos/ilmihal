import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const AngelsPage: React.FC = () => {
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
      <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Meleki</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“On ga je na obzorju jasnom vidio”</h3>
              <p className="quote-reference">Kur'an Et-Tekvir,23</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Meleki su nevidljiva duhovna bića, stvorena od svijetlosti, koja nikada ne griješe, nego
uvijek sa zadovoljstvom i poslušno vrše dužnosti koje im Allah dž.š. određuje.Meleka ima mnogo a najpoznatiji su:</h2>
                    <h2 className="lesson-note"><b>Džebrail</b>- ima ulogu da prenosi od Boga Objavu poslanicima.</h2>
                    <h2 className="lesson-note"><b>Azrail</b>- rastavlja duše od tijela u času smrti, sa drugim za to određenim
melekima.</h2>
                    <h2 className="lesson-note"><b>Mikail</b>-sa drugim melekima vrši odredene dužnosti u prirodnim pojavama i
promjenama kao što su strujanje vjetrova, kretanje oblaka, padanje kiše, listanje,rast i sazrijevanje bilja, itd.</h2>
                    <h2 className="lesson-note"><b>Israfil</b>- ima zadaću da najavi prestanak života na zemlji (Posljednji dan) i
ponovno oživljenje (Sudnji dan).</h2>
                    <h2 className="lesson-note"><b>Kiramen katibin</b>- prate čovjeka, donose mu dobre misli i pišu njegova djela.</h2>
                </IonText>
            </IonItem>
            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AngelsPage;
