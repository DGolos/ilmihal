import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"

const BookOneMainPage: React.FC = () => {
    const[current,setCurrent]=useState(1);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/HomePage" />
            </IonButtons>
            <IonTitle>Ilmihal Prvi dio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton color={current===1?"burgundy":"brown"} shape="round" expand="full" onClick={ () => setCurrent(1) }>
                <IonLabel color="light" className="ion-text-center">
                  1-6
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===2?"burgundy":"brown"} shape="round" expand="full" onClick={ () => setCurrent(2) }>
                <IonLabel color="light" className="ion-text-center">
                  7-10
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===3?"burgundy":"brown"} shape="round" expand="full" onClick={ () => setCurrent(3) }>
                <IonLabel color="light" className="ion-text-center">
                  11-12
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <IonButton color={current===4?"burgundy":"brown"} shape="round" expand="full" onClick={ () => setCurrent(4) }>
                <IonLabel color="light" className="ion-text-center">
                  13-18
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color={current===5?"burgundy":"brown"} shape="round" expand="full" onClick={ () => setCurrent(5) }>
                <IonLabel color="light" className="ion-text-center">
                  19-24
                </IonLabel>
              </IonButton>
            </IonCol>
            
          </IonRow>
        </IonGrid>
        
        <div id="first" hidden={current!==1}>
            <IonGrid >
                <IonRow>
                    <IonCol size="6">
                        <IonCard className="lesson" color="purple" routerLink={`/EuzaPage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>1</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Euzubilla i bismilla</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard className="lesson" color="burgundy" routerLink={`/ShahadahPage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>2</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Kelimei-Šehadet</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                    <IonCard className="lesson" color="brown" routerLink={`/OurFaithPage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>3</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Naša vjera</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                    <IonCard className="lesson" color="purple" routerLink={`/RabbiJessirPage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>4</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Rabbi jessir</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                    <IonCard className="lesson" color="purple" routerLink={`/SubhanekePage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>5</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Subhaneke</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                    <IonCard className="lesson" color="brown" routerLink={`/SelamPage`}>
                            <IonCardHeader className="ion-text-center">
                                <IonCardTitle>6</IonCardTitle>
                                <IonCardSubtitle><h1 className="lesson">Selam</h1></IonCardSubtitle>
                            </IonCardHeader>

                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        <div className="ion-padding" id="second" hidden={current!==2}>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">

                    </IonCol>
                    <IonCol size="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        <div className="ion-padding" id="third" hidden={current!==3}>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">

                    </IonCol>
                    <IonCol size="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        <div className="ion-padding" id="fourth" hidden={current!==4}>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">

                    </IonCol>
                    <IonCol size="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        <div className="ion-padding" id="fifth" hidden={current!==5}>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">

                    </IonCol>
                    <IonCol size="6">
                        
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default BookOneMainPage;
