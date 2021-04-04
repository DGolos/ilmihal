import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonText, IonToolbar } from "@ionic/react";
import React, { useRef, useState } from "react";

const CreditsPage: React.FC = () => {
    return(
        <IonPage>
            <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="dark-brown" defaultHref="/OptionsPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard
            className="lesson-header ion-padding"
            color="light"
          >
            <IonCardHeader>
              <img src="/assets/images/izbun.png"/>
            </IonCardHeader>
            
          </IonCard>
          
          
          
          <div className="ion-padding">
            <IonItem detail={false} color="light" lines="none">
              <IonText>
                <h2 className="lesson-note">
                Sva hvala i zahvala pripada Allahu dž.š. koji je omogućio provedbu ovog projekta. Nekea je salavat i selam na Poslanika Muhammeda a.s. kao i njegovu časnu porodivu i ashabe.
                </h2>
                <h2 className="lesson-note">
                Ova aplikacija nastala je kao iskazana potreba jednog vremesnkog (vremenskog) perioda digitalizacije u kojem se nalazimo s ciljem olakšane vjersko-odgojene (odgojne) edukacije djece i omladine koji žive na prostoru IZ Bošnjaka u Norveškoj, ali i šire. Prilikom izrade aplikacije korištena je stručna literatura iz ove oblasti te praksa i iskustvo imama na mektebima.
                </h2>
                <h2 className="lesson-note">
                    <b>Stručni dio:</b> Ibrahim ef. Šabić<br/>
                    <b>Učač Kur'ana:</b> Hafiz Omer ef. Zurlić<br/>
                    <b>Dizajn:</b> Ewlina Sőderlund<br/>
                    <b>Programer:</b> Đenan Gološ
                </h2>
              </IonText>
            </IonItem>
          </div>
          
        </IonContent>
        </IonPage>
    )
}

export default CreditsPage;