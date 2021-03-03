import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonText, IonCol, IonGrid, IonRow, IonSlide, IonSlides, IonChip, IonNote } from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

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
                    {translationService.getLabel('label-jummah-prayer')}
                    </h6>
                  </IonCol>
                </IonRow>
                <IonRow >
                  <IonCol size="12" style={{ marginTop: 0 }}> 
                    <h3 style={{fontStyle:"italic",fontSize:"12"} } className="prayer ion-no-padding ion-text-center">
                    {translationService.getLabel('label-book2-lesson14-quote')}
                    </h3>
                    <p className="quote-reference ion-text-center">{translationService.getLabel('label-book2-lesson14-quote-reference')}</p>
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
                    {translationService.getLabel('label-book2-lesson14_section1-paragraph1')}
                    </h2>
                  </IonText>
                </IonItem>
                <IonItem className="lesson-note" lines="none">
                  <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section2-paragraph1')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section2-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section2-paragraph3')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section2-paragraph4')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section2-paragraph5')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section3-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                   
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section3-paragraph1')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph3')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph4')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph5')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph6')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section3-paragraph7')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section4-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section4-paragraph1')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section5-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section5-paragraph1')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section5-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section5-paragraph3')}
                    </h2>
                    
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section5-paragraph4')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section6-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section6-paragraph1')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph3')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph4')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph5')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph6')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section6-paragraph7')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section7-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section7-paragraph1')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph3')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph4')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph5')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph6')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section7-paragraph7')}
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
                        <IonChip color="brown" style={{marginLeft:"0px"}}>{translationService.getLabel('label-book2-lesson14-section8-header')}</IonChip>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        {translationService.getLabel('label-book2-lesson14_section8-paragraph1')}
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                      <IonText>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section8-paragraph2')}
                    </h2>
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section8-paragraph3')}
                    </h2>
                    
                    <h2 className="lesson-note">
                    {translationService.getLabel('label-book2-lesson14_section8-paragraph4')}
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