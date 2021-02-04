import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const ImanMainPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-burgundy-gradient" fullscreen>
        
        <IonCard className="lesson-header ion-padding transparent ion-text-center" >
        <IonCardTitle>
              <h1 className="lesson" >Imanski šarti</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle color="light">
              <h3 style={{fontStyle:"italic"} }>"Niko nije kao On.On sve čuje i vidi"</h3>
              <p className="quote-reference">Kur'an Aš-Šura,11</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Da bismo mogli biti muslimani, dužni smo naučiti te razumom i srcem prihvatiti islamsko
vjerovanje (iman).
                </h2>
                <h2 className="lesson-note">
                Islamsko vjerovanje sastoji se od šest temeljnih istina vjere, a zovemo ih imanski šarti.

                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonList className="transparent ion-padding">
          <IonItem
              key="1"
              routerLink={`/BeliefPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/allah.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Amentu billahi</h4>
              <p> Ja vjerujem u Boga</p>
              </IonText>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/AngelsPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/angels.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Ve melaiketihi</h4>
              <p> Ja vjerujem u Božije meleke</p>
              </IonText>
            </IonItem>
            <IonItem
              key="3"
              routerLink={`/RevelationsPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/book.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Ve kutubihi</h4>
              <p> Ja vjerujem u Božije Kitabe (Objave)</p>
              </IonText>
            </IonItem>
            <IonItem
              key="4"
              routerLink={`/MessangersPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/muhammad.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Ve rusulihi</h4>
              <p> Ja vjerujem u Božije poslanike (pejgambere)</p>
              </IonText>
            </IonItem>
            <IonItem
              key="5"
              routerLink={`/JudgementDayPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/akhira.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Vel jevmil-ahiri</h4>
              <p> Ja vjerujem u Posljednji (Sudnji) dan</p>
              </IonText>
            </IonItem>
            <IonItem
              key="6"
              routerLink={`/DestinyPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/qadr.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> Ve bil-kaderi hajrihi ve šerrihi minellahi teala</h4>
              <p> Vjerujem da sve što se
događa, biva s Božijom voljom i određenjem.</p>
              </IonText>
            </IonItem>
            
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default ImanMainPage;