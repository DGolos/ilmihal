import axios from "axios";
import moment from "moment";
import { storageService } from "./StorageService";
import { translationService } from "./TranslationService";

export interface DailyPrayer {
  city: string;
  day: number;
  month: number;
  year:number;
  monthText: string;
  islamicDate:string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
 
}

export interface DailyPrayerShort{
  day: number;
  fajr:string;
  dhuhr:string,
  asr:string,
  maghrib:string,
  isha:string;
  
}

export interface PrayersProps {
  startOfFast: string;
  fajr: string;
  sunrise:string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  period: string;
  headers: string[];
  city:string;
  country:string;
}

interface Location{
  id:string;
  name:string;
  country:string;
}

export interface prayerStorage{
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const cityMap: Map<string, string> = new Map([
  ['Alesund', "117"],
  ['Areandal', "119"],
  ['Bergen', "123"],
  ['Bodo', "124"],
  ['Drammen', "128"],
  ['Gjøvik', "134"],
  ['Harstad', "142"],
  ['Haugesund', "143"],
  ['Kirkenes', "151"],
  ['Kongsvinger', "153"],
  ['Kristiansand', "328"],
  ['Lyngdal', "167"],
  ['Oslo', "181"],
  ['Sandefjord-Horten', "190"],
  ['Sarpsborg', "193"],
  ['Skien', "196"],
  ['Stavanger', "200"],
  ['Tromsø', "208"],
  ['Trondheim', "209"],
]);

class TimeService {
  
  fajrSeconds = 0;
  sunriseSeconds = 0;
  preDhuhrSeconds: number = 0;
  dhuhrSeconds = 0;
  preAsrSeconds: number = 0;
  asrSeconds = 0;
  preMaghribSeconds: number = 0;
  maghribSeconds = 0;
  preIshaSeconds = 0;
  ishaSeconds = 0;
  currentDayOfWeek= -1;
  currentLocation:Location={id:"",name:"",country:""};
  currentDay:DailyPrayer={city:"",day:1,month:1,year:2024,monthText:"",islamicDate:"",fajr:"",sunrise:"",dhuhr:"",asr:"",maghrib:"",isha:""};
  currentPrayerTime="";
  async calculatePrayertimes() {
    
    const fajrObj = moment(this.currentDay.fajr, "H:m");
    this.fajrSeconds = fajrObj.hours() * 3600 + fajrObj.minutes() * 60;
    
    const sunriseObj = moment(this.currentDay.sunrise, "H:m");
    this.sunriseSeconds = sunriseObj.hours() * 3600 + sunriseObj.minutes() * 60;
    
    const dhuhrObj = moment(this.currentDay.dhuhr, "H:m");
    this.dhuhrSeconds = dhuhrObj.hours() * 3600 + dhuhrObj.minutes() * 60;
    this.preDhuhrSeconds = (this.dhuhrSeconds + this.sunriseSeconds) / 2;

    const asrObj = moment(this.currentDay.asr, "H:m");
    this.asrSeconds = asrObj.hours() * 3600 + asrObj.minutes() * 60;
    this.preAsrSeconds = (this.asrSeconds + this.dhuhrSeconds) / 2;

    const maghribObj = moment(this.currentDay.maghrib, "H:m");
    this.maghribSeconds = maghribObj.hours() * 3600 + maghribObj.minutes() * 60;
    this.preMaghribSeconds = (this.maghribSeconds + this.asrSeconds) / 2;

    const ishaObj = moment(this.currentDay.isha, "H:m");
    this.ishaSeconds = ishaObj.hours() * 3600 + ishaObj.minutes() * 60;
    this.preIshaSeconds = (this.ishaSeconds + this.maghribSeconds) / 2;
    this.currentDayOfWeek = new Date().getDay();
  }

