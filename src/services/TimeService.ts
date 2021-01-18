import axios from "axios";
import moment from "moment";


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
   
    fajr:number; 
    sunrise:number;
    dhuhr:number;
    asr:number;
    maghrib:number;
    isha:number;    
    lastComputedDate:Date;

    constructor(){
        this.fajr=0;
        this.sunrise=0;
        this.dhuhr=0;
        this.asr=0;
        this.maghrib=0;
        this.isha=0;
        this.lastComputedDate=new Date(1900,0,1);
    }
   

    isPeriodUpdated():boolean{
        const currentTime=new Date();

        return this.lastComputedDate.getFullYear()===currentTime.getFullYear() && this.lastComputedDate.getMonth()===currentTime.getMonth();
    }

    async updatePeriod(){

        console.log("Updating");
        const response=await axios.get("http://api.aladhan.com/v1/timingsByCity?city=Cazin&country=BA&method=2");
        
        
        const fajrObj=moment(response.data.data.timings.Fajr,"H:m");
        this.fajr=fajrObj.hours()*3600+fajrObj.minutes()*60;
        
        const sunriseObj=moment(response.data.data.timings.Sunrise,"H:m");
        this.sunrise=sunriseObj.hours()*3600+sunriseObj.minutes()*60;
        
        const dhuhrObj=moment(response.data.data.timings.Dhuhr,"H:m");
        this.dhuhr=dhuhrObj.hours()*3600+dhuhrObj.minutes()*60;
        
        const asrObj=moment(response.data.data.timings.Asr,"H:m");
        this.asr=asrObj.hours()*3600+asrObj.minutes()*60;

        const maghribObj=moment(response.data.data.timings.Maghrib,"H:m");
        this.maghrib=maghribObj.hours()*3600+maghribObj.minutes()*60;
        

        const ishaObj=moment(response.data.data.timings.Isha,"H:m");
        this.isha=ishaObj.hours()*3600+ishaObj.minutes()*60;

        this.lastComputedDate=new Date();
        
    }

    getCurrentPeriod(){
        if(!this.isPeriodUpdated())
        this.updatePeriod();
        
        const currentTime=new Date();
        const timeStamp=currentTime.getHours()*3600+currentTime.getMinutes()*60;
        console.log(this.fajr);

        if(timeStamp<this.fajr)
            return "isha";
        if(timeStamp<this.sunrise)
            return "fajr";   
        if(timeStamp<this.dhuhr)
            return "dhuhr"; 
        if(timeStamp<this.asr)
            return "asr"; 
        if(timeStamp<this.maghrib)
            return "maghrib"; 
        return "isha";
    }

    getPrayertimes(){
        if(!this.isPeriodUpdated())
        this.updatePeriod();
        
        return {
           
            fajr:this.fajr,
            dhuhr:this.dhuhr,
            asr:this.asr,
            maghrib:this.maghrib,
            isha:this.isha,
        }
    }
}

export const timeService = new TimeService();