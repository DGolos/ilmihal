import {
    IonChip,
    IonCol,
    IonGrid,
    IonItem,
    IonNote,
    IonRow,
    IonSlide,
  } from "@ionic/react";
  import React from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../common/Progress";

  interface SalamWatchProps{
    rakah:string;
    color?:string;
    stepValue?: number;
    maxValue?: number;
  }
  
  const SelamWatch: React.FC<SalamWatchProps> = ({ rakah,color,stepValue,maxValue}) => {
    return (
        <IonSlide>
        <div>
          <img style={{ height: 350 }} src="/assets/images/Selam.png" />
          <div>
            <IonItem
              key="1"
              detail={false}
              color="light"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
              <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      <h2>{rakah==="2"?translationService.getLabel('label-second-rakah-header'):translationService.getLabel('label-fourth-rakah-header')}</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>{translationService.getLabel('label-prayer-selam-header')}</IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!}
                      maxValue={maxValue!}
                      color={color}
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                    {translationService.getLabel('label-prayer-selam-watch-description')}
                    </IonNote>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </div>
      </IonSlide>
    );
  };
  
  export default SelamWatch;
  