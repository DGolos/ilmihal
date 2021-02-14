import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage,  IonRow,  IonSearchbar,  IonSlide,  IonSlides,  IonText,  IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';


export const BeautifulNamesPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {

   return (
      <IonPage>
        <IonHeader className="ion-no-border">
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="purple">
        <IonCardTitle>
              <h1 className="lesson" >Allahova imena</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"On ima najljepša imena"</h3>
              <p className="quote-reference">Kur'an 59:24</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                Vjerodostoji hadisi prenose da svako ko nauči Allahovih 99 imena ima osigurano mjesto u džennetu.
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div>
          <IonSlides>
            <IonSlide>
            <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Allah.svg"
                />
                </div>
            </IonSlide>
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلرَّحْمَٰنُ </h3>
              <h6 style={{fontStyle:"italic",fontWeight:"bold"} }>Er-Rahman</h6>
              <p className="quote-reference">Blagi</p>
            
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلرَّحِيمُ</h3>
             
            
              <h6 style={{fontStyle:"italic"} }>Er-Rahim</h6>
              <p className="quote-reference">Milostivi</p>
           
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" >
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلْمَلِكُ</h3>
             
            
              <h6 style={{fontStyle:"italic"} }>El-Malik</h6>
              <p className="quote-reference">Vladar</p>
           
        </IonCard >
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">لْقُدُّوسُ</h3>
              <h6 style={{fontStyle:"italic"} }>El-Quddus</h6>
              <p className="quote-reference">Sveti</p>
            
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلسَّلَٰمُ</h3>
             
            
              <h6 style={{fontStyle:"italic"} }>Es-Selam</h6>
              <p className="quote-reference">Od nedostataka cisti</p>
           
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light">
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلْمَلِكُ </h3>
             
            
              <h6 style={{fontStyle:"italic"} }>El-Mu'min</h6>
              <p className="quote-reference">Koji daje sigurnost</p>
           
        </IonCard>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلرَّحْمَٰنُ </h3>
              <h6 style={{fontStyle:"italic"} }>El-Muhejmin</h6>
              <p className="quote-reference">Koji sve pazi</p>
            
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light" style={{marginRight:"0px"}}>
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلرَّحِيمُ</h3>
             
            
              <h6 style={{fontStyle:"italic"} }>El-Aziz</h6>
              <p className="quote-reference">Snazni</p>
           
        </IonCard>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                  <IonCard className="ion-text-center" color="light">
        
              <h3 style={{fontSize:24}} className="arabic-ayah ion-no-padding">ٱلرَّحِيمُ</h3>
             
            
              <h6 style={{fontStyle:"italic"} }>El-Džabbar</h6>
              <p className="quote-reference">Silni</p>
           
        </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </div>
        </IonContent>
      </IonPage>
    );

}