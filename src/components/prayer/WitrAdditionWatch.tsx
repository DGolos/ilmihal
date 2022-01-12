import {
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonSlide,
  IonText,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../common/Progress";

interface WitrAdditionWatchProps {
  color?: string;
  stepValue?: number;
  maxValue?: number;
  isMan:boolean
}

const WitrAdditionWatch: React.FC<WitrAdditionWatchProps> = ({
  color,
  stepValue,
  maxValue,
  isMan
}) => {
  return (
    <>
      <IonSlide>
        <div>
          <img style={{ height: 350 }} src={isMan?"/assets/images/Tekbir.png":"/assets/images/WudhuEars.png"} alt=""/>
          <div>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="black">
                        {translationService.getLabel(
                          "label-third-rakah-header"
                        )}
                      </h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel("label-prayer-tekbir")}
                    </IonChip>
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
                    <IonText>
                      <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-prayer-witr-tekbir-description"
                      )}
                      </h2>
                      
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </div>
      </IonSlide>
      <IonSlide>
        <div>
          <img style={{ height: 350 }} src={isMan?"/assets/images/Qijam.png":"/assets/images/WudhuEars.png"} alt=""/>
          <div>
            <IonItem
              key="1"
              detail={false}
              className="lesson-note"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="black">
                        {translationService.getLabel(
                          "label-third-rakah-header"
                        )}
                      </h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel("label-prayer-qunut-header")}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue! + 1}
                      maxValue={maxValue!}
                      color={color}
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonText>
                      <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-prayer-qunut-detail-watch"
                      )}
                      </h2>
                      
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </div>
      </IonSlide>
    </>
  );
};
export default WitrAdditionWatch;
