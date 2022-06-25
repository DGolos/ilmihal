import { Surah } from '../objects/surah';
import { Ayah } from '../objects/Ayah';


class DataService{
    suras:Surah[]=[];
    ayahs:Ayah[]=[];
    
    currentLocale:string="ba";

    private async loadQuran(){
        const surahBody=await fetch("assets/data/surah.json").then(response=>response.json());
        this.suras = JSON.parse(JSON.stringify(surahBody));
        
        const ayahBody=await fetch("assets/data/ayah.json").then(response=>response.json());
        this.ayahs = JSON.parse(JSON.stringify(ayahBody));
        
    }

      
    public async load(){
        this.loadQuran();
        
    }

    
    public getAllSuras():Surah[]{
        return this.suras.filter(surah=>surah.visible===true);
    }

    public getSurahById(id:number):Surah{
        
        const surah =this.suras.find(surah=>surah.id===id);

        if (surah === undefined) {
            throw new TypeError('The value was promised to always be there!');
        }
        
       return surah;
    }

    public getAyahForSurah(surahId:number):Ayah[]{
        const ayahInSurah=this.ayahs.filter((ayah)=>{
            return ayah.surahId===surahId;
        });

       return ayahInSurah;
    }

    public getAyah(surahId:number,firstAyahId:number,lastAyahId:number):Ayah[]{
        const ayah=this.ayahs.filter((ayah)=>{
            return ayah.surahId===surahId && ayah.id>=firstAyahId && ayah.id<=lastAyahId;
        });
        
        return ayah;
    }

    
}

export const dataService = new DataService();