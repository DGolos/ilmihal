import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const WipingPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Mesh</h1>
             
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
                <h2 className="lesson-note">Mesh znači potrati mokrom rukom jedan dio tijela radi čišćenja tog dijela ili pak potrati
mokrom rukom jedan dio odjeće, ako se - u izuzetnim slučajevima - ne može oprati taj dio
tijela.</h2>
                <h2 className="lesson-note">Glavne vrste mesha su:</h2>
                <h2 className="lesson-note">-Mesh po zavoju</h2>
                <h2 className="lesson-note">-Mesh po mestvama</h2>
                
                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default WipingPage;