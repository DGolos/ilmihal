import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonToolbar } from "@ionic/react"
import React from "react"

const PrayerTimesPage: React.FC = () => {
    return(
        <IonPage>
            
        <IonContent className="bg-image-isha">
        <IonHeader className="ion-no-border standard">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonList style={{ marginLeft: "10px", marginRight: "10px" }}>
            <IonItem>
            <IonAvatar>
                      <img src="/assets/images/fajr.jpg" />
             </IonAvatar>
            </IonItem>
            <IonItem>
            <IonAvatar>
                      <img src="/assets/images/Mishary.jpg" />
             </IonAvatar>
            </IonItem>
            <IonItem>
            <IonAvatar>
                      <img src="/assets/images/3.jpg" />
             </IonAvatar>
            </IonItem>
            <IonItem>
            <IonAvatar>
                      <img src="/assets/images/Mishary.jpg" />
             </IonAvatar>
            </IonItem>
            <IonItem>
            <IonAvatar>
                      <img src="/assets/images/5.jpg" />
             </IonAvatar>
            </IonItem>
        </IonList>
        </IonContent>
        </IonPage>
    )
}

export default PrayerTimesPage;