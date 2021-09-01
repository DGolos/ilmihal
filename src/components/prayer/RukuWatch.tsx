import {
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonSlide,
  IonText,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "../common/Progress";

interface RukuProps {
  rakah?: string;
  color?: string;
  stepValue?: number;
  maxValue?: number;
}

const RukuWatch: React.FC<RukuProps> = ({
  rakah,
  color,
  stepValue,
  maxValue,
}) => {
  const [currentRakah, setCurrenRakah] = useState("");

  useIonViewWillEnter(() => {
    if (rakah === "1")
      setCurrenRakah(translationService.getLabel("label-first-rakah-header"));
    if (rakah === "2")
      setCurrenRakah(translationService.getLabel("label-second-rakah-header"));
    if (rakah === "3")
      setCurrenRakah(translationService.getLabel("label-third-rakah-header"));
    if (rakah === "4")
      setCurrenRakah(translationService.getLabel("label-fourth-rakah-header"));
  });
  return (
    <>
      <IonSlide>
        <div>
          <img style={{ height: 350 }} src="/assets/images/Ruku.png" />
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
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel("label-prayer-ruku-header")}
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
                        "label-prayer-ruku-watch-description"
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
          <img style={{ height: 350 }} src="/assets/images/Beginning.png" />
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
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel(
                        "label-prayer-ruku-return--header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!+1}
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
                        "label-prayer-ruku-return-description"
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
          <img style={{ height: 350 }} src="/assets/images/Sujud.png" />
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
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel("label-prayer-sujud-header")}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!+2}
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
                        "label-prayer-sujud-watch-description"
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
          <img style={{ height: 350 }} src="/assets/images/Tashashud.png" />
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
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel(
                        "label-prayer-between-sujud-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!+3}
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
                        "label-prayer-between-sujud-description"
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
          <img style={{ height: 350 }} src="/assets/images/Sujud.png" />
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
                      <h2 className="black">{currentRakah}</h2>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6">
                    <IonChip color={color}>
                      {translationService.getLabel("label-prayer-sujud-header")}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress
                      currentValue={stepValue!+4}
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
                        "label-prayer-sujud-watch-description"
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

export default RukuWatch;
