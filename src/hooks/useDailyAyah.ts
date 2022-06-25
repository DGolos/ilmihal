import { useEffect, useState } from 'react';
import {DailyAyah, dailyRAyahs} from './../data/DailyAyah'

function useDailyRAyah(){
    const[dailyAyah,setDailyAyah]=useState<DailyAyah>()
    
    useEffect(()=>{
        setDailyAyah(dailyRAyahs[0]);
    },[])

    return {dailyAyah} as const;
}

export default useDailyRAyah;