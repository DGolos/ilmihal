import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const PowerOfTruthPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="brown">
        <IonCardTitle>
              <h1 className="lesson" >Snaga istine</h1>
             
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
                    <h2 className="lesson-note">Istina znači sigurnost i unutrašnju ravnotežu u cjelokupnom čovjekovom životu. Iskrenost u
riječima prenosi čovjeka u iskrenost u djelima i ispravnost u postupcima. Izricanje laži udaljava
od čovjeka imeleke i uništava mu dobra djela.</h2>
            <h2 className="lesson-note" ><i>"Usuđuju se da laži izmišljaju samo oni koji u Allahove riječi ne vjeruju, i oni su ti koji
su lažljivci.“ </i> (En-Nahl; 105)</h2>
<h2 className="lesson-note" ><i>"Zaista laž vodi do razvrata, i zaista razvrat vodi do Vatre.“</i> (Hadis)</h2>
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default PowerOfTruthPage;