import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonToolbar
  } from "@ionic/react";
  import React from "react";
import SurahListItem from "../../../components/SurahListItem";
import { translationService } from "../../../services/TranslationService";
  
  
  
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
            color="burgundy"
          >
            <IonCardTitle>
              <h1 className="lesson">{translationService.getLabel('label-ruby-header')}</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>{translationService.getLabel('label-ruby-quote')}</h3>
                <p className="quote-reference">{translationService.getLabel('label-ruby-quote-reference')}</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          
            <div style={{marginLeft:"10px",marginRight:"10px"}}>
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
              <SurahListItem surahId="3" surahName="Ali 'Imran"  firstAyahId="18" lastAyahId="19" surahColor="burgundy"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="3" surahName="Ali 'Imran" firstAyahId="189" lastAyahId="192" surahColor="burgundy"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="6" surahName="El-'Anam" firstAyahId="95" lastAyahId="104" surahColor="dark-brown"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="10" surahName="Junus" firstAyahId="104" lastAyahId="109" surahColor="razimic"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="13" surahName="Er-R'ad" firstAyahId="8" lastAyahId="18" surahColor="purple"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
              <SurahListItem surahId="24" surahName="En-Nur" firstAyahId="35" lastAyahId="38" surahColor="purple"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="57" surahName="El-Hadid" firstAyahId="1" lastAyahId="3" surahColor="purple"/>
              </IonCol>
              <IonCol size="4">
              <SurahListItem surahId="59" surahName="El-Hašr" firstAyahId="22" lastAyahId="24" surahColor="dark-brown"/>
              </IonCol>
            </IonRow>
            
            
          </div>
        </IonContent>
      </IonPage>
    );
  };
  