import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
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
                <IonButton
                  color={current === 1 ? "burgundy" : "brown"}
                  shape="round"
                  expand="full"
                  onClick={() => setCurrent(1)}
                >
                  <IonLabel color="light" className="ion-text-center">
                    1-6
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color={current === 2 ? "burgundy" : "brown"}
                  shape="round"
                  expand="full"
                  onClick={() => setCurrent(2)}
                >
                  <IonLabel color="light" className="ion-text-center">
                    7-10
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color={current === 3 ? "burgundy" : "brown"}
                  shape="round"
                  expand="full"
                  onClick={() => setCurrent(3)}
                >
                  <IonLabel color="light" className="ion-text-center">
                    11-12
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="4">
                <IonButton
                  color={current === 4 ? "burgundy" : "brown"}
                  shape="round"
                  expand="full"
                  onClick={() => setCurrent(4)}
                >
                  <IonLabel color="light" className="ion-text-center">
                    13-18
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="4">
                <IonButton
                  color={current === 5 ? "burgundy" : "brown"}
                  shape="round"
                  expand="full"
                  onClick={() => setCurrent(5)}
                >
                  <IonLabel color="light" className="ion-text-center">
                    19-24
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        
          <div id="first" hidden={current !== 1}>
          <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="1"
                    routerLink={`/EuzaPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>1</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Euzubilla i bismilla</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="2"
                    routerLink={`/ShahadahPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>2</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Kelimei-Šehadet</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="3"
                    routerLink={`/OurFaithPage`}
                    lines="none"
                    detail={false}
                    className="lesson brown"
                  >
                    <IonAvatar slot="start" className="lesson brown">
                      <IonLabel style={{marginTop:7}}>
                        <h4>3</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Naša vjera</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="4"
                    routerLink={`/RabbiJessirPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>4</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Rabbi jessir</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="5"
                    routerLink={`/SubhanekePage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>5</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Subhaneke</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="6"
                    routerLink={`/SelamPage`}
                    lines="none"
                    detail={false}
                    className="lesson brown"
                  >
                    <IonAvatar slot="start" className="lesson brown">
                      <IonLabel style={{marginTop:7}}>
                        <h4>6</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Selam</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div id="second" hidden={current !== 2}>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="7"
                    routerLink={`/SurahFatihaPage`}
                    lines="none"
                    detail={false}
                    className="lesson razimic"
                  >
                    <IonAvatar slot="start" className="lesson razimic">
                      <IonLabel style={{marginTop:7}}>
                        <h4>7</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Sura El-Fatiha</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="8"
                    routerLink={`/SurahNasPage`}
                    lines="none"
                    detail={false}
                    className="lesson razimic"
                  >
                    <IonAvatar slot="start" className="lesson razimic">
                      <IonLabel style={{marginTop:7}}>
                        <h4>8</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Sura En-Nas</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="9"
                    routerLink={`/SurahFelekPage`}
                    lines="none"
                    detail={false}
                    className="lesson razimic"
                  >
                    <IonAvatar slot="start" className="lesson razimic">
                      <IonLabel style={{marginTop:7}}>
                        <h4>9</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Sura El-Felek</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="10"
                    routerLink={`/SurahIhlasPage`}
                    lines="none"
                    detail={false}
                    className="lesson razimic"
                  >
                    <IonAvatar slot="start" className="lesson razimic">
                      <IonLabel style={{marginTop:7}}>
                        <h4>10</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Sura El-Ihlas</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
         
          <div id="third" hidden={current !== 3}>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="11"
                    routerLink={`/ImanMainPage`}
                    lines="none"
                    detail={false}
                    className="lesson dark-brown"
                  >
                    <IonAvatar slot="start" className="lesson dark-brown">
                      <IonLabel style={{marginTop:7}}>
                        <h4>11</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Imanski šarti</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>

                <IonCol size="6">
                <IonItem
                    key="12"
                    routerLink={`/IslamMainPage`}
                    lines="none"
                    detail={false}
                    className="lesson dark-brown"
                  >
                    <IonAvatar slot="start" className="lesson dark-brown">
                      <IonLabel style={{marginTop:7}}>
                        <h4>12</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Islamski šarti</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div id="fourth" hidden={current !== 4}>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="13"
                    routerLink={`/WudhuPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>13</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Abdest</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="14"
                    routerLink={`/AdhanPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>14</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Ezan</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="15"
                    routerLink={`/IqamahPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start"className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>15</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Ikamet</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="16"
                    routerLink={`/EttehijatuPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>16</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Et-tehijatu</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="17"
                    routerLink={`/SalavatPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>17</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Salavati</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="18"
                    routerLink={`/DuaPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>18</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Dove</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div className="ion-padding" id="fifth" hidden={current !== 5}>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="19"
                    routerLink={`/FajrPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>19</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Sabah namaz</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="20"
                    routerLink={`/DhuhrPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>20</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Podne namaz</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="21"
                    routerLink={`/AsrPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>21</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Ikindija namaz</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="22"
                    routerLink={`/MaghribPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>22</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Akšam namaz</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="23"
                    routerLink={`/IshaPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson burgundy"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:7}}>
                        <h4>23</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Jacija namaz</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                <IonItem
                    key="22"
                    routerLink={`/AfterPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson purple"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:7}}>
                        <h4>24</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Zikr</h4>
                    </IonNote>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default BookOneMainPage;
