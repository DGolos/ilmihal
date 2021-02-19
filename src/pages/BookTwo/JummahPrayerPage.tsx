import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonText, IonCol, IonGrid, IonRow, IonSlide, IonSlides, IonChip, IonNote } from "@ionic/react";
import React from "react";
import { match } from "react-router-dom";

export const JummahPrayerPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/BookTwoMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-dhuhr" fullscreen>
          <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                      Džuma namaz
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
          <IonSlides>
            <IonSlide>
              <div className="ion-padding">
                <IonItem className="lesson-note" lines="none">
                  <IonText>
                    <h2 className="lesson-note">
                      Džuma namaz je sedmični namaz koji su muslimani-muškarci
                      obavezni klanjati petkom u podnevsko vrijeme umjesto podne
                      namaza i može se klanjati samo u džematu. Džumu-namaz mogu
                      klanjati i žene ali nisu obavezne.
                    </h2>
                  </IonText>
                </IonItem>
                <IonItem className="lesson-note" lines="none">
                  <IonText>
                    <h2 className="lesson-note">
                      - četiri rekata sunneta (sunnetil-džumuati)
                    </h2>
                    <h2 className="lesson-note">
                      - dva rekata farza (fardil-džumuati)
                    </h2>
                    <h2 className="lesson-note">
                      - četriri rekata sun-sunneta (sun-sunnetil džumuati)
                    </h2>
                    <h2 className="lesson-note">
                      - četiri rekata ahiriz-zuhri (ahiriz-zuhri)
                    </h2>
                    <h2 className="lesson-note">
                      - dva rekata sunnetil-vakti (sunnetil-vakti)
                    </h2>
                  </IonText>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Sunnet</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Nakon proučenog ezana klanja se prvi džumanski sunnet koji je isti kao i podnevski sunnet i
sastoji se od četiri rekata koji se zanijeti ovako: <b>Nevejtu en usallije lillahi te’ala salate
sunnetil- džumu’ati edaen mustakbilel kibleti, Allahu ekber!</b>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                        <b>Prvi rekat:</b> Subhaneke – euza – bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Drugi rekat:</b> bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Sjedenje:</b>Sjedenje: et-tehijjatu
                    </h2>
                    <h2 className="lesson-note">
                        <b>Treći rekat:</b> bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Četvrti rekat:</b> bismilla – fatiha – sura.
                    </h2>
                    <h2 className="lesson-note">
                        <b>Zadnje sjedenje:</b> et-tehijjatu, salavati, dova i selam.
                    </h2>
                  </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Hutba</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Pošto se klanja prvi sunnet, mujezin uči drugi ezan a imam uzlazi na minber. Kad mujezin završi
drugi ezan, imam (hatib), stojeći na minberu, drži hutbu (predavanje) u kojem prisutne vjernike
upoznaje o važnim tekućim pitanjima Islamske zajednice i daje im upute i savjete o islamskom
vjerovanju i obavezama.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Farz</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Po završetku hutbe muezzin prouči ikamet i pristupa se klanjanju džumanskog farza koji se može
klanjati samo za imamom (u džematu). Ima dva rekata a uči se sljedeće: Nijet: <b>Nevejtu en
usallije lillahi te’ala salate fardil- džumu’ati edaen mustakbilel kibleti iktedejtubihazel imami,
Allahu ekber!</b>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                        <b>Prvi rekat:</b> Subhaneke – euza – bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Drugi rekat:</b> bismilla – fatiha – sura
                    </h2>
                    
                    <h2 className="lesson-note">
                        <b>Zadnje sjedenje:</b> et-tehijjatu, salavati, dova i selam.
                    </h2>
                  </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Sun-sunnet</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Poslije farza klanjamo, svako za se, četiri rakata džumanskih sun-sunneta koji se zanijete ovako:
                         <b>Nevejtu en usallije lillahi te’ala salate sun-sunnetil- džumu’ati edaen mustakbilel kibleti,Allahu ekber!</b>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                        <b>Prvi rekat:</b> Subhaneke – euza – bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Drugi rekat:</b> bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Sjedenje:</b>Sjedenje: et-tehijjatu
                    </h2>
                    <h2 className="lesson-note">
                        <b>Treći rekat:</b> bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Četvrti rekat:</b> bismilla – fatiha – sura.
                    </h2>
                    <h2 className="lesson-note">
                        <b>Zadnje sjedenje:</b> et-tehijjatu, salavati, dova i selam.
                    </h2>
                  </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Ahiri zuhr</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Zanijeti se:<b>Nevejtu en usallije lillahi te’ala salate ahiriz- zuhri edaen mustakbilel kibleti,Allahu ekber!</b>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                        <b>Prvi rekat:</b> Subhaneke – euza – bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Drugi rekat:</b> bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Sjedenje:</b>Sjedenje: et-tehijjatu
                    </h2>
                    <h2 className="lesson-note">
                        <b>Treći rekat:</b> bismilla – fatiha 
                    </h2>
                    <h2 className="lesson-note">
                        <b>Četvrti rekat:</b> bismilla – fatiha
                    </h2>
                    <h2 className="lesson-note">
                        <b>Zadnje sjedenje:</b> et-tehijjatu, salavati, dova i selam.
                    </h2>
                  </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-no-padding">
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Sunnetil- vakt</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Nijet: <b>Nevejtu en usallije lillahi te’ala salate sunnetil- vakti edaen mustakbilel kibleti, Allahu ekber!</b>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                        <b>Prvi rekat:</b> Subhaneke – euza – bismilla – fatiha – sura
                    </h2>
                    <h2 className="lesson-note">
                        <b>Drugi rekat:</b> bismilla – fatiha – sura
                    </h2>
                    
                    <h2 className="lesson-note">
                        <b>Zadnje sjedenje:</b> et-tehijjatu, salavati, dova i selam.
                    </h2>
                  </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </div>
            </IonSlide>
          </IonSlides>
        </IonContent>
      </IonPage>
    );
}