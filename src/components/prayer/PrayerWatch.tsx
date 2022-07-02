import { IonItem, IonGrid, IonRow, IonCol, IonChip, IonText } from "@ionic/react";
import React from "react";
import {  match } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../Progress";

export interface PrayerWatchProps{
    color:string;
    title?:string;
    header:string;
    description:string;
    image:string;
    current:number;
    max:number;
}
export const PrayerWatch: React.FC<PrayerWatchProps> = ({ color,title,header,description,image,current,max }) => {
    const { translate } = useTranslation();
    return (
        
              <div>
                <img
                  style={{ height: 330 }}
                  src={image} 
                  alt=""
                />
                <div>
                  <IonItem
                    key={current}
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                    <IonRow hidden={!title}>
                        <IonCol size="12">
                        <IonText>
                            <h2 className="black">{translate(title)}</h2>
                        </IonText>
                        </IonCol>
                    </IonRow>
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color={color}>
                            {translate(header)}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={current}
                            maxValue={max}
                            color="purple"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              description
                            )}
                            </h2>
                            
                          </IonText>
                         
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            
    );
  };