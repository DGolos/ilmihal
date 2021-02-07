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

const DestinyPage: React.FC = () => {
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
              <h1 className="lesson" >Božija odredba</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi smo svakom narodu poslanika poslali.”</h3>
              <p className="quote-reference">Kur'an En-Nehl,36</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Vjerovanje u Božiju odredbu znači svjesno zalaganje za ostvarenje zadataka života u
granicama propisa Allahove vjere - ono što Allah hoće, to biva, događa se, a što neće,
to se ne može dogoditi niti biti.</h2>
                    <h2 className="lesson-note">Bog, dž.š., zna sve šta će se dogoditi, ali iako je sve određeno (možda ovo drugačije ili
brisati), On je dao čovjeku slobodnu volju, a to je naša sposobnost da se sami odlučimo
za neko djelo. Ako se odlučimo za dobro djelo, bit ćemo nagrađeni, a ako se odlučimo
za zlo, bit ćemo kažnjeni.</h2>
                    
                </IonText>
            </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DestinyPage;
