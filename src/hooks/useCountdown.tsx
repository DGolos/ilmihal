import { useEffect,useState } from "react";
import { timeService } from "../services/TimeService";

const useCountdown=():[number,number,number]=>{
    const[countdown,setCountdown]=useState(0);
    
    useEffect(()=>{
        setCountdown(timeService.getRemainingtime());
        const intervall=setInterval(()=>{
            setCountdown(previous=>previous-1);
        },1000);

        return ()=>clearInterval(intervall);
    },[]);

    return getReturnValues(countdown);
};

const getReturnValues=(countdown:number):[number,number,number]=>{
    
    let totalSeconds:number=countdown;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    return [hours,minutes,seconds];
}

export {useCountdown};