  async getTimesFromStorage(){
    /*const prayerObj=await storageService.get("prayerData");
    const prayerStrings:prayerStorage=JSON.parse(prayerObj!);
    this.fajr=prayerStrings?.fajr;
    this.sunrise=prayerStrings?.sunrise;
    this.dhuhr=prayerStrings?.dhuhr;
    this.asr=prayerStrings?.asr;
    this.maghrib=prayerStrings?.maghrib;
    this.isha=prayerStrings?.isha;*/

    this.calculatePrayertimes();
  }

  async updateStorage(){
    storageService.set("prayerData",{fajr:this.currentDay.fajr,sunrise:this.currentDay.sunrise,dhuhr:this.currentDay.dhuhr,asr:this.currentDay.asr,maghrib:this.currentDay.maghrib,isha:this.currentDay.isha});
  }

  async init() {
    try{

      const locationObj=await storageService.get("locationData");
      this.currentLocation=JSON.parse(locationObj!);

      const currentDate = new Date();

      this.currentDay.day=currentDate.getDate();
      this.currentDay.month=currentDate.getMonth()+1;
      this.currentDay.year=currentDate.getFullYear();
      this.currentDay.monthText=translationService.getLabel(`label-month-${this.currentDay.month}`);
    
      if(this.currentLocation.country==="NO")
      {
          if(isNaN(+this.currentLocation.id)){
            this.currentLocation.id=cityMap.get(this.currentLocation.id)!;
            storageService.set("locationData",this.currentLocation);
          }
          
          const response = await axios.get(`https://api.bonnetid.no/prayertimes/${this.currentLocation.id}/${currentDate.getFullYear()}/${currentDate.getMonth()+1}/${currentDate.getDate()}`,
            {
              headers: {
                  'Api-Token': '213c2f4d-792e-4ccc-85aa-b3eef7aa1c20'
              }
          });
          
          this.currentDay.fajr=response.data.fajr;
          this.currentDay.sunrise=response.data.shuruq_sunrise;
          this.currentDay.dhuhr=response.data.duhr;
          this.currentDay.asr=response.data.asr;
          this.currentDay.maghrib=response.data.maghrib;
          this.currentDay.isha=response.data.isha;
        
          const islamicDate:string=response.data.hijri_date;
          
          const dateParts=islamicDate.split('-');
          this.currentDay.islamicDate=`${dateParts[0]} ${this.getIslamicMonth(+dateParts[1])} ${dateParts[2]}`;
          
          
          
          
      }


      else if(this.currentLocation.country==="BA"){
        
        var timeTable: string[]=[];
        const response = await axios.get(`https://api.vaktija.ba/vaktija/v1/${this.currentLocation.id}`);
        timeTable= response.data.vakat;
        this.currentDay.fajr = timeTable[0];
        this.currentDay.sunrise = timeTable[1];
        this.currentDay.dhuhr = timeTable[2];
        this.currentDay.asr = timeTable[3];
        this.currentDay.maghrib = timeTable[4];
        this.currentDay.isha = timeTable[5];
        this.currentDay.islamicDate=response.data.datum[0];
  
      }      
      this.currentDay.city=this.currentLocation.name;
      this.calculatePrayertimes();
      this.updateStorage();
    }
    catch(e){
      this.getTimesFromStorage();
    }
        
    
  }

  getCurrentPeriod() {
    const currentTime = new Date();
    const timeStamp =
      currentTime.getHours() * 3600 + currentTime.getMinutes() * 60;

    if (timeStamp < this.fajrSeconds) return "late-isha";
    if (timeStamp < this.sunriseSeconds) return "fajr";
    if (timeStamp < this.preDhuhrSeconds) return "sunrise";
    if (timeStamp < this.preAsrSeconds) return "dhuhr";
    if (timeStamp < this.preMaghribSeconds) return "asr";
    if (timeStamp < this.maghribSeconds) return "late-asr";
    if (timeStamp < this.preIshaSeconds) return "maghrib";
    return "isha";
  }

  formatTime(duration: number): string {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration / 60) % 60);

