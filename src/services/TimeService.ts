import axios from "axios";
import moment from "moment";
import { storageService } from "./StorageService";
import { translationService } from "./TranslationService";

export interface PrayersProps {
  startOfFast: string;
  fajr: string;
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
class TimeService {
  startOfFast = "";
  fajr: string = "";
  fajrSeconds = 0;
  sunrise: string = "";
  sunriseSeconds = 0;
  preDhuhrSeconds: number = 0;
  dhuhr: string = "";
  dhuhrSeconds = 0;
  preAsrSeconds: number = 0;
  asr: string = "";
  asrSeconds = 0;
  preMaghribSeconds: number = 0;
  maghrib: string = "";
  maghribSeconds = 0;
  isha: string = "";
  preIshaSeconds = 0;
  ishaSeconds = 0;
  lastComputedDate: Date = new Date(1900, 0, 1);
  currentLocation:Location={id:"",name:"",country:""};

  async calculatePrayertimes() {
    
    const fajrObj = moment(this.fajr, "H:m");
    this.fajrSeconds = fajrObj.hours() * 3600 + fajrObj.minutes() * 60;
    this.fajr = moment.utc(this.fajrSeconds * 1000).format("HH:mm");

    this.startOfFast = moment.utc(this.fajrSeconds * 1000).format("HH:mm");

    const sunriseObj = moment(this.sunrise, "H:m");
    this.sunriseSeconds = sunriseObj.hours() * 3600 + sunriseObj.minutes() * 60;
    this.sunrise = moment.utc(this.sunriseSeconds * 1000).format("HH:mm");

    const dhuhrObj = moment(this.dhuhr, "H:m");
    this.dhuhrSeconds = dhuhrObj.hours() * 3600 + dhuhrObj.minutes() * 60;
    this.preDhuhrSeconds = (this.dhuhrSeconds + this.sunriseSeconds) / 2;

    const asrObj = moment(this.asr, "H:m");
    this.asrSeconds = asrObj.hours() * 3600 + asrObj.minutes() * 60;
    this.preAsrSeconds = (this.asrSeconds + this.dhuhrSeconds) / 2;

    const maghribObj = moment(this.maghrib, "H:m");
    this.maghribSeconds = maghribObj.hours() * 3600 + maghribObj.minutes() * 60;
    this.preMaghribSeconds = (this.maghribSeconds + this.asrSeconds) / 2;

    const ishaObj = moment(this.isha, "H:m");
    this.ishaSeconds = ishaObj.hours() * 3600 + ishaObj.minutes() * 60;
    this.preIshaSeconds = (this.ishaSeconds + this.maghribSeconds) / 2;
    this.lastComputedDate = new Date();
  }

  async getTimesFromStorage(){
    const prayerObj=await storageService.get("prayerData");
    const prayerStrings:prayerStorage=JSON.parse(prayerObj!);
    this.fajr=prayerStrings?.fajr;
    this.sunrise=prayerStrings?.sunrise;
    this.dhuhr=prayerStrings?.dhuhr;
    this.asr=prayerStrings?.asr;
    this.maghrib=prayerStrings?.maghrib;
    this.isha=prayerStrings?.isha;

    this.calculatePrayertimes();
  }

  async updateStorage(){
    storageService.set("prayerData",{fajr:this.fajr,sunrise:this.sunrise,dhuhr:this.dhuhr,asr:this.asr,maghrib:this.maghrib,isha:this.isha});
  }

