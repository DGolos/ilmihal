import { Surah } from '../objects/surah';
import surasData from './suras.json';
import ayahData from './ayahs.json';
import { Ayah } from '../objects/Ayah';

class DataService{
    suras:Surah[]=surasData;
    //ayahs:Ayah[]=ayahData;
    currentLocale:string="ba";

    
    public getAllSuras():Surah[]{
        return this.suras;
    }

    public getSurahById(id:number):Surah{
        const surah =this.suras.find(surah=>surah.id===id);

        if (surah === undefined) {
            throw new TypeError('The value was promised to always be there!');
        }
        
       return surah;
    }
}

export const dataService = new DataService();