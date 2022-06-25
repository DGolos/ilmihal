import axios from "axios";
import moment from "moment";
import {Location} from "../hooks/useLocation";
import { storageService } from "./StorageService";
import { translationService } from "./TranslationService";

export interface DailyPrayer {
  city: string;
  day: number;
  month: number;
  monthText: string;
  islamicDay: number;
  islamisMonth: string;
  isJummah: false;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  holyday: string;
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

export interface prayerStorage{
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}
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
  lastComputedDate: Date = new Date(1900, 0, 1);
  currentLocation:Location={id:"",name:"",country:""};
  daylyPrayers:DailyPrayer[]=[];
  currentDay:DailyPrayer={city:"",day:1,month:1,monthText:"",islamicDay:1,islamisMonth:"",isJummah:false,fajr:"",sunrise:"",dhuhr:"",asr:"",maghrib:"",isha:"",holyday:""};

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
    this.lastComputedDate = new Date();
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
      
      const dailyPrayersBody=await fetch("assets/data/times.json").then(response=>response.json());
      this.daylyPrayers = JSON.parse(JSON.stringify(dailyPrayersBody));

      const currentDate = new Date();

      const day=this.daylyPrayers.find(item=>item.city===this.currentLocation.id && item.day===currentDate.getDate() && item.month===currentDate.getMonth()+1);

      
      this.currentDay.city=day?.city!;
      this.currentDay.day=day?.day!;
      this.currentDay.month=day?.month!;
      this.currentDay.monthText=day?.monthText!;
      this.currentDay.islamicDay=day?.islamicDay!;
      this.currentDay.islamisMonth=day?.islamisMonth!;
      this.currentDay.isJummah=day?.isJummah!;
      this.currentDay.fajr=day?.fajr!;
      this.currentDay.sunrise=day?.sunrise!;
      this.currentDay.dhuhr=day?.dhuhr!;
      this.currentDay.asr=day?.asr!;
      this.currentDay.maghrib=day?.maghrib!;
      this.currentDay.isha=day?.isha!;
      this.currentDay.holyday=day?.holyday!;

      
     
      
      if(this.currentLocation.country==="BA"){
        
        var timeTable: string[]=[];
        const response = await axios.get(`https://api.vaktija.ba/vaktija/v1/${this.currentLocation.id}`);
        timeTable= response.data.vakat;
        this.currentDay.fajr = timeTable[0];
        this.currentDay.sunrise = timeTable[1];
        this.currentDay.dhuhr = timeTable[2];
        this.currentDay.asr = timeTable[3];
        this.currentDay.maghrib = timeTable[4];
        this.currentDay.isha = timeTable[5];
  
      }      
      
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
      headers.push(0);
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
      headers.push(0);
    } else if (timeStamp >= this.preAsrSeconds && timeStamp < this.asrSeconds) {
      headers.push("label-asr-prayer");
      headers.push((this.asrSeconds - timeStamp).toString());
    } else if (
      timeStamp >= this.asrSeconds &&
      timeStamp < this.preMaghribSeconds
    ) {
      headers.push("label-asr-prayer");
      headers.push(0);
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
      headers.push(0);
    } else if (
      timeStamp >= this.preIshaSeconds &&
      timeStamp < this.ishaSeconds
    ) {
      headers.push("label-isha-prayer");
      headers.push((this.ishaSeconds - timeStamp).toString());
    } else if (timeStamp >= this.ishaSeconds) {
      headers.push("label-isha-prayer");
      headers.push(0);
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
    return `${this.currentDay.day} ${this.currentDay.monthText} 2022`;
  }

  getFormattedIslamicDate(){
    return `${this.currentDay.islamicDay} ${this.currentDay.islamisMonth}`;
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

  getPrayerTimesByMonth(month:number):DailyPrayer[]{
    
    return this.daylyPrayers.filter((item) => {
      return item.month===month && item.city===this.currentLocation.id;
    })

    
  }
}

export const timeService = new TimeService();
