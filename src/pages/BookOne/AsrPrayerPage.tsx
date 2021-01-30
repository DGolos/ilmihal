import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import moment from "moment";
import React, { useEffect, useState } from "react"
import { timeService } from "../../services/TimeService";


const AsrPrayerPage: React.FC = () => {
    const [asr,setAsr]=useState("");
    useEffect(() => {
        setAsr(moment.utc(timeService.getAsrTime()*1000).format("HH:mm"));
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
        <IonContent className="bg-image-asr" fullscreen>
          <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
            <IonItem className="welcome">
              <IonGrid>
                <IonRow className="ion-no-padding">
                  <IonCol size="12">
                    <h6 className="welcome ion-no-padding ion-text-center">
                      Ikindija namaz
                    </h6>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <h3 className="prayer ion-no-padding ion-text-center">
                      Danas je u {asr}
                    </h3>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
          <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Vrijeme ikindijskog namaza počinje kada sunce nagne zapadu i traje do akšama.
                </h2>
              </IonText>
            </IonItem>
            <IonItem className="lesson-note">
              <IonLabel>
                <h3 className="prayer-name-bold">Sunet</h3>
                <h3 className="prayer-name-normal">4 rekata</h3>
              </IonLabel>
              <IonLabel className="ion-text-right">
                <a className="prayer-details" href="/AsrPrayerDetailsPage/sunnah">
                  Nauči klanjati
                </a>
              </IonLabel>
            </IonItem>
            <IonItem className="lesson-note">
              <IonLabel>
                <h3 className="prayer-name-bold">Farz</h3>
                <h3 className="prayer-name-normal">4 rekata</h3>
              </IonLabel>
              <IonLabel className="ion-text-right">
                <a className="prayer-details" href="AsrPrayerDetailsPage/fardh">
                  Nauči klanjati
                </a>
              </IonLabel>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );

}

export default AsrPrayerPage;