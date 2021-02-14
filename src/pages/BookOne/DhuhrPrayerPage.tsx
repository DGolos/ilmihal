import { IonBackButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { documentTextOutline, videocamOutline } from "ionicons/icons";
import moment from "moment";
import React, { useEffect, useState } from "react"
import { timeService } from "../../services/TimeService";


const DhuhrPrayerPage: React.FC = () => {
    const [dhuhr,setDhuhr]=useState("");
    useEffect(() => {
        setDhuhr(moment.utc(timeService.getDhuhrTime()*1000).format("HH:mm"));
    }, []);
    
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-dhuhr" fullscreen>
          <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                      Podne namaz
                    </h6>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <h3 className="prayer ion-no-padding ion-text-center">
                      Danas je u {dhuhr}
                    </h3>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
          <div className="ion-padding">
            <IonItem className="lesson-note">
            <IonLabel slot="start">
              <h3 className="prayer-name-bold">Sunnet</h3>
              <h3 className="prayer-name-normal">4 rekata</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton  color="light" >
                <IonIcon src='/assets/images/prayer.svg' color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink="/DhuhrPrayerDetailsPage/sunnah">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton routerLink="/DhuhrPrayerWatchPage/sunnah">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
            </IonItem>
            <IonItem className="lesson-note">
            <IonLabel slot="start">
              <h3 className="prayer-name-bold">Farz</h3>
              <h3 className="prayer-name-normal">4 rekata</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton  color="light" >
                <IonIcon src='/assets/images/prayer.svg' color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink="/DhuhrPrayerDetailsPage/fardh">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton routerLink="/DhuhrPrayerWatchPage/fardh">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
            </IonItem>
            <IonItem className="lesson-note">
            <IonLabel slot="start">
              <h3 className="prayer-name-bold">Sunsunnet</h3>
              <h3 className="prayer-name-normal">2 rekata</h3>
            </IonLabel>
            <IonFab slot="end" vertical="bottom" horizontal="end">
              <IonFabButton  color="light" >
                <IonIcon src='/assets/images/prayer.svg' color="purple" />
              </IonFabButton>
              <IonFabList side="start">
                <IonFabButton routerLink="/DhuhrPrayerDetailsPage/sunsunnah">
                  <IonIcon icon={documentTextOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
                <IonFabButton routerLink="/DhuhrPrayerWatchPage/sunsunnah">
                  <IonIcon icon={videocamOutline} size="zmdi-hc-2x" color="purple"/>
                </IonFabButton>
              </IonFabList>
            </IonFab>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );

}

export default DhuhrPrayerPage;