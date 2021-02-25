import {
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonNote,
  IonRow,
  IonSlide,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { translationService } from "../services/TranslationService";

interface RukuProps {
    rakah?: string;
    color?:string;
  }

const RukuWatch: React.FC<RukuProps> = ({rakah,color}) => {
    const [currentRakah,setCurrenRakah]=useState("");

  useIonViewWillEnter(() => {
    if(rakah==="1") setCurrenRakah(translationService.getLabel('label-first-rakah-header'));
    if(rakah==="2") setCurrenRakah(translationService.getLabel('label-second-rakah-header'));
    if(rakah==="3") setCurrenRakah(translationService.getLabel('label-third-rakah-header'));
    if(rakah==="4") setCurrenRakah(translationService.getLabel('label-fourth-rakah-header'));
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
              color="light"
              lines="none"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      <h2>{currentRakah}</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color={color}>{translationService.getLabel('label-prayer-ruku-header')}</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                    {translationService.getLabel('label-prayer-ruku-watch-description')}
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
          <img style={{ height: 350 }} src="/assets/images/Beginning.png" />
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
                      <h2>{currentRakah}</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color={color}>{translationService.getLabel('label-prayer-ruku-return--header')}</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      {translationService.getLabel('label-prayer-ruku-return-description')}
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
                  <img style={{ height: 350 }} src="/assets/images/Sujud.png" />
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
                              <h2>{currentRakah}</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color={color}>{translationService.getLabel('label-prayer-sujud-header')}</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            {translationService.getLabel('label-prayer-sujud-watch-description')}
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
                  <img style={{ height: 350 }} src="/assets/images/Tashashud.png" />
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
                              <h2>{currentRakah}</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color={color}>{translationService.getLabel('label-prayer-between-sujud-header')}</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            {translationService.getLabel('label-prayer-between-sujud-description')}
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
                  <img style={{ height: 350 }} src="/assets/images/Sujud.png" />
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
                              <h2>{currentRakah}</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color={color}>{translationService.getLabel('label-prayer-sujud-header')}</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            {translationService.getLabel('label-prayer-sujud-watch-description')}
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

export default RukuWatch;
