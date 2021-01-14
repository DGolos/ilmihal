import axios from "axios";

export interface TimeParams{
    fajr:string;
    sunrise:string;
    dhuhr:string;
    asr:string;
    maghrib:string;
    isha:string;
    currentGregorianDate:string;
    
}

class TimeService{
   
      
    /*getcurrentTimeParams():TimeParams{
        const response = axios.get("http://api.aladhan.com/v1/timingsByCity",{
            params: {
                city: "Cazin",
                country:"BA",
                method:2
              }});

        const params:TimeParams={
            fajr:response.data.timings.fajr,
            sunrise:response.data.timings.sunrise,
            dhuhr:response.data.timings.dhuhr,
            asr:response.data.timings.asr,
            maghrib:response.data.timings.maghrib,
            isha:response.data.timings.isha,
            currentGregorianDate:response.date.readable
        
        }
            return params;
            
        };*/
    
}

export const timeService = new TimeService();