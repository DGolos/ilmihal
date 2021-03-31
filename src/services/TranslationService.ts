import { plainToClass } from "class-transformer";
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
        const body=await fetch("assets/data/ba.json").then(response=>response.json());
        this.labels = JSON.parse(JSON.stringify(body));
        this.loaded=true;
       
    }
    isLoaded():boolean{
        return this.loaded;
    } 
    
    getLabel(name:string):string{
        const item=this.labels.find(item=>item.name===name);
        if(item===null) return "";

        return item?.value!;
    }
}

export const translationService = new TranslationService();