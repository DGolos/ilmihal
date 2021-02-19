import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const MistakesPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="brown">
        <IonCardTitle>
              <h1 className="lesson" >Grijesi</h1>
             
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
                    <h2 className="lesson-note">Islam zabranjuje sve što je loše i štetno za dušu i tijelo, srce ili um, život i porodicu, imovinu
ili čast. Činjenje loših odnsono vjerom zabranjenih stvari naziva se grijeh.</h2>
                    <h2 className="lesson-note">Grijesi počinjeni u javnosti (u prisustvu jedne ili više osoba) nazivaju se javni grijesi a grijesi
počinjeni tajno (kada nema prisutnih osoba) nazivaju se tajni grijesi.</h2>
                    <h2 className="lesson-note">Grijesi se razlikuju po svojoj štetnosti i zauzimaju različita mjesta na skali grijeha. Dijele se u
dvije skupine velike i male grijehe. Ako čovjek učini kakav grijeh, hotimično ili nehotice,
treba da se odmah pokaje (tevbu učini).</h2>
                    <h2 className="lesson-note">Tevba se obično čini usmeno ovako: »Milostivi Bože, ja se iskreno kajem što sam učinio
grijeh i molim Tvoj oprost. <i>Estagfirullah, estagfirullah, estagfirullah ve etubu ilejh</i>.Kad se
ovo izgovori, prouči se Amentu billahi i Kelime-i šehadet. Uz iskreno kajanje treba učiniti i
neko dobro djelo.</h2>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default MistakesPage;