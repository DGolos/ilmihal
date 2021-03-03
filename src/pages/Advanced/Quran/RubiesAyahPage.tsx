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
  import React, { useEffect, useState } from "react";
import SurahListItem from "../../../components/SurahListItem";
  
  
  
  export const RubiesAyahPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/ChosenVerses"/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="purple"
          >
            <IonCardTitle>
              <h1 className="lesson">Rubini</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>"Ovo su ajeti mudre Knjige"</h3>
                <p className="quote-reference">Kur'an 10:1</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="30" lastAyahId="39" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="163" lastAyahId="164" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="2" surahName="El-Bekare" firstAyahId="255" lastAyahId="255" surahColor="razimic"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="3" surahName="Ali 'Imran" firstAyahId="1" lastAyahId="6" surahColor="burgundy"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="3" surahName="Ali 'Imran" firstAyahId="18" lastAyahId="19" surahColor="burgundy"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="3" surahName="Ali 'Imran" firstAyahId="189" lastAyahId="192" surahColor="burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="6" surahName="El-'Anam" firstAyahId="95" lastAyahId="104" surahColor="brown"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="10" surahName="Hud" firstAyahId="104" lastAyahId="109" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="13" surahName="Er-R'ad" firstAyahId="8" lastAyahId="18" surahColor="purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="24" surahName="En-Nur" firstAyahId="35" lastAyahId="37" surahColor="purple"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="57" surahName="El-Hadid" firstAyahId="1" lastAyahId="3" surahColor="purple"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="59" surahName="El-Hašr" firstAyahId="22" lastAyahId="24" surahColor="brown"/>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  