import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const ObligationsToParentsPage: React.FC = () => {

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
              <h1 className="lesson" >Dužnosti prema roditeljima</h1>
             
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
                    <h2 className="lesson-note">Porodica je osnovna ljudska zajednica, koja nastaje na islamskom braku i ljubavi. Djeca
prema roditeljima imaju ove dužnosti:</h2>
                    <h2 className="lesson-note">Da su zahvalna i poslušna.</h2>
                    <h2 className="lesson-note">da ih slušaju, štuju, vole i pomažu.</h2>
                    <h2 className="lesson-note">Da se na svaki poziv roditelja odmah odazovu.</h2>
                    <h2 className="lesson-note">Da mrtve roditelje spominju dovom i da u njihovo ime daju sadaku ili pomoć,</h2>
                    <h2 className="lesson-note">Ako su roditelji bolesni i iznemogli, moraju ih djeca njegovati, a ako su siromašni a djeca
imaju imetka ili mogu zarađivati, onda moraju izdršavati svoje roditelje.</h2>
                    <h2 className="lesson-note">I ostalu rodbinu treba lijepo paziti i pomagati.</h2>
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default ObligationsToParentsPage;