import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"

export const FajrPrayerDetailsPage: React.FC<RouteComponentProps<{ type: string }>> = ({ match }) => {
    const[current,setCurrent]=useState(1);
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="prayer">
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/FajrPrayerPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <div className="ion-padding">
            <IonLabel>
              <h1 className="prayer-description">Kako se klanja Sabah namaz</h1>
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonButton
                    color={current === 1 ? "burgundy" : "brown"}
                    shape="round"
                    expand="full"
                    onClick={() => setCurrent(1)}
                  >
                    <IonLabel color="light" className="ion-text-center">
                      Objašnjenje
                    </IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton
                    color={current === 2 ? "burgundy" : "brown"}
                    shape="round"
                    expand="full"
                    onClick={() => setCurrent(2)}
                  >
                    <IonLabel color="light" className="ion-text-center">
                      Pogledaj
                    </IonLabel>
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                <IonText>
                  <h1 className="prayer-description">{match.params.type==="sunnah"?"Sunet":"Farz"}</h1>
               </IonText>
                </IonCol>
                <IonCol size="6" className="aligh-right">
                <IonText >
                  <h2>2 rekata</h2>
                </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            
            
          </div>
          <div>
            <IonSlides>
              <IonSlide>
                <IonItem
                  key="1"
                  detail={false}
                  color="light"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                  
                >
                  <IonGrid className="ion-text-left">
                    <IonRow>
                      <IonCol size="12">
                        <IonChip  color="burgundy">Prije namaza</IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonText><h2>Nijet</h2></IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Nijet je svjesna odluka u srcu zašto nešto činimo.Prilikom izgovaranja nijeta svoje misli usmjeravamo Uzvišenom Allahu.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote hidden={match.params.type!=="sunnah"}>
                        Sabahski sunnet se zanijeti ovako:Nevejtu en usallije lillahi teala salate sunnetil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                        <IonNote hidden={match.params.type==="sunnah"}>
                        Sabahski farz se zanijeti ovako:Nevejtu en usallije lillahi teala salate fardil-fedžri edaen mustakbilel-kibleti - Allahu ekber.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
              <IonSlide>
                <IonItem
                  key="1"
                  detail={false}
                  lines="none"
                  color="light"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  <IonGrid className="ion-text-left">
                  <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          <h2>Prvi rekat</h2>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Tekbir</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow >
                      <IonCol size="12">
                        <IonNote>
                          Podignemo ruke do ušiju i izgovorimo "Allahu ekber".To je znak da je namaz počeo.Nakon tekbira proučimo subhaneke,euzu i bismillu.  
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="6">
                        <IonText className="audio-link">Subhaneke</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      <IonCol size="6">
                        <IonText className="audio-link">Euza i bismilla</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Fatiha</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Suru El-Fatiha je obavezno učiti na svakom rekatu.Ako se ona ne prouči namaz nije važeći.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="12">
                        <IonText className="audio-link">El-Fatiha</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Sura</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Nakon sure El-Fatiha proučimo jednu kraću suru ili najmanje 3 ajeta iz duže sure.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonCol size="4">
                        <IonText className="audio-link">En-Nas</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      <IonCol size="4">
                        <IonText className="audio-link">El-Felek</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      <IonCol size="4">
                        <IonText className="audio-link">El-Ihlas</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Ruk'u</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Na ruku'u (pregibanju) učimo tri puta: Subhane rabbijel-azim. Dižući se s ruku'a izgovaramo:Semiallahu limen hamideh, zatim malo zastanemo i reknemo: Rabbena lekel-hamd.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="12">
                        <IonText className="audio-link">Ruk'u</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Sedžda</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Na sedždi (spuštanje lica na tlo) učimo tri puta: Subhane rabbijel-e ́ala.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow >
                      <IonCol size="12">
                        <IonText className="audio-link">Sedžda</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                  </IonGrid>
                  
                </IonItem>
              </IonSlide>
              <IonSlide>
                <IonItem
                  key="1"
                  detail={false}
                  lines="none"
                  color="light"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  <IonGrid className="ion-text-left">
                  <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          <h2>Drugi rekat</h2>
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Bismilla</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="12">
                        <IonNote>
                          Bismillahir-rahmanir-rahim.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Fatiha</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Suru El-Fatiha je obavezno učiti na svakom rekatu.Ako se ona ne prouči namaz nije važeći.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="12">
                        <IonText className="audio-link">El-Fatiha</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Sura</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                          Nakon sure El-Fatiha proučimo jednu kraću suru ili najmanje 3 ajeta iz duže sure.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonCol size="4">
                        <IonText className="audio-link">En-Nas</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      <IonCol size="4">
                        <IonText className="audio-link">El-Felek</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      <IonCol size="4">
                        <IonText className="audio-link">El-Ihlas</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Ruku</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Na ruku'u (pregibanju) učimo tri puta: Subhane rabbijel-azim. Dižući se s ruku'a izgovaramo:Semiallahu limen hamideh, zatim malo zastanemo i reknemo: Rabbena lekel-hamd.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ayah">
                      <IonCol size="12">
                        <IonText className="audio-link">Ruk'u</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="burgundy">
                          <IonLabel>Sedžda</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonNote>
                        Na sedždi (spuštanje lica na tlo) učimo tri puta: Subhane rabbijel-e ́ala.
                        </IonNote>
                      </IonCol>
                    </IonRow>
                    <IonRow >
                      <IonCol size="12">
                        <IonText className="audio-link">Sedžda</IonText>
                        <IonButton class="no-shadow" onClick={() => {}} fill="solid" color="light">
                          <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
                        </IonButton>
                      </IonCol>
                      
                    </IonRow>
                  </IonGrid>
                </IonItem>
              </IonSlide>
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default FajrPrayerDetailsPage;