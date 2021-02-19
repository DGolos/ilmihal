import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonText, IonCol, IonGrid, IonRow, IonChip, IonNote } from "@ionic/react";
import React from "react";

export const EidPrayerPage: React.FC = () => {
    return (
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton color="light" defaultHref="/BookTwoMainPage" />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="bg-image-fajr" fullscreen>
          <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                    Bajram namaz
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
          <IonItem
                  key="1"
                  detail={false}
                  color="light"
                  lines="none"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  <IonGrid className="ion-text-left">
                  <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Bajram namaz se klanja nakon sabaha za Ramazanski i Kurban bajram. Namazi se klanjaju istovjetno a razlika je jedino u nijjetu.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>Ramazanski</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Nevejtu en usallije lillahi te’ala salate ‘idil-fitri edaen mustakbilel-kibleti, iktedejtu bihaze-l-imami: Allahu ekber!
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>Kurban</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Nevejtu en usallije lillahi te’ala salate ‘idil-adha edaen mustakbilel-kibleti, iktedejtu bihaze-l-imami: Allahu ekber!
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>Klanjanje</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Prouči se Subhaneke i nakon toga se donesu tri tekbira izgovarajući: Allahu ekber. Nakon tekbira
imam uči Fatihu i suru (odlomak iz Kur’ana) i obave se ostali dijelovi namaza sve do drugog
rekata. Na drugom rekatu imam uči Fatihu i suru te donese opet tri tekbira izgovarajući: Allahu

ekber. Sa četvrtim tekbirom imam se pregiba – ide na ruk’u, a džematlije ga prate. Nakon selama
imam održi hutbu.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    
                  </IonGrid>
                </IonItem>
          </IonContent>
        </IonPage>
      );
}