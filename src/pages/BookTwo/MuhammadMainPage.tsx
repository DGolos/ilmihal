import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const MuhammadMainPage: React.FC = () => {

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
              <h1 className="lesson" >Allahov poslanik</h1>
             
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
                <h2 className="lesson-note">Posljednji Božiji poslanik je Muhammed a. s. Poslije Muhammeda a. s. neće doći nijedan
poslanik niti ijedna objava poslije Kur&#39;ana.Kada spomenemo ime Poslanika obavezno moramo dodati alejhiselam ili proučiti salavat.</h2>
              
                    
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note">Muhammed, ’alejhi-sselam, rođen je 12 rebiu’l-evvela u Mekki u godini koju su Arapi nazivali
Slonova godina. To odgovara datumu 20. april 571 godine po rođenju Isa, ’alejhi-sselam.</h2>
                <h2 className="lesson-note">Njegov otac Abdullah umro je dok je on bio u majčinoj utrobi. Njegova majka se zvala Amina
bint Vehb. I ona i Abdullah su poticali iz uglednih i cijenjenih porodica. Kada je napunio šest
godina majka Amina je preselila na Ahiret. Tako je Muhammed ostao siroče, bez oca i bez
majke. Nakon toga, još dvije godine o Muhammedu je brigu vodio njegov djed, koji ga je veoma
volio. Kada je Muhammedu bilo osam godina, umro mu je i djed Abdulmutalib, a o njemu je
preuzeo brigu amidža Ebu Talib. U 25. godini života oženio se Hatidžom bint Huvejlid, koja je
bila poznata u Mekki po čestitosti, ljepoti i bogatstvu. Hatidža je bila poznata po nadimku
Tahira, što znači čista, a Muhammed, ’alejhi-sselam, po nadimku Emin (pouzdani). U četrdesetoj
godini počeo je primati Objavu. Početak Objave bio je u mjesecu ramazanu, u pećini Hira, na
brdu Nur. Prve riječi koje su objavljene Muhammedu, ’alejhi-sselam, bile su riječi: «Ikre bismi
rabbike…» («Čitaj u ime Tvoga Gospodara, Čitaj plemenit je Tvoj Gospodar…»). Nakon Hidžre
iz Mekke u Medinu i nekoliko važnih događaja koji su se desili u tom periodu u 63. godini života
Muhammed, ’alejhi-sselam, preselio je na Ahiret u gradu Medini, a nakon što je za 23. godine
potpuno izvršio misiju s kojom ga je Allah, dželle šanuhu, zadužio. On je poslan kao milost svim
svjetovima.</h2>
              
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default MuhammadMainPage;