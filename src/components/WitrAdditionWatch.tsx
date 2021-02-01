import { IonChip, IonCol, IonGrid, IonItem, IonNote, IonRow, IonSlide } from "@ionic/react"
import React from "react"

const WitrAdditionWatch: React.FC = ({ }) => {
    return(
        <>
        <IonSlide>
                <div>
                  <img
                    style={{ height: 350 }}
                    src="/assets/images/Tekbir.png"
                  />
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
                            <h2>Treći rekat</h2>
                          </IonNote>
                        </IonCol>
                      </IonRow>
                        <IonRow>
                          <IonCol size="12">
                            <IonChip color="burgundy">Tekbir</IonChip>
                          </IonCol>
                        </IonRow>

                        <IonRow>
                          <IonCol size="12">
                            <IonNote>
                              Podignemo ruke do ušiju i izgovorimo "Allahu
                              ekber".
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
                            <h2>Treći rekat</h2>
                          </IonNote>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12">
                          <IonChip color="burgundy">Kunut dova</IonChip>
                        </IonCol>
                      </IonRow>
        
                      <IonRow>
                        <IonCol size="12">
                          <IonNote>
                            Nakon tekbira učimo Kunut dovu
                          </IonNote>
                          
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            </>
    )
}
export default WitrAdditionWatch;