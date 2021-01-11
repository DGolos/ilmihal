import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./MainCategoryPage.css";
import { translationService } from "../services/TranslationService";

const MainCategoryPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem className="text-align-center">
          <h3 className="title">{translationService.getLabel(2)}</h3>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton color="brown" shape="round" expand="full">
                <IonLabel color="burgundy" className="ion-text-center">
                  Kur'an
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color="brown" shape="round" expand="full">
                <IonLabel color="oker" className="ion-text-center">
                  Namaz
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton color="brown" shape="round" expand="full">
                <IonLabel color="light" className="ion-text-center">
                  Zikr
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="ion-padding">
          <IonLabel>
            <h1>Kur'an</h1>
          </IonLabel>
        </div>
        <div>
        <IonGrid>
            <IonRow className="ion-no-padding">
              <IonCol size="6">
                <IonCard routerLink={`/Quran/Reader`} color="light" class="category">                                        
                    <IonRow >
                     
                        
                        <img src='/assets/images/Kaba.png' height="45px" width="45px"/>
                        
                        <IonLabel className="ion-padding-start ion-text-centered" >
                          <span><h4 className="title">Čitaj </h4></span>
                          <span><h4 className="title">Kur'an</h4></span>
                        </IonLabel>
                      
                    </IonRow>
                    <IonRow >
                      
                          <h6 className="title">Čitaj malo vise da bude u 2 reda</h6>
                     
                    </IonRow>
                  
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard routerLink={`/Quran/Player`} color="light" class="category">                                        
                    <IonRow >
                      <IonAvatar>
                      <h3 className="title">12</h3>
                      </IonAvatar>
                      
                      
                      
                        <IonNote>
                          <h4 className="title">Čitaj</h4>
                          </IonNote>
                        
                      
                          </IonRow>
                    <IonRow >
                      <IonCol size="12">
                          <h6 className="title">Čitaj malo vise da bude u 2 reda</h6>
                          
                        
                      </IonCol>
                    </IonRow>
                  
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MainCategoryPage;
