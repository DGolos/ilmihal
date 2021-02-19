import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonText, IonCol, IonGrid, IonRow, IonSlide, IonSlides, IonChip, IonNote } from "@ionic/react";
import React from "react";

export const FuneralPrayerPage: React.FC = () => {
    return (
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton color="light" defaultHref="/BookTwoMainPage" />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="bg-image-asr" fullscreen>
          <div style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                    Dženaze namaz
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
            <div className="ion-no-padding">
            <IonItem className="lesson-note ion-padding" lines="none">
                <IonText>
                <h2 className="lesson-note">Dženaze namaz se klanja za umrlu osobu.</h2>
              
                    
                </IonText>
            </IonItem>
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Nijjet</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Nevejtu en usallije lillahi te’ala salatel-l-dženazeti, senaen lillahi te’ala, ve salavaten ‘alen-n-
nebijji, ve du’aen li hazel-l-mejjiti (za žensko: li hazihil-l-mejjiteti), edaen mustakbilel-kibleti,
iktedejtu bi hazel imami – Allahu ekber!
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    
                      
                  </IonGrid>
                </IonItem>
            </div>
            </IonSlide>
            <IonSlide>
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Klanjanje</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">Dženaze-namaz nema niti jednog rekata. Klanja se stojeći (na kijamu), a sastoji se od četiri
tekbira (Allahu ekber) i selama.</h2>
                    <h2 className="lesson-note">Potrebno je imati abdest, kao i za svaki drugi namaz.</h2>
                    <h2 className="lesson-note">Učiniti nijjet i izgovoriti prvi tekbir.</h2>
                    <h2 className="lesson-note">Poslije početnog tekbira uči se subhaneke, iza riječi “ve te’ala džedduke”, dodamo “ve
dželle senauke, ve la illahe gajruke”.</h2>
                    <h2 className="lesson-note">Dzatim se izgovori drugi tekbir, pa se prouče “Salavati”, koji se uče na drugim namazima
na posljednjem sjedenju.</h2>
                    <h2 className="lesson-note">Poslije “Salavata” donose se treći tekbir i onda se prouči “Dova”.</h2>
                    <h2 className="lesson-note">nakon “Dove” prouči se četvrti tekbir i preda se selam.</h2>
                    <h2 className="lesson-note">Nakon izgovorenog četvrtkog tekbira, predajemo selam na desnu stranu i spuštamo desnu
ruku, zatim predajemo selam na lijevu stranu i spuštamo lijevu ruku, nakon toga
 proučimo Fatihu i sa tim bi završili čin klanjanja Dženaze – namaza.</h2>
                </IonText>
                      </IonCol>
                    </IonRow>
                    
                      
                  </IonGrid>
                </IonItem>
          </IonSlide>
          <IonSlide>
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Dova</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                      <h2 className="lesson-note">Allahummagfir lihajjina, ve mejjitina, ve šahidina, ve gaibina, ve sagirina,ve kebirina, ve
zekerina, ve unsana. Allahumme men ahjejtehu minna fe ahjijhi alel-islam, ve men teveffejtehu
minna feteveffehu alel-iman. Ve hussa hazel-mejjite (hazihil-mejjitete) bir-revhi, ve r-rahati, vel
magfireti, ver-ridvan. Allahumme in kane (kanet) muhsinen (muhsineten) fezid fi ihsanih
(ihsaniha), ve in kane (kanet) musi`en (musi`eten) fetedžavez anhu (anha) ve lekkihil-emne
(lekkihel-emne), vel bušra, vel-keramete, vez-zulfa bi rahmetike ja erhamer-rahimin. (za žensko
se uči ovo što je u zagradama)</h2>
<h2 className="lesson-note">Prevod: Allahu moj, oprosti našim živima i mrtvima, prisutnima i odsutnima, mladima i starima,
muškarcima i ženskima. Allahu moj, kome od nas podariš život, daj mu ga u islamu, a kome od
nas oduzmeš život oduzmi mu ga u imanu. Obaspi ovog (ovu) umrlog (umrlu) spokojstvom,
smirenošću, oprostom grijeha i Svojim zadovoljstvom. Allahu moj, ako je dobro činio (činila),
povećaj mu (joj) njegova (njezina) dobra djela, a ako je činio (činila) loša djela, prijeđi mu (joj)
preko njih i dočekaj ga (je) sa sigurnošću, radošću, počasti i odlikovanjima, tako ti Tvoje milosti,
Najmilostiviji.</h2>
                      </IonText>
                      </IonCol>
                    </IonRow>
                    
                      
                  </IonGrid>
                </IonItem>
          </IonSlide>
          <IonSlide>
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>Ta&#39;zijja/Saosjećanje</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">Negdje se to izražava učenjem ajeta: &quot;Svi smo mi Allahovi i svi se Njemu vraćamo&quot;. U Sarajevu
se ta&#39;zija čini riječima: &quot;Bašum sagosum&quot;, a odvraća riječima: &quot;Dostum sagosum&quot;. Može se to
izraziti i našim riječima: Neka se Allah smiluje i oprosti Vašom umrlom, a Vama podari sabur.</h2>
                    
                </IonText>
                      </IonCol>
                    </IonRow>
                    
                      
                  </IonGrid>
                </IonItem>
          </IonSlide>
          </IonSlides>
          
          </IonContent>
        </IonPage>
      );
}