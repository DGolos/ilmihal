import { useEffect, useState } from 'react';
import {DailyRemainder, dailyRemainders} from './../data/DailyReminders'

function useDailyRemainder(){
    const[dailyRemainder,setDailyRemainder]=useState<DailyRemainder>()
    
    useEffect(()=>{
        setDailyRemainder(dailyRemainders[0]);
    },[])

    return {dailyRemainder} as const;
}

export default useDailyRemainder;