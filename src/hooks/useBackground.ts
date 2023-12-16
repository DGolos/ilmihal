import { useEffect, useState } from "react";
import { timeService } from "../services/TimeService";

const useBackground=():string=>{
    const[currentPeriod,setCurrentPeriod]=useState("");

    useEffect(()=>{
        
        setCurrentPeriod(timeService.getCurrentPeriod());
    },[]);
    
    useEffect(()=>{
        
        const interval = setInterval(() => {
            setCurrentPeriod(timeService.getCurrentPeriod());
            }, 60000);
          return () => clearInterval(interval);
    },[]);

    return currentPeriod;
}

export default useBackground;