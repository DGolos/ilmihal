import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import LessonListItem from "../../components/LessonListItem";

const BookOneMainPage: React.FC = () => {
    const[current,setCurrent]=useState(1);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/HomePage" />
            </IonButtons>
            <IonTitle color="light">Ilmihal Prvi dio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-purple-gradient" fullscreen>
          <IonGrid >
            <IonRow>
              <IonCol size="4">
                <IonButton
                  className="pressed"
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
                  className="pressed"
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
                  className="pressed"
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
                  className="pressed"
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
                  className="pressed"
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
          
        
          <div id="first" hidden={current !== 1} className="ion-no-padding">
          <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <LessonListItem id="1" title="Euzubilla i bismilla" link="/EuzaPage"/>
                </IonCol>
                <IonCol size="6">
                <LessonListItem id="2" title="Kelimei-Šehadet" link="/ShahadahPage"/>
                
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <LessonListItem id="3" title="Naša vjera" link="/OurFaithPage"/>
                  
                </IonCol>
                <IonCol size="6">
                <LessonListItem id="4" title="Rabbi jessir" link="/RabbiJessirPage"/>
                
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <LessonListItem id="5" title="Subhaneke" link="/SubhanekePage"/>
                  
                </IonCol>
                <IonCol size="6">
                <LessonListItem id="6" title="Selam" link="/SelamPage"/>
                
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div id="second" hidden={current !== 2} className="ion-no-padding">
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="7"
                    routerLink={`/SurahFatihaPage`}
                    lines="none"
                    detail={false}
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
         
          <div id="third" hidden={current !== 3} className="ion-no-padding">
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="11"
                    routerLink={`/ImanMainPage`}
                    lines="none"
                    detail={false}
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
          <div id="fourth" hidden={current !== 4} className="ion-no-padding">
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonItem
                    key="13"
                    routerLink={`/WudhuPage`}
                    lines="none"
                    detail={false}
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start"className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
          <div className="ion-no-padding" id="fifth" hidden={current !== 5} >
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                <IonItem
                    key="19"
                    routerLink={`/FajrPrayerPage`}
                    lines="none"
                    detail={false}
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
                    routerLink={`/DhikrPage`}
                    lines="none"
                    detail={false}
                    className="lesson welcome"
                  >
                    <IonAvatar slot="start" className="lesson">
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
