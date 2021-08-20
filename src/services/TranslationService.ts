import { storageService } from "./StorageService";




export class TranslationItem{
    name:string="";
    value:string="";
}


class TranslationService{
    labels:TranslationItem[]=[];
    currentLocale:string|null="";
    loaded:boolean=false;

    
    async load(){
        
        const lang=await storageService.get("languageData");
        
        if(lang!==null){
            const body=await fetch(`assets/data/${lang}.json`).then(response=>response.json());
            this.labels = JSON.parse(JSON.stringify(body));
            this.loaded=true;
            this.currentLocale=lang;
        }
        else{
            this.loaded=false;
        }
        
       
    }
    isLoaded():boolean{
        return this.loaded;
    } 
    
    getLabel(name:string):string{
        const item=this.labels.find(item=>item.name===name);
        if(item===null) return "";

        return item?.value!;
    }

    isNorwegian():boolean{
        return this.currentLocale==="no";
    }
}

export const translationService = new TranslationService();