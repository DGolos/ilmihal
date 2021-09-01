import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
  useIonViewWillEnter,
} from "@ionic/react";
import { storageService } from "../services/StorageService";
import { useHistory } from "react-router";
import { timeService } from "../services/TimeService";
import { checkmarkOutline } from "ionicons/icons";
interface Location {
  id: string;
  name: string;
  country: string;
}

const ChooseLocationPage: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const history = useHistory();

  const [bosnianCities, setBosnianCities] = useState<Location[]>([]);
  const [norwegianCities, setNorwegianCities] = useState<Location[]>([]);
  const save = () => {
    storageService.set("locationData", {
      id: currentLocation?.id,
      name: currentLocation?.name,
      country: currentLocation?.country,
    });
    timeService.init().then(()=>{
      history.push("/tabs/HomePage");
    });
    
  };
  const loadLocations = () => {
    const baCities: Location[] = [
      {
        id: "77",
        name: "Sarajevo",
        country: "BA",
      },
      {
        id: "61",
        name: "Mostar",
        country: "BA",
      },
      {
        id: "102",
        name: "Zenica",
        country: "BA",
      },
      {
        id: "93",
        name: "Tuzla",
        country: "BA",
      },
      {
        id: "1",
        name: "Banja Luka",
        country: "BA",
      },
      {
        id: "2",
        name: "Bihać",
        country: "BA",
      },
      {
        id: "97",
        name: "Visoko",
        country: "BA",
      },
      {
        id: "71",
        name: "Prijedor",
        country: "BA",
      },
      {
        id: "33",
        name: "Gorazde",
        country: "BA",
      },
      {
        id: "90",
        name: "Travnik",
        country: "BA",
      },
      {
        id: "16",
        name: "Bugojno",
        country: "BA",
      },
      {
        id: "83",
        name: "Stolac",
        country: "BA",
      },
      {
        id: "50",
        name: "Konjic",
        country: "BA",
      },
    ];

    const noCities: Location[] = [
      {
        id: "Trondheim",
        name: "Trondheim",
        country: "NO",
      },
      {
        id: "Alesund",
        name: "Ålesund",
        country: "NO",
      },
      {
        id: "Bergen",
        name: "Bergen",
        country: "NO",
      },
      {
        id: "Haugesund",
        name: "Haugesund",
        country: "NO",
      },
      {
        id: "Stavanger",
        name: "Stavanger",
        country: "NO",
      },
      {
        id: "Bryne",
        name: "Bryne",
        country: "NO",
      },
      {
        id: "Kristiansand",
        name: "Kristiansand",
        country: "NO",
      },
      {
        id: "Arendal",
        name: "Arendal",
        country: "NO",
      },
      {
        id: "Skien",
        name: "Skien",
        country: "NO",
      },
      {
        id: "Sandefjord",
        name: "Sandefjord/Horten",
        country: "NO",
      },
      {
        id: "Drammen",
        name: "Drammen",
        country: "NO",
      },
      {
        id: "Oslo",
        name: "Oslo",
        country: "NO",
      },
      {
        id: "Sarpsborg",
        name: "Østfold",
        country: "NO",
      },
      {
        id: "Lillehammer",
        name: "Lillehammer",
        country: "NO",
      },
      {
        id: "Tromsø",
        name: "Tromsø",
        country: "NO",
      },
      {
        id: "Bodo",
        name: "Bodø",
        country: "NO",
      },
      {
        id: "Harstad",
        name: "Harstad",
        country: "NO",
      },
      {
        id: "Kirkenes",
        name: "Kirkenes",
        country: "NO",
      },
      {
        id: "Kongsvinger",
        name: "Kongsvinger",
        country: "NO",
      },
      {
        id: "Hamar",
        name: "Gjøvik",
        country: "NO",
      },
    ];

    setBosnianCities(baCities);
    setNorwegianCities(noCities);
  };
  useIonViewWillEnter(() => {
    loadLocations();
  });
  const bosnianCitiesListItems = bosnianCities.map((city) => (
    <IonItem
      lines="full"
      className="lesson-note"
      onClick={() => {
        setCurrentLocation(city);
      }}
      
    >
      <IonText slot="start">
        <h2 className="black" style={{ fontSize: "18px", fontWeight: "bold" }}>{city.name}</h2>
      </IonText>
      <IonIcon className="black" slot="end" hidden={city.id!==currentLocation?.id}
                    
                    icon={checkmarkOutline}
                    
                  />
    </IonItem>
  ));
  const norwegianCitiesListItems = norwegianCities.map((city) => (
    <IonItem
      lines="full"
      className="lesson-note"
      onClick={() => {
        setCurrentLocation(city);
      }}
    >
      <IonText slot="start">
        <h2 className="black" style={{ fontSize: "18px", fontWeight: "bold" }}>{city.name}</h2>
      </IonText>
      <IonIcon className="black" slot="end" hidden={city.id!==currentLocation?.id}
                    
                    icon={checkmarkOutline}
                    
                  />
    </IonItem>
  ));
  return (
    <IonPage>
      <IonContent className="bg-image-purple" fullscreen>
        <div className="ion-padding">
          <IonRadioGroup>
            <IonItem className="welcome">
              <IonLabel>Bosna i Hercegovina</IonLabel>
              <IonRadio
                value="BA"
                onClick={() => {
                  setCurrentCountry("BA");
                }}
              />
            </IonItem>
            <IonItem className="welcome">
              <IonLabel>Norge</IonLabel>
              <IonRadio
                value="NO"
                onClick={() => {
                  setCurrentCountry("NO");
                }}
              />
            </IonItem>
          </IonRadioGroup>
        </div>
        
        <div className="ion-padding" hidden={currentCountry !== "BA"}>
        <IonList className="transparent">
          {bosnianCitiesListItems}
          </IonList>
        </div>
        
       
        <div className="ion-padding" hidden={currentCountry !== "NO"}>
        <IonList className="transparent">
          {norwegianCitiesListItems}
          </IonList>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonButton
                className="pressed"
                expand="block"
                size="large"
                shape="round"
                onClick={() => {
                  save();
                }}
                disabled={currentLocation === null || currentCountry === ""}
              >
                <IonLabel color="light" className="ion-text-center">
                  Početna/ Hjemmeside
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      
        
      
    </IonPage>
  );
};

export default ChooseLocationPage;
