import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const QuranDefinitionPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="purple">
        <IonCardTitle>
              <h1 className="lesson" >Kur'an</h1>
             
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
                <h2 className="lesson-note">Kur&#39;an je posljednja Božija knjiga u kojoj je Uzvišeni Allah objavio vjeru islam
Muhammedu-alejhisselam s ciljem da je prenese i objasni ljudima kako bi primjenom tog
zakona postigli sreću na ovom i budućem svijetu.</h2>
<               h2 className="lesson-note">Kur&#39;an sadrži upute kako i na koji način treba vjerovati, koje islamske dužnosti treba vršiti te
kako i na kkoji način se ljudi trebaju vladati. Kur&#39;an je objavljen na arapskom jeziku.</h2>            
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default QuranDefinitionPage;