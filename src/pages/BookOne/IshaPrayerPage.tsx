import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonToolbar } from "@ionic/react"
import moment from "moment";
import React, { useEffect, useState } from "react"
import { timeService } from "../../services/TimeService";


const IshaPrayerPage: React.FC = () => {
    const [isha,setIsha]=useState("");
    useEffect(() => {
      setIsha(moment.utc(timeService.getIshaTime()*1000).format("HH:mm"));
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
            <IonContent className="bg-image-isha" fullscreen>
            <div style={{marginTop:50,marginLeft:15,marginRight:15}}>

            <IonItem className="welcome">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    Jacija namaz
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <h3 className="prayer ion-no-padding ion-text-center">
                    Danas je u {isha}
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

export default IshaPrayerPage;