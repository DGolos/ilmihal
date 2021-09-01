import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonCol, IonGrid, IonRow, IonChip, IonText } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

export const EidPrayerPage: React.FC = () => {
    return (
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton className="white" defaultHref="/BookTwoMainPage" />
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
                    {translationService.getLabel('label-eid-prayer')}
                    </h6>
                  </IonCol>
                </IonRow>
                <IonRow >
                  <IonCol size="12" style={{ marginTop: 0 }}> 
                    <h3 style={{fontStyle:"italic"} } className="prayer ion-no-padding ion-text-center">
                    {translationService.getLabel('label-book2-lesson11-quote')}
                    </h3>
                    <p className="quote-reference ion-text-center">{translationService.getLabel('label-book2-lesson11-quote-reference')}</p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
          <IonItem
                  key="1"
                  detail={false}
                  className="lesson-note"
                  lines="none"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  <IonGrid className="ion-text-left">
                  <IonRow>
                      <IonCol size="12">
                        <IonText>
                          <h2 className="lesson-note">
                          {translationService.getLabel('label-book2-lesson11-section1-paragraph1')}
                          </h2>
                        
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson11-section1-header1')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonText>
                        <h2 className="lesson-note">
                        {translationService.getLabel('label-book2-lesson11-section1-paragraph2')}
                        </h2>
                        </IonText>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson11-section1-header2')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonText>
                        <h2 className="lesson-note">
                        {translationService.getLabel('label-book2-lesson11-section1-paragraph3')}
                        </h2>
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="razimic" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson11-section1-header3')}</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText>
                        <h2 className="lesson-note">
                        {translationService.getLabel('label-book2-lesson11-section1-paragraph4')}
                        </h2>
                        </IonText>
                      </IonCol>
                    </IonRow>
                    
                  </IonGrid>
                </IonItem>
          </IonContent>
        </IonPage>
      );
}