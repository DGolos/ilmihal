import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { timeService } from "../../services/TimeService";



  const PrayerCountdown: React.FC= ({}) => {
      const [hours,minutes,seconds]=useCountdown();
    return(
            <>
            <p hidden={hours<0 && minutes<0} style={{ fontSize: "24px", fontWeight: "normal" }}>{`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p> 

            <p hidden={hours>=0 && minutes>=0} style={{ fontSize: "24px", fontWeight: "normal" }}>{timeService.getCurrentPrayertime()}</p> 
            </>
            
       
    )
  }

  export default PrayerCountdown;