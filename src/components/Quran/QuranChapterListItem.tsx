
import { IonItem, IonAvatar, IonLabel, IonText } from '@ionic/react';
import React from 'react';
import { QuranChapter } from '../../data/QuranChapters';
import useTranslation from '../../hooks/useTranslation';

import './Quran.css';

interface QuranChapterListItemProps{
    chapter:QuranChapter;
    isReader:boolean;
    color:string;
}

export const QuranChapterListItem: React.FC<QuranChapterListItemProps> = ({chapter,isReader,color}) => {
    const { translate } = useTranslation();
    return (
        <IonItem
      key={chapter.id}
      routerLink={isReader?`/tabs/QuranReader/${chapter.id}`:`/tabs/QuranPlayer/${chapter.id}`}
      lines="none"
      detail={false}
      className="quranChapterListItem"
    >
      <IonAvatar className={`chapterAvatar ${color}`}>
        <IonLabel className="ion-padding-top">
          <IonText className='chapterLabel'>{chapter.id}</IonText>
        </IonLabel>
      </IonAvatar>
      <IonLabel className="ion-padding-start">
        <p> 
        <IonText className="chapterTitle">{translate(chapter.title)}</IonText>
        </p>
        <p>
            <IonText className="chapterNumberOfVerses"> {chapter.place} {chapter.numberOfAyah} {translate('label-number-of-verses')}</IonText>
         
        </p>
      </IonLabel>
      <IonLabel className="ion-text-right">
        <p> <IonText className="chapterArabic">{chapter.arabicTitle}</IonText></p>
      </IonLabel>
    </IonItem>
    );
  };