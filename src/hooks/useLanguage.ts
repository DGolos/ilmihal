import useLocalStorage from "./useLocalStorage";

function useLanguage(){
    const [language,setValue]=useLocalStorage<string>("languageData","none");
    
    const setLanguage=(value:string)=>{
        setValue(value);
    };

    return {language,setLanguage} as const;
}

export default useLanguage;