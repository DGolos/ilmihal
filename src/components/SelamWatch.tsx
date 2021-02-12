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

  interface SalamWatchProps{
    rakah:string
  }
  
  const SelamWatch: React.FC<SalamWatchProps> = ({ rakah}) => {
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
                      <h2>{rakah==="2"?"Drugi rekat":"Četvrti rekat"}</h2>
                    </IonNote>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color="burgundy">Selam</IonChip>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                    Na kraju namaza predajemo selam izgovarajući <b>Es-selamu alejkum ve rahmetullah.</b>Selam prvo predajemo na desnu pa na lijevu stranu.
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
  