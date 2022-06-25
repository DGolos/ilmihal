import { useEffect, useState } from "react";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const useLanguage=()=>{
    const [language,setValue]=useState("");
    
    useEffect(()=>{

        const fetchLanguage=async()=>{
            const value = (await Storage.get({key:"languageData"})).value;
            setValue(value ?? "");
        };

        fetchLanguage();
    },[])
    
    const setLanguage=(value:string)=>{
        setValue(value);
    };

    return {language,setLanguage} as const;
}

export default useLanguage;