    let ret = "";

    if (hours > 0) {
      if (hours === 1) {
        ret += `1 ${translationService.getLabel("label-hour")} `;
      } else {
        ret += `${hours} ${translationService.getLabel("label-hours")} `;
      }
    }

    if (minutes > 0) {
      if (minutes % 10 === 0) {
        ret += `${minutes} ${translationService.getLabel(
          "label-minute-acusativ"
        )}`;
      } else {
        ret += `${minutes} ${translationService.getLabel(
          "label-minute-genitiv"
        )}`;
      }
    }

    return ret;
  }

  getHeaders() {
    const currentTime = new Date();
    const timeStamp =
      currentTime.getHours() * 3600 + currentTime.getMinutes() * 60;

    let headers: any[] = [];

    if (timeStamp < this.fajrSeconds) {
      headers.push("label-fajr-prayer");
      headers.push((this.fajrSeconds - timeStamp).toString());
    } else if (
      timeStamp >= this.fajrSeconds &&
      timeStamp < this.sunriseSeconds
    ) {
      headers.push("label-fajr-prayer");
      this.currentPrayerTime=this.currentDay.fajr;
    } else if (
      timeStamp >= this.sunriseSeconds &&
      timeStamp < this.preDhuhrSeconds
    ) {
      headers.push("label-no-prayer");
      headers.push(0);
    } else if (
      timeStamp >= this.preDhuhrSeconds &&
      timeStamp < this.dhuhrSeconds
    ) {
      headers.push("label-dhuhr-prayer");
      headers.push((this.dhuhrSeconds - timeStamp).toString());
      
    } else if (
      timeStamp >= this.dhuhrSeconds &&
      timeStamp < this.preAsrSeconds
    ) {
      headers.push("label-dhuhr-prayer");
      this.currentPrayerTime=this.currentDay.dhuhr;
    } else if (timeStamp >= this.preAsrSeconds && timeStamp < this.asrSeconds) {
      headers.push("label-asr-prayer");
      headers.push((this.asrSeconds - timeStamp).toString());
    } else if (
      timeStamp >= this.asrSeconds &&
      timeStamp < this.preMaghribSeconds
    ) {
      headers.push("label-asr-prayer");
      this.currentPrayerTime=this.currentDay.asr;
    } else if (
      timeStamp >= this.preMaghribSeconds &&
      timeStamp < this.maghribSeconds
    ) {
      headers.push("label-maghrib-prayer");
      headers.push((this.maghribSeconds - timeStamp).toString());
    } else if (
      timeStamp >= this.maghribSeconds &&
      timeStamp < this.preIshaSeconds
    ) {
      headers.push("label-maghrib-prayer");
      this.currentPrayerTime=this.currentDay.maghrib;
    } else if (
      timeStamp >= this.preIshaSeconds &&
      timeStamp < this.ishaSeconds
    ) {
      headers.push("label-isha-prayer");
      headers.push((this.ishaSeconds - timeStamp).toString());
    } else if (timeStamp >= this.ishaSeconds) {
      headers.push("label-isha-prayer");
      this.currentPrayerTime=this.currentDay.isha;
    }
    
    return headers;
  }

  getFajrTime() {
    return this.currentDay.fajr;
  }

  getDhuhrTime() {
    return this.currentDay.dhuhr;
  }

  getAsrTime() {
    return this.currentDay.asr;
  }

  getMaghribTime() {
    return this.currentDay.maghrib;
  }

  getIshaTime() {
    return this.currentDay.isha;
  }

  getFormattedDate(){
    return `${this.currentDay.day} ${this.currentDay.monthText} ${this.currentDay.year}`;
  }

  getFormattedIslamicDate(){
    return this.currentDay.islamicDate;
    
  }

  getIslamicMonth(month:number):string
  {
    if (month === 1) return "Muharem";
    else if (month === 2) return "Safer";
    else if (month === 3) return "Rebi-ul-evel";
    else if (month === 4) return "Rebi-ul-ahir";
    else if (month === 5) return "Džumade-ul-ula";
    else if (month === 6) return "Džumade-ul-uhra";
    else if (month === 7) return "Redžeb";
    else if (month === 8) return "Saban";
    else if (month === 9) return "Ramazan";
    else if (month === 10) return "Ševal";
    else if (month === 11) return "Zul-kade";
    else if (month === 12) return "Zul-hidždže";
    else return "";
  }

  getRemainingtime(){
    const currentTime = new Date();
    const timeStamp =
      currentTime.getHours() * 3600 + currentTime.getMinutes() * 60+currentTime.getSeconds();

    if (timeStamp < this.fajrSeconds) {
      
      return this.fajrSeconds - timeStamp;
    } else if (
      timeStamp >= this.fajrSeconds &&
      timeStamp < this.sunriseSeconds
    ) {
      return 0;
    } else if (
      timeStamp >= this.sunriseSeconds &&
      timeStamp < this.preDhuhrSeconds
    ) {
      return 0;
    } else if (
      timeStamp >= this.preDhuhrSeconds &&
      timeStamp < this.dhuhrSeconds
    ) {
      
      return this.dhuhrSeconds - timeStamp;
      
    } else if (
      timeStamp >= this.dhuhrSeconds &&
      timeStamp < this.preAsrSeconds
    ) {
      return 0;
    } else if (timeStamp >= this.preAsrSeconds && timeStamp < this.asrSeconds) {
      
      return this.asrSeconds - timeStamp;
    } else if (
      timeStamp >= this.asrSeconds &&
      timeStamp < this.preMaghribSeconds
    ) {
      return 0;
    } else if (
      timeStamp >= this.preMaghribSeconds &&
      timeStamp < this.maghribSeconds
    ) {
      console.log(this.maghribSeconds - timeStamp);
      return this.maghribSeconds - timeStamp;
      
    } else if (
      timeStamp >= this.maghribSeconds &&
      timeStamp < this.preIshaSeconds
    ) {
      return 0;
    } else if (
      timeStamp >= this.preIshaSeconds &&
      timeStamp < this.ishaSeconds
    ) {
      return this.ishaSeconds - timeStamp;
      
    } else if (timeStamp >= this.ishaSeconds) {
      return 0;
    }
    
    return 0;
  }

  async getPrayertimes() {
    if(this.currentDayOfWeek!==new Date().getDay()){
      this.init();
    }
    return {
      startOfFast: this.currentDay.fajr,
      fajr: this.currentDay.fajr,
      sunrise:this.currentDay.sunrise,
      dhuhr: this.currentDay.dhuhr,
      asr: this.currentDay.asr,
      maghrib: this.currentDay.maghrib,
      isha: this.currentDay.isha,
      period: this.getCurrentPeriod(),
      headers: this.getHeaders(),
      city:this.currentLocation.name,
      country:this.currentLocation.country,
    };
  }

  getCurrentPrayertime(){
    return this.currentPrayerTime;
  }

  async getPrayerTimesByMonth(month:number):Promise<DailyPrayerShort[]>{
    const currentDate = new Date();
    let dailyPrayers:DailyPrayerShort[]=[];
    const response = await axios.get(`https://api.bonnetid.no/prayertimes/${this.currentLocation.id}/${currentDate.getFullYear()}/${month}`,
            {
              headers: {
                  'Api-Token': '213c2f4d-792e-4ccc-85aa-b3eef7aa1c20'
              }
          });
    
        for (let day of response.data) {
          
          dailyPrayers.push(
            {
              day:1,
              fajr:day.fajr,
              dhuhr:day.duhr,
              asr:day.asr,
              maghrib:day.maghrib,
              isha:day.isha
            }
          );
      }
    
      return dailyPrayers;
    
  }
}

export const timeService = new TimeService();