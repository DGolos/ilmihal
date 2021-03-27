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

interface WitrAdditionWatchProps {
  color?: string;
  stepValue?: number;
  maxValue?: number;
}

const WitrAdditionWatch: React.FC<WitrAdditionWatchProps> = ({
  color,
  stepValue,
  maxValue,
}) => {
  return (
    <>
      <IonSlide>
        <div>
          <img style={{ height: 350 }} src="/assets/images/Tekbir.png" />
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
                      <h2>
                        {translationService.getLabel(
                          "label-third-rakah-header"
                        )}
                      </h2>
                    </IonNote>
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
                    <IonNote>
                      {translationService.getLabel(
                        "label-prayer-witr-tekbir-description"
                      )}
                    </IonNote>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </div>
      </IonSlide>
      <IonSlide>
        <div>
          <img style={{ height: 350 }} src="/assets/images/Qijam.png" />
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
                      <h2>
                        {translationService.getLabel(
                          "label-third-rakah-header"
                        )}
                      </h2>
                    </IonNote>
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
                    <IonNote>
                      {translationService.getLabel(
                        "label-prayer-qunut-detail-watch"
                      )}
                    </IonNote>
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
