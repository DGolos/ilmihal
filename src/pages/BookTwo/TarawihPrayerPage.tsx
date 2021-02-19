import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonText, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

export const TarawihPrayerPage: React.FC = () => {
    return (
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton color="light" defaultHref="/BookTwoMainPage" />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="bg-image-isha" fullscreen>
          <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                      Teravih namaz
                    </h6>
                  </IonCol>
                </IonRow>
                <IonRow >
                  <IonCol size="12" style={{ marginTop: 0 }}> 
                    <h3 style={{fontStyle:"italic",fontSize:"14"} } className="prayer ion-no-padding ion-text-center">
                      "O vjernici, kada se u petak na molitvu pozove, kupoprodaju ostavite i podjite molitvu obaviti"
                    </h3>
                    <p className="quote-reference ion-text-center">Kur'an, 62:9</p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
          <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Noću uz ramazan klanja se teravih-namaz. Teravih namaz je sunnet (sunneti-muekkede) a sastoji
se od 20 rekata. Mogu se klanjati u džematu a može svako za sebe. Klanja se kao iknidjski ili
jacijski sunneti.</h2>
                                    
                    
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Teravih namaz se zanijeti ovako:&quot;NEVEJTU EN USALLIJE LILLAHI TEALA SALATET-
TERAVIHI IŠRINE REKATEN, EDAEN MUSTA-BILEL-KIBLETI (iktedejtu bi hazel-imami)
ALLAHU EKBER.</h2>
                <h2 className="lesson-note">Prijevod: &quot;Ja odlučih klanjati u ime Uzvišenog Allaha teravih namaz od 20 rekata na vrijeme
okrenuvši se prema Kibli (klanjajući za ovim imamom) Allah je Najveći. Kada se završi teravih
namaz klanja se Vitr namaz (u džematu).</h2>
                                    
                    
                </IonText>
            </IonItem>
            
        </div>
          </IonContent>
        </IonPage>
      );
}