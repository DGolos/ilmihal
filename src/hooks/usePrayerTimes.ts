import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import moment from "moment";

interface DailyPrayerTimes{
    startOfFast:string;
    fajr:string,
    sunrise:string;
    dhuhr:string;
    asr:string;
    maghrib:string;
    isha:string;
}

interface DailyPrayerTimesReturnType{
    currentPeriod:string;
    prayerTimes:DailyPrayerTimes;
    color:string;
}

const usePrayerTimes = (newDay:number):DailyPrayerTimesReturnType => {
    const[currentPeriod,setCurrentPeriod]=useState("");
    const [color,setColor]=useState("");
    const prayersRef=useRef<DailyPrayerTimes>({startOfFast:"",fajr:"",sunrise:"",dhuhr:"",asr:"",maghrib:"",isha:""})
    const [day,setDay]=useState(newDay);

    const calculatePeriod=()=>{
        
        const currentTime = new Date();
        const timeStamp = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60;

        const fajrObj = moment(prayersRef.current.fajr, "H:m");
        const fajrSeconds = fajrObj.hours() * 3600 + fajrObj.minutes() * 60;

        if (timeStamp < fajrSeconds){
            setColor("purple");
            return "late-isha";
        } 
        
        const sunriseObj = moment(prayersRef.current.sunrise, "H:m");
        const sunriseSeconds = sunriseObj.hours() * 3600 + sunriseObj.minutes() * 60;
       
        if (timeStamp < sunriseSeconds){
            setColor("razimic");
            return "fajr";
        } 

        const dhuhrObj = moment(prayersRef.current.dhuhr, "H:m");
        const dhuhrSeconds = dhuhrObj.hours() * 3600 + dhuhrObj.minutes() * 60;
        const preDhuhrSeconds = (dhuhrSeconds + sunriseSeconds) / 2;

        if (timeStamp < preDhuhrSeconds){
            setColor("brown");
            return "sunrise";
        }

        const asrObj = moment(prayersRef.current.asr, "H:m");
        const asrSeconds = asrObj.hours() * 3600 + asrObj.minutes() * 60;
        const preAsrSeconds = (asrSeconds + dhuhrSeconds) / 2;
       
        if (timeStamp < preAsrSeconds){
            setColor("brown");
            return "dhuhr";
        } 

        const maghribObj = moment(prayersRef.current.maghrib, "H:m");
        const maghribSeconds = maghribObj.hours() * 3600 + maghribObj.minutes() * 60;
        const preMaghribSeconds = (maghribSeconds + asrSeconds) / 2;
        if (timeStamp < preMaghribSeconds){
            setColor("dark-brown");
            return "asr";
        }
        if (timeStamp < maghribSeconds){
            setColor("burgundy");
            return "late-asr";
        } 

        const ishaObj = moment(prayersRef.current.isha, "H:m");
        const ishaSeconds = ishaObj.hours() * 3600 + ishaObj.minutes() * 60;
        const preIshaSeconds = (ishaSeconds + maghribSeconds) / 2;
        
        
        if (timeStamp < preIshaSeconds){
            setColor("burgundy");
            return "maghrib";
        }
        setColor("purple"); 
        return "isha";
    }
    
    useEffect(()=>{
        const fetchPrayerTimes=async()=>{
            axios.get(`https://api.vaktija.ba/vaktija/v1/61`)
            .then((response)=>{
                const timeTable= response.data.vakat;
                
            const newPrayerTimes:DailyPrayerTimes={
                startOfFast:timeTable[0],
                fajr:timeTable[0],
                sunrise:timeTable[1],
                dhuhr:timeTable[2],
                asr:timeTable[3],
                maghrib:timeTable[4],
                isha:timeTable[5]
            }
            
            prayersRef.current=newPrayerTimes;
            
            const newPeriod=calculatePeriod();
            
            setCurrentPeriod(newPeriod);
            });
        
            
            
        }
        fetchPrayerTimes();
        
          console.log("Effect");
        
    },[day]);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentPeriod(calculatePeriod());
          }, 60000);
          return () => clearInterval(interval);
    },[]);
  
    return {currentPeriod:currentPeriod,prayerTimes:prayersRef.current,color:color};
}

export default usePrayerTimes