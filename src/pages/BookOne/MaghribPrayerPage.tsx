import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonToolbar } from "@ionic/react"
import moment from "moment";
import React, { useEffect, useState } from "react"
import { timeService } from "../../services/TimeService";


const MaghribPrayerPage: React.FC = () => {
    const [maghrib,setMaghrib]=useState("");
    useEffect(() => {
        setMaghrib(moment.utc(timeService.getMaghribTime()*1000).format("HH:mm"));
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
            <IonContent className="bg-image-maghrib" fullscreen>
            <div style={{marginTop:50,marginLeft:15,marginRight:15}}>

            <IonItem className="welcome">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    Akšam namaz
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h3 className="prayer ion-no-padding ion-text-center">
                    Danas je u {maghrib}
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

export default MaghribPrayerPage;