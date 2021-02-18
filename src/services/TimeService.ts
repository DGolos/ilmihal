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
    preDhuhr:number;
    dhuhr:number;
    preAsr:number;
    asr:number;
    preMaghrib:number;
    maghrib:number;
    isha:number;
    lastComputedDate:Date;

    constructor(){
        this.fajr=0;
        this.sunrise=0;
        this.preDhuhr=0;
        this.dhuhr=0;
        this.preAsr=0;
        this.asr=0;
        this.preMaghrib=0;
        this.maghrib=0;
        this.isha=0;
        this.lastComputedDate=new Date(1900,0,1);
    }
   

    isPeriodUpdated():boolean{
        const currentTime=new Date();

        return this.lastComputedDate.getFullYear()===currentTime.getFullYear() && this.lastComputedDate.getMonth()===currentTime.getMonth();
    }

    async init(){

        //const response=await axios.get("http://api.aladhan.com/v1/timingsByCity?city=Cazin&country=BA&method=2");
        
        
        //const fajrObj=moment(response.data.data.timings.Fajr,"H:m");
        const fajrObj=moment("5:39","H:m");
        this.fajr=fajrObj.hours()*3600+fajrObj.minutes()*60;
        
        //const sunriseObj=moment(response.data.data.timings.Sunrise,"H:m");
        const sunriseObj=moment("8:25","H:m");
        this.sunrise=sunriseObj.hours()*3600+sunriseObj.minutes()*60;
        
        //const dhuhrObj=moment(response.data.data.timings.Dhuhr,"H:m");
        const dhuhrObj=moment("12:11","H:m");
        this.dhuhr=dhuhrObj.hours()*3600+dhuhrObj.minutes()*60;

        this.preDhuhr=(this.dhuhr+this.sunrise)/2;
        
        //const asrObj=moment(response.data.data.timings.Asr,"H:m");
        const asrObj=moment("14:57","H:m");
        this.asr=asrObj.hours()*3600+asrObj.minutes()*60;

        this.preAsr=(this.asr+this.dhuhr)/2;

        //const maghribObj=moment(response.data.data.timings.Maghrib,"H:m");
        const maghribObj=moment("17:29","H:m");
        this.maghrib=maghribObj.hours()*3600+maghribObj.minutes()*60;
        
        this.preMaghrib=(this.maghrib+this.asr)/2;
        //const ishaObj=moment(response.data.data.timings.Isha,"H:m");
        const ishaObj=moment("18:55","H:m");
        this.isha=ishaObj.hours()*3600+ishaObj.minutes()*60;

        this.lastComputedDate=new Date();
        
    }

    getCurrentPeriod(){
        
        
        const currentTime=new Date();
        const timeStamp=currentTime.getHours()*3600+currentTime.getMinutes()*60;
        
        if(timeStamp<this.fajr)
            return "late-isha";
        if(timeStamp<this.sunrise)
            return "fajr";   
        if(timeStamp<this.preDhuhr)
            return "sunrise";
        if(timeStamp<this.preAsr)
            return "dhuhr";
        if(timeStamp<this.preMaghrib)
            return "asr";
        if(timeStamp<this.maghrib)
            return "late-asr"; 
        if(timeStamp<this.isha)
            return "maghrib"; 
        return "isha";
    }

    getFajrTime(){
        return this.fajr;
    }

    getDhuhrTime(){
        return this.dhuhr;
    }

    getAsrTime(){
        return this.asr;
    }

    getMaghribTime(){
        return this.maghrib;
    }

    getIshaTime(){
        return this.isha;
    }





    getPrayertimes(){
        
        
        return {
           
            fajr:this.fajr,
            dhuhr:this.dhuhr,
            asr:this.asr,
            maghrib:this.maghrib,
            isha:this.isha,
            period:this.getCurrentPeriod()
        }
    }
}

export const timeService = new TimeService();