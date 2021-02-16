import { Surah } from '../objects/surah';
import surasData from './suras.json';
import ayahData from './ayahs.json';
import { Ayah } from '../objects/Ayah';

class DataService{
    suras:Surah[]=surasData;
    ayahs:Ayah[]=ayahData;
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

    public getAyahForSurah(surahId:number):Ayah[]{

        const ayah=this.ayahs.filter(ayah=>ayah.surahId===surahId);
        return ayah;
    }

    public getAyah(surahId:number,firstAyahId:number,lastAyahId:number):Ayah[]{
        const ayah=this.ayahs.filter((ayah)=>{
            return ayah.surahId===surahId && ayah.id>=firstAyahId && ayah.id<=lastAyahId;
        });
        
        return ayah;
    }
}

export const dataService = new DataService();