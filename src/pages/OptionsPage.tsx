import React, { useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonAlert
} from "@ionic/react";

import { useHistory } from "react-router";
import { chatbubbleEllipsesOutline, linkSharp, logoFacebook, mailOutline, peopleOutline, thumbsUpOutline } from "ionicons/icons";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { translationService } from "../services/TranslationService";

const OptionsPage: React.FC = () => {
  const history=useHistory();
  const [showRateAlert,setShowRateAlert]=useState((false));
  const [showContactAlert,setShowContactAlert]=useState((false));

  const rateApp=()=>{
    setShowRateAlert(true);
  }
  const contactUs=()=>{
    setShowContactAlert(true);
  }
  const changeLanguage=()=>{
    history.push("/tabs/LanguageOptionsPage");
  }

  const openHomePage=async()=>{
    InAppBrowser.create("https://izbih.no");
    
  }

  const openTermsOfUse=async()=>{
    InAppBrowser.create("https://izbih.no/privacy-policy");
    
  }

  const openFacebook=async()=>{
    InAppBrowser.create("https://www.facebook.com/DetIslamskeFellesskapBosniaHerzegovina/");
    
  }


  return (
    <IonPage>
      <IonContent className="bg-image-purple" fullscreen>
        <div className="ion-padding" style={{marginTop:"30px"}}>
          <IonCard className="lesson-header" color="dark-brown">
            <IonItem className="dark-brown ion-text-center white-line" style={{ marginBottom: "0px" }}>
              <IonText color="light" >
                <h4 className="white"  style={{ fontSize: "28px", fontWeight: "bold" }}>iMekteb</h4>
                <p className="white" style={{ fontSize: "12px" }}> app by</p>
                <h4  className="white" style={{ fontSize: "20px", fontWeight: 300 }}>{translationService.getLabel('label-options-islamic-community')}</h4>
              </IonText>
            </IonItem>
            <IonItem className="dark-brown white-line" style={{ marginBottom: "0px" }} routerLink={`/tabs/CreditsPage`}>
              <IonAvatar>
                <IonIcon icon={peopleOutline} className="white"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
              <IonText className="ion-padding-start"><h4 className="white" style={{ fontSize: "20px" , fontWeight: "bold"}}>{translationService.getLabel('label-options-team')}</h4>
                <p className="white" style={{ fontSize: "12px" }}> {translationService.getLabel('label-options-team-description')}</p></IonText>
            </IonItem>
            <IonItem className="dark-brown white-line" style={{ marginBottom: "0px" }} onClick={() => {contactUs()}}>
            <IonAvatar>
                <IonIcon icon={mailOutline} className="white"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
            <IonText className="ion-padding-start white"><h4 className="white" style={{ fontSize: "20px" , fontWeight: "bold"}}>Kontakt</h4>
                <p className="white" style={{ fontSize: "12px" }}>{translationService.getLabel('label-options-contact-description')} </p></IonText>
            </IonItem>
            <IonItem className="dark-brown white-line" style={{ marginBottom: "0px" }} onClick={() => {rateApp()}}>
            <IonAvatar>
                <IonIcon icon={thumbsUpOutline} className="white"  style={{ fontSize: "36px" }}/>
              </IonAvatar>
            <IonText className="ion-padding-start"><h4 className="white" style={{ fontSize: "20px" , fontWeight: "bold"}}>{translationService.getLabel('label-options-rate')}</h4>
                <p className="white" style={{ fontSize: "12px" }}>{translationService.getLabel('label-options-rate-description')} </p></IonText>
            </IonItem>
            <IonItem className="dark-brown" lines="none" style={{ marginBottom: "0px" }} onClick={() => {changeLanguage()}}>
            <IonAvatar>
                <IonIcon icon={chatbubbleEllipsesOutline} className="white" style={{ fontSize: "36px" }}/>
              </IonAvatar>
            <IonText className="ion-padding-start"><h4 className="white" style={{ fontSize: "20px" , fontWeight: "bold"}}>{translationService.getLabel('label-options-change-language')}</h4>
                <p className="white" style={{ fontSize: "12px" }}>{translationService.getLabel('label-options-change-language-description')}</p></IonText>
            </IonItem>
            
          </IonCard>
          <IonCard className="lesson-header" color="burgundy" style={{ marginTop: "20px" }}>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonText style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {translationService.getLabel('label-options-keep-touch')}
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonButton fill="clear" onClick={() => {openHomePage()}}>
                  <IonIcon
                    style={{ fontSize: "20px" }}
                    icon={linkSharp}
                    className="white"
                    slot="start"
                    
                  />
                  <IonText className="white" >Web</IonText>
                  </IonButton>
                  
                </IonCol>
                <IonCol size="6">
                <IonButton fill="clear" onClick={() => {openFacebook()}}>
                  <IonIcon
                    style={{ fontSize: "20px" }}
                    icon={logoFacebook}
                    className="white"
                    slot="start"
                  />
                  <IonText className="white">Facebook</IonText>
                  </IonButton>
                </IonCol>
                
              </IonRow>
            </IonGrid>
          </IonCard>
          
        </div>
        <IonAlert isOpen={showRateAlert} onDidDismiss={()=>{setShowRateAlert(false)}} header={translationService.getLabel('label-notification')} message={translationService.getLabel('label-rate-app')} buttons={['Ok']}/>

        
        <IonAlert isOpen={showContactAlert} onDidDismiss={()=>{setShowContactAlert(false)}} header={'label-notification'} message={translationService.getLabel('label-contact-us')} buttons={['Ok']}/>

        
      </IonContent>
      <IonFooter className="ion-padding ion-no-border">
            <IonText style={{ fontSize: "12px" }} color="light" onClick={() => {openTermsOfUse()}}>Privacy policy</IonText>
          </IonFooter>
    </IonPage>
  );
};

export default OptionsPage;
