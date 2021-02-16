import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const SickPersonPrayerPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/BookTwoMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="dark-brown">
        <IonCardTitle>
              <h1 className="lesson" >Namaz bolesnika</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Allahu je prava vjera jedino islam."</h3>
              <p className="quote-reference">Kur'an 3:19</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Bolesnik ako ne može namaz obavljati stojeći ili sjedeći, klanjat će išaretom (gestom) ležeći na
leđima, a njegove noge treba da budu okrenute prema Kibli, ili ako bude na strani ležao onda će
mu lice biti okrenuto prema Kibli. Ovo okretanje je poželjno ali nije uvjet za ispravnost namaza
ako prostor u kući/stanu/bolnici to ne dozvoljava. Propuštene namaze iz predoperativnog
perioda, odnosno nakon buđenja iz opšte anestezije, ili kad prođe stanje bolesti treba naklanjati,
ako broj propuštenih namaza nije veći od pet. Ukoliko se pak u stanju nesvijesti/kome propusti
šest i više namaza, prema propisu u našem mezhebu, nema obaveze naklanjavati ih.</h2>
                                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SickPersonPrayerPage;