import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonText, IonToolbar } from "@ionic/react";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";

const CreditsPage: React.FC = () => {
    return(
        <IonPage>
            <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="dark-brown" defaultHref="/tabs/OptionsPage" />
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
                {translationService.getLabel('label-options-team-introduction-paragraph1')}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel('label-options-team-introduction-paragraph2')}
                </h2>
                <h2 className="lesson-note">
                    <b>{translationService.getLabel('label-options-team-expertise')}</b> Ibrahim ef. Šabić<br/>
                    <b>{translationService.getLabel('label-options-team-quran')}</b> Hafiz Omer ef. Zulić<br/>
                    <b>{translationService.getLabel('label-options-team-design')}</b> Ewelina Sőderlund<br/>
                    <b>{translationService.getLabel('label-options-team-programming')}</b> Đenan Gološ
                </h2>
              </IonText>
            </IonItem>
          </div>
          
        </IonContent>
        </IonPage>
    )
}

export default CreditsPage;