  async init() {
    try{

      const locationObj=await storageService.get("locationData");
      this.currentLocation=JSON.parse(locationObj!);
      var timeTable: string[]=[];
      if(this.currentLocation.country==="BA"){
        
        const response = await axios.get(`https://api.vaktija.ba/vaktija/v1/${this.currentLocation.id}`);
        timeTable= response.data.vakat;
        this.fajr = timeTable[0];
        this.sunrise = timeTable[1];
        this.dhuhr = timeTable[2];
        this.asr = timeTable[3];
        this.maghrib = timeTable[4];
        this.isha = timeTable[5];
  
      }else{
        const response=await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${this.currentLocation.id}&country=${this.currentLocation.country}&method=2&latitudeAdjustmentMethod=3&school=1`);
        
        const fajrObj = moment(response.data.data.timings.Fajr,"H:m");
        this.fajr = moment.utc((fajrObj.hours() * 3600 + fajrObj.minutes() * 60) * 1000).format("HH:mm");

        const sunriseObj = moment(response.data.data.timings.Sunrise,"H:m");
        this.sunrise = moment.utc((sunriseObj.hours() * 3600 + sunriseObj.minutes() * 60) * 1000).format("HH:mm");

        const dhuhrObj = moment(response.data.data.timings.Dhuhr,"H:m");
        this.dhuhr = moment.utc((dhuhrObj.hours() * 3600 + dhuhrObj.minutes() * 60) * 1000).format("HH:mm");

        const asrObj = moment(response.data.data.timings.Asr,"H:m");
        this.asr = moment.utc((asrObj.hours() * 3600 + asrObj.minutes() * 60) * 1000).format("HH:mm");

        const maghribObj = moment(response.data.data.timings.Maghrib,"H:m");
        this.maghrib = moment.utc((maghribObj.hours() * 3600 + maghribObj.minutes() * 60) * 1000).format("HH:mm");

        const ishaObj = moment(response.data.data.timings.Isha,"H:m");
        this.isha = moment.utc((ishaObj.hours() * 3600 + ishaObj.minutes() * 60) * 1000).format("HH:mm");
        
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

    let headers: string[] = [];

    if (timeStamp < this.fajrSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-fajr-prayer");
      headers.push(this.formatTime(this.fajrSeconds - timeStamp));
    } else if (
      timeStamp >= this.fajrSeconds &&
      timeStamp < this.sunriseSeconds
    ) {
      headers.push("label-current-prayer");
      headers.push("label-fajr-prayer");
    } else if (
      timeStamp >= this.sunriseSeconds &&
      timeStamp < this.preDhuhrSeconds
    ) {
      headers.push("label-no-prayer");
    } else if (
      timeStamp >= this.preDhuhrSeconds &&
      timeStamp < this.dhuhrSeconds
    ) {
      headers.push("label-next-prayer");
      headers.push("label-dhuhr-prayer");
      headers.push(this.formatTime(this.dhuhrSeconds - timeStamp));
    } else if (
      timeStamp >= this.dhuhrSeconds &&
      timeStamp < this.preAsrSeconds
    ) {
      headers.push("label-current-prayer");
      headers.push("label-dhuhr-prayer");
    } else if (timeStamp >= this.preAsrSeconds && timeStamp < this.asrSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-asr-prayer");
      headers.push(this.formatTime(this.asrSeconds - timeStamp));
    } else if (
      timeStamp >= this.asrSeconds &&
      timeStamp < this.preMaghribSeconds
    ) {
      headers.push("label-current-prayer");
      headers.push("label-asr-prayer");
    } else if (
      timeStamp >= this.preMaghribSeconds &&
      timeStamp < this.maghribSeconds
    ) {
      headers.push("label-next-prayer");
      headers.push("label-maghrib-prayer");
      headers.push(this.formatTime(this.maghribSeconds - timeStamp));
    } else if (
      timeStamp >= this.maghribSeconds &&
      timeStamp < this.preIshaSeconds
    ) {
      headers.push("label-current-prayer");
      headers.push("label-maghrib-prayer");
    } else if (
      timeStamp >= this.preIshaSeconds &&
      timeStamp < this.ishaSeconds
    ) {
      headers.push("label-next-prayer");
      headers.push("label-isha-prayer");
      headers.push(this.formatTime(this.ishaSeconds - timeStamp));
    } else if (timeStamp >= this.ishaSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-isha-prayer");
    }

    return headers;
  }

  getFajrTime() {
    return this.fajr;
  }

  getDhuhrTime() {
    return this.dhuhr;
  }

  getAsrTime() {
    return this.asr;
  }

  getMaghribTime() {
    return this.maghrib;
  }

  getIshaTime() {
    return this.isha;
  }

  async getPrayertimes() {
    return {
      startOfFast: this.startOfFast,
      fajr: this.fajr,
      dhuhr: this.dhuhr,
      asr: this.asr,
      maghrib: this.maghrib,
      isha: this.isha,
      period: this.getCurrentPeriod(),
      headers: this.getHeaders(),
      city:this.currentLocation.name,
      country:this.currentLocation.country,
    };
  }
}

export const timeService = new TimeService();
