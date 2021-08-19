import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonToolbar
  } from "@ionic/react";
  import React from "react";
import SurahListItem from "../../../components/SurahListItem";
import { translationService } from "../../../services/TranslationService";
  
  
  
  export const PearlsAyahPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/tabs/ChosenVerses" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="purple"
          >
            <IonCardTitle>
              <h1 className="lesson">{translationService.getLabel('label-pearls-header')}</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>{translationService.getLabel('label-pearls-quote')}</h3>
                <p className="quote-reference">{translationService.getLabel('label-pearls-quote-reference')}</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <div style={{marginLeft:"10px",marginRight:"10px"}}>
          
            <IonRow>
              <IonCol size="4">
                <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="1" lastAyahId="5" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="152" lastAyahId="157" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="177" lastAyahId="177" surahColor="razimic"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="285" lastAyahId="286" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="4" surahName="En-Nisa" firstAyahId="36" lastAyahId="41" surahColor="purple"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="11" surahName="Hud" firstAyahId="9" lastAyahId="11" surahColor="burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="16" surahName="En-Nahl" firstAyahId="96" lastAyahId="100" surahColor="dark-brown"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="17" surahName="El-Isra'" firstAyahId="23" lastAyahId="39" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="23" surahName="El-Mu'minun" firstAyahId="1" lastAyahId="11" surahColor="burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="31" surahName="Lukman" firstAyahId="16" lastAyahId="19" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="33" surahName="El-Azhab" firstAyahId="35" lastAyahId="35" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="49" surahName="El-Hugurat" firstAyahId="12" lastAyahId="13" surahColor="burgundy"/>
              </IonCol>
            </IonRow>
            
          </div>
        </IonContent>
      </IonPage>
    );
  };
  