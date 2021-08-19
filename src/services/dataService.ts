import { Surah } from '../objects/surah';
import { Ayah } from '../objects/Ayah';
import { Lesson } from '../objects/Lesson';

class DataService{
    suras:Surah[]=[];
    ayahs:Ayah[]=[];
    lessons:Lesson[]=[];
    currentLocale:string="ba";

    private async loadQuran(){
        const surahBody=await fetch("assets/data/surah.json").then(response=>response.json());
        this.suras = JSON.parse(JSON.stringify(surahBody));
        
        const ayahBody=await fetch("assets/data/ayah.json").then(response=>response.json());
        this.ayahs = JSON.parse(JSON.stringify(ayahBody));
        
    }

    private async loadLessons(){
        const lessonsBody=await fetch("assets/data/lessons.json").then(response=>response.json());
        this.lessons = JSON.parse(JSON.stringify(lessonsBody));
        
    }
    
    public async load(){
        this.loadQuran();
        this.loadLessons();
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

    getLesson(bookId:string,lessonId:string):Lesson{
        
        const lesson =this.lessons.find(lesson=>lesson.bookId===bookId && lesson.id===lessonId);

        if (lesson === undefined) {
            throw new TypeError('The value was promised to always be there!');
        }
        
       return lesson;
    }
}

export const dataService = new DataService();