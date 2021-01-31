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

interface RukuProps {
    rakah?: string;
    
  }

const RukuWatch: React.FC<RukuProps> = ({rakah}) => {
    const [currentRakah,setCurrenRakah]=useState("");

  useIonViewWillEnter(() => {
    if(rakah==="1") setCurrenRakah("Prvi");
    if(rakah==="2") setCurrenRakah("Drugi");
    if(rakah==="3") setCurrenRakah("Treći");
    if(rakah==="4") setCurrenRakah("Četvrti");
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
                      <h2>{currentRakah} rekat</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color="burgundy">Ruk'u</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      Nakon stajanja prelazimu u ruk'u gdje učimo tri puta:{" "}
                      <b>Subhane rabbijel-azim</b>.
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
                      <h2>{currentRakah} rekat</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color="burgundy">Povratak sa ruk'ua</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      Povratak sa ruk'ua učimo <b>Semiallahu limen hamideh</b> ,
                      zatim malo zastanemo i reknemo: <b>Rabbena lekel-hamd.</b>
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
                              <h2>{currentRakah} rekat</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color="burgundy">Sedžda</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            Sedždu činimo stavljajući prvo koljena na tlo a zatim lice.Na sedždi učimo tri puta: <b>Subhane rabbijel-e ́ala</b>.
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
                              <h2>{currentRakah} rekat</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color="burgundy">Izmedju dvije sedžde</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                              Izmedju dvije sedžde malo zastanemo i zatim idemo na drugu sedždu.
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
                              <h2>{currentRakah} rekat</h2>
                            </IonNote>
                          </IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color="burgundy">Sedžda</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                            Sedždu činimo stavljajući prvo koljena na tlo a zatim lice.Na sedždi učimo tri puta: <b>Subhane rabbijel-e ́ala</b>.
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
