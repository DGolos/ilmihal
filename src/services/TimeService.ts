import axios from "axios";
import moment from "moment";
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

  isPeriodUpdated(): boolean {
    const currentTime = new Date();

    return (
      this.lastComputedDate.getFullYear() === currentTime.getFullYear() &&
      this.lastComputedDate.getMonth() === currentTime.getMonth()
    );
  }

  async init() {
    //const response=await axios.get("http://api.aladhan.com/v1/timingsByCity?city=Cazin&country=BA&method=2");

    //const fajrObj=moment(response.data.data.timings.Fajr,"H:m");
    const fajrObj = moment("5:08", "H:m");
    this.fajrSeconds = fajrObj.hours() * 3600 + fajrObj.minutes() * 60;
    this.fajr = moment.utc(this.fajrSeconds * 1000).format("HH:mm");
    this.startOfFast = moment.utc(this.fajrSeconds * 1000).format("HH:mm");

    //const sunriseObj=moment(response.data.data.timings.Sunrise,"H:m");
    const sunriseObj = moment("6:29", "H:m");
    this.sunriseSeconds = sunriseObj.hours() * 3600 + sunriseObj.minutes() * 60;
    this.sunrise = moment.utc(this.sunriseSeconds * 1000).format("HH:mm");

    //const dhuhrObj=moment(response.data.data.timings.Dhuhr,"H:m");
    const dhuhrObj = moment("12:08", "H:m");
    this.dhuhrSeconds = dhuhrObj.hours() * 3600 + dhuhrObj.minutes() * 60;
    this.dhuhr = moment.utc(this.dhuhrSeconds * 1000).format("HH:mm");
    this.preDhuhrSeconds = (this.dhuhrSeconds + this.sunriseSeconds) / 2;

    //const asrObj=moment(response.data.data.timings.Asr,"H:m");
    const asrObj = moment("15:13", "H:m");
    this.asrSeconds = asrObj.hours() * 3600 + asrObj.minutes() * 60;
    this.asr = moment.utc(this.asrSeconds * 1000).format("HH:mm");
    this.preAsrSeconds = (this.asrSeconds + this.dhuhrSeconds) / 2;

    //const maghribObj=moment(response.data.data.timings.Maghrib,"H:m");
    const maghribObj = moment("17:48", "H:m");
    this.maghribSeconds = maghribObj.hours() * 3600 + maghribObj.minutes() * 60;
    this.maghrib = moment.utc(this.maghribSeconds * 1000).format("HH:mm");
    this.preMaghribSeconds = (this.maghribSeconds + this.asrSeconds) / 2;
    //const ishaObj=moment(response.data.data.timings.Isha,"H:m");
    const ishaObj = moment("19:08", "H:m");
    this.ishaSeconds = ishaObj.hours() * 3600 + ishaObj.minutes() * 60;
    this.isha = moment.utc(this.ishaSeconds * 1000).format("HH:mm");
    this.preIshaSeconds = (this.ishaSeconds + this.maghribSeconds) / 2;
    this.lastComputedDate = new Date();
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
    if (timeStamp < this.ishaSeconds) return "maghrib";
    return "isha";
  }

  formatTime(duration: number): string {
    
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration / 60) % 60);
    
    let ret = "";

    if (hours > 0) {
      if(hours===1){
        ret+=`1 ${translationService.getLabel('label-hour')} `
      }
      else{
        ret+=`${hours} ${translationService.getLabel('label-hours')} `
      }
      
    }
    console.log(minutes);
    if(minutes>0){
      if(minutes===1){
        ret+=`1 ${translationService.getLabel('label-minute-nominativ')}`
      }
      else if(minutes>1 && minutes<5){
        ret+=`${minutes} ${translationService.getLabel('label-minute-genitiv')}`
      }
      else if((minutes>=5 && minutes<20)||(minutes%10===0)){
        ret+=`${minutes} ${translationService.getLabel('label-minute-acusativ')}`
      }
      
    }
    
    return ret;
  }

  getHeaders() {
    const currentTime = new Date();
    const timeStamp = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60;

    let headers: string[] = [];

    if (timeStamp < this.fajrSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-fajr-prayer");
      headers.push(this.formatTime(this.fajrSeconds - timeStamp));
    }

    else if (timeStamp >= this.fajrSeconds && timeStamp < this.sunriseSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-fajr-prayer");
    }

    else if (timeStamp >= this.sunriseSeconds && timeStamp < this.preDhuhrSeconds) {
      headers.push("label-no-prayer");
    }
    else if (timeStamp >= this.preDhuhrSeconds && timeStamp < this.dhuhrSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-dhuhr-prayer");
      headers.push(this.formatTime(this.dhuhrSeconds - timeStamp));
    }
    else if (timeStamp >= this.dhuhrSeconds && timeStamp < this.preAsrSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-dhuhr-prayer");
    }
    else if (timeStamp >= this.preAsrSeconds && timeStamp < this.asrSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-asr-prayer");
      headers.push(this.formatTime(this.asrSeconds - timeStamp));
    }
    else if (timeStamp >= this.asrSeconds && timeStamp < this.preMaghribSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-asr-prayer");
    }
    else if (timeStamp >= this.preMaghribSeconds && timeStamp < this.maghribSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-maghrib-prayer");
      headers.push(this.formatTime(this.maghribSeconds - timeStamp));
    }
    else if (timeStamp >= this.maghribSeconds && timeStamp < this.preIshaSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-maghrib-prayer");
    }
    else if (timeStamp < this.preIshaSeconds && timeStamp < this.ishaSeconds) {
      headers.push("label-next-prayer");
      headers.push("label-isha-prayer");
      headers.push(this.formatTime(this.ishaSeconds - timeStamp));
    }
    else if (timeStamp >= this.ishaSeconds) {
      headers.push("label-current-prayer");
      headers.push("label-isha-prayer");
    }
    console.log(headers);
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

  getPrayertimes() {
    return {
      startOfFast: this.startOfFast,
      fajr: this.fajr,
      dhuhr: this.dhuhr,
      asr: this.asr,
      maghrib: this.maghrib,
      isha: this.isha,
      period: this.getCurrentPeriod(),
      headers: this.getHeaders(),
    };
  }
}

export const timeService = new TimeService();
