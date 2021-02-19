import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const OwnObligationsPage: React.FC = () => {

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
              <h1 className="lesson" >Dužnosti prema sebi</h1>
             
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
                    <h2 className="lesson-note">Život i zdravlje darovao nam je Svemogući Allah i mi trebamo da ih čuvamo. U tu svrhu
potrebni su: čistoća, hrana, odijevanje i umjerenost u svemu. Naročito treba paziti na osobnu
čistoću. Bog nam je dao raznovrsnu hranu koju jedemo. Zabranjeno je jesti: svinjsko meso i
masti i svinjske prerađevine, meso krepane životinje, meso životinje koja nije propisno
zaklana i krv. Zabranjeno je piti sva alkoholna pića, radi otklanjanja brojnih štetnih
posljedica od upotrebe navedenih jela i pića. Hrana, odijevanje i sve ostalo treba da budu od

pošteno zarađenih sredstava. Muslimani i muslimanke treba da budu propisno odjeveni i da
ne pretjeruju u luksuzu. Da bismo postigli lijep odgoj trebamo biti uljudni, stidljivi,
promišljeni i strpljivi. Ne smijemo biti umišljeni, oholi, srditi i grubi.</h2>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default OwnObligationsPage;