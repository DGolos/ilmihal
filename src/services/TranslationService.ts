
import { TranslationText } from './TranslationText';
import data from './translations.json';



export class TranslationItem{
    id:number=-1;
    name:string="";
    label:TranslationText={ba:"",no:""};
}


class TranslationService{
    labels:TranslationItem[]=data;
    currentLocale:string="ba";

    
    public getLabel(id:number){
        const item=this.labels.find(item=>item.id===id);
        if(item===null) return "";

        return item?.label.ba;

        
    }
}

export const translationService = new TranslationService();