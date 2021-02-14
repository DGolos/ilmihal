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
              <h1 className="lesson" >Abdest</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Čistoća je pola vjere."</h3>
              <p className="quote-reference">Hadis</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note">
            <IonText>
              <h2 className="lesson-note">
                Abdest je posebno pranje čistom vodom radi klanjanja namaza ili
                učenja gledajući iz Kur&#39;ana.
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
                          <IonChip color="burgundy">Oprati ruke</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Operemo ruke do iza šake (tri puta).</IonNote>
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
                          <IonChip color="burgundy">Isprati usta</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Desnom rukom ispiramo usta(tri puta).</IonNote>
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
                          <IonChip color="burgundy">Očistiti nos</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Lijevom rukom čistimo nos(tri puta).</IonNote>
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
                          <IonChip color="burgundy">Oprati lice</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Operemo lice, odakle je kosa nikla do pod bradu i od uha do uha (tri puta).</IonNote>
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
                          <IonChip color="burgundy">Oprati podlaktice</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Operemo prvo desnu, a zatim lijevu ruku do iza lakta (tri puta).</IonNote>
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
                          <IonChip color="burgundy">Potrati glavu</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Potaremo mokrom rukom prednji dio glave (mesh) jedan puta.</IonNote>
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
                          <IonChip color="burgundy">Potrati uši i vrat</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Potaremo mokrim rukama uši i vrat (jedan puta). Kažiprst stavimo u uho, palac
iza uha, a sa ostala tri prsta vanjskom stranom potiremo vrat.</IonNote>
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
                          <IonChip color="burgundy">Oprati noge</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonNote>Operemo prvo desnu, a onda lijevu nogu do iza članaka (tri puta).</IonNote>
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
                          <IonChip color="burgundy">Šta kvari abdest</IonChip>
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                        <IonNote>S jednim abdestom, ako u međuvremenu nismo učinili ništa što kvari abdest, možemo
klanjati više namaza.Abdest će biti pokvaren: ako obavimo malu ili veliku nuždu, ako nam poteče krv ili
procuri gnoj ili žuta voda, ako zaspimo, ako povratimo ili ako pustimo vjetar.</IonNote>
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
