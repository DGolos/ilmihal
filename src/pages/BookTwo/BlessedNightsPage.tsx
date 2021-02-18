import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const BlessedNightsPage: React.FC = () => {

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
              <h1 className="lesson" >Mubarek noći</h1>
             
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
                <h2 className="lesson-note">Odabrane (mubarek) ili posebne noći muslimani obilježavaju na prigodan način uz učenje
Kur&#39;ana, čitanjem hadisa i događaja iz života Poslanika Muhammeda, a.s,.</h2>
                                    
                    
                </IonText>
            </IonItem>
            <IonItem className="lesson-note" lines="none">
                <IonText>
                <h2 className="lesson-note"><b>Lejlei-regaib</b> pada prvog uoči petka u mjesecu redžebu. Te noći osjetila je hazreti Amina,
da je ponijela Muhammeda a. s.</h2>
                <h2 className="lesson-note"><b>Lejlei-miradž</b> pada 27. noć mjeseca redžeba. U toj noći Muhammed a. s. doživio je
najviše duhovno uzdignuće i dobio od Allaha dž. š. zaduženje za pet dnevnih namaza.</h2>
                <h2 className="lesson-note"><b>Lajlei-berat</b> pada 15. noć ša&#39;bana kada Allah dž. š. određuje ljudske sudbine za narednu
godinu. Ona nas podsjeća na skori dolazak najdražeg nam gosta, ramazana, da bismo se
duhovno i fizički pripremili za post i ostale ibadete.</h2>
                <h2 className="lesson-note"><b>Lejlei-kader</b> pada 27. noć ramazana. To je najodabranija noć u godini. Za nju veli Allah
dž. š. da je bolja od hiljadu mjeseci jer je u toj noći počeo Allah dž. š. objavljivati Kur&#39;an
a. š. Muhammedu a. s.</h2>
                                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default BlessedNightsPage;