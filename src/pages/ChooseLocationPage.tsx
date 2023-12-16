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
        "id": "117",
        "name": "Ålesund",
        "country": "NO"
      },
      {
        "id": "119",
        "name": "Arendal",
        "country": "NO"
      },
      {
        "id": "123",
        "name": "Bergen/Førde",
        "country": "NO"
      },
      {
        "id": "124",
        "name": "Bodø",
        "country": "NO"
      },
      {
        "id": "128",
        "name": "Drammen",
        "country": "NO"
      },
      {
        "id": "134",
        "name": "Gjøvik/Lillehammer",
        "country": "NO"
      },
      {
        "id": "142",
        "name": "Harstad",
        "country": "NO"
      },
      {
        "id": "143",
        "name": "Haugesund",
        "country": "NO"
      },
      {
        "id": "151",
        "name": "Kirkenes",
        "country": "NO"
      },
      {
        "id": "153",
        "name": "Kongsvinger",
        "country": "NO"
      },
      {
        "id": "308",
        "name": "Kristiansand",
        "country": "NO"
      },
      {
        "id": "167",
        "name": "Lyngdal",
        "country": "NO"
      },
      {
        "id": "181",
        "name": "Oslo",
        "country": "NO"
      },
      {
        "id": "190",
        "name": "Sandefjord/Horten",
        "country": "NO"
      },
      {
        "id": "193",
        "name": "Østfold",
        "country": "NO"
      },
        
      {
        "id": "196",
        "name": "Skien",
        "country": "NO"
      },
      
      {
        "id": "200",
        "name": "Stavanger",
        "country": "NO"
      },
  
      {
        "id": "208",
        "name": "Tromsø",
        "country": "NO"
      },
   
      {
        "id": "209",
        "name": "Trondheim",
        "country": "NO"
      },
      
    ]

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
