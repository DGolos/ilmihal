import {LanguageEntry, translations} from './../data/Translations'

function useTranslation():any{
    const translate=(name:string):string=>{
        const entry=translations.find((item:LanguageEntry)=>{
            return item.name===name;
        })

        if(entry!==undefined) return entry.ba;

        return "Not translated"
    }

    return {translate} as const;
}

export default useTranslation;