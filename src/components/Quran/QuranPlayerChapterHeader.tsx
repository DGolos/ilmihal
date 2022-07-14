import { IonCard, IonText } from '@ionic/react';
import React from 'react';
import { QuranChapter } from '../../data/QuranChapters';
import useTranslation from '../../hooks/useTranslation';
import './Quran.css';

interface QuranPlayerChapterHeaderProps{
    chapter:QuranChapter;
 
}

export const QuranPlayerChapterHeader: React.FC<QuranPlayerChapterHeaderProps>=({chapter})=>{
    const {translate}=useTranslation();
    const pad=(number:number|undefined)=>{
        let str="000"+number;
        return str.substring(str.length-3)
    }
    return(
        <div className='cardHolder'>
        <IonCard color="burgundy" className="chapterHeader">
          <div className="overlay">
            <img className="mask" src="./assets/images/quran-page.jpg" alt=""/>
          </div>

          <div className="ion-text-center">
            <p >
            <IonText className="chapterHeaderTitle">{translate(chapter?.title)}</IonText>
              
            </p>
          </div>
          <div>
            <p className="ion-text-center">
                <IonText className="chapterHeaderArabicTitle">{pad(chapter?.id)}surah</IonText>
                
            </p>
          </div>
        </IonCard>
        <div>
          <IonText className='chapterDescriptionTitle'>
            ABOUT
          </IonText>
          </div>
          <div>
          <p className='chapterDescriptionText'>
            {translate(chapter?.description)}
          </p>
          </div>
          <div>
          <p className='chapterDescriptionTitle'>
            SPECIAL NOTES
          </p>
          </div>
          <div>
          <p className='chapterDescriptionText'>
          {translate(chapter?.note)}
          </p>
          </div>
        </div>
    )
}