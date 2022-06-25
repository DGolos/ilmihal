import { useEffect, useState } from "react";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export interface Location{
    id:string;
    name:string;
    country:string;
  }

const useLocation=()=>{
    const [location,setValue]=useState<Location>({
        id:"",
        name:"",
        country:""
    });
    
    useEffect(()=>{

        const fetchLocation=async()=>{
            const value = (await Storage.get({key:"locationData"})).value;
            setValue(JSON.parse(value!));
        };

        fetchLocation();
    },[])
    
    const setLocation=(value:Location)=>{
        setValue(value);
    };

    return {location,setLocation} as const;
}

export default useLocation;