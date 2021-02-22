import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const WudhuPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >{translationService.getLabel('label-book1-lesson13-title')}</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>{translationService.getLabel('label-book1-lesson13-quote')}</h3>
              <p className="quote-reference">{translationService.getLabel('label-hadeeth-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note">
            <IonText>
              <h2 className="lesson-note">
              {translationService.getLabel('label-book1-lesson13-paragraph1')}
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
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">Bismilla</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Bismillahir-rahmani-rahim</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-hands')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-hands-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-mouth')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-mouth-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-nose')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-nose-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-face')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-face-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-albow')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-albow-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wipe-head')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wipe-head-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wipe-neck')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wipe-neck-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 330 }}
                  src="/assets/images/Beginning.png"
                />
                <div>
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-wash-feet')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>{translationService.getLabel('label-wash-feet-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              
                
                <div>
                  
                  <IonItem detail={false} color="light" lines="none" style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">{translationService.getLabel('label-what-breaks-wudhu')}</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                        <IonNote>{translationService.getLabel('label-what-breaks-wudhu-description')}</IonNote>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WudhuPage;
