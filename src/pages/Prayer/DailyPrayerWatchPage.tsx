import { IonPage } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";

export const DailyPrayerWatchPage:React.FC<
RouteComponentProps<{ prayerId: string,prayerTypeId:string }>
> = ({ match }) => {
    return(
        <IonPage>
            
        </IonPage>
    )
}