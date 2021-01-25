import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonToolbar } from "@ionic/react"
import moment from "moment";
import React, { useEffect, useState } from "react"
import { timeService } from "../../services/TimeService";


const AsrPrayerPage: React.FC = () => {
    const [asr,setAsr]=useState("");
    useEffect(() => {
        setAsr(moment.utc(timeService.getAsrTime()*1000).format("HH:mm"));
    }, []);
    
    return(
        <IonPage>
            <IonHeader className="ion-no-border">
           <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar> 
        </IonHeader>
            <IonContent className="bg-image-asr" fullscreen>
            <div style={{marginTop:50,marginLeft:15,marginRight:15}}>

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
            </IonContent>
        </IonPage>
    )

}

export default AsrPrayerPage;