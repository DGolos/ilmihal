
import { IonItem, IonAvatar, IonLabel, IonText } from '@ionic/react';
import React from 'react';
import { QuranChapter } from '../../data/QuranChapters';
import { QuranPart } from '../../data/QuranParts';
import useTranslation from '../../hooks/useTranslation';

import './Quran.css';

interface QuranPartListItemProps{
    part:QuranPart;
}

export const QuranPartListItem: React.FC<QuranPartListItemProps> = ({part}) => {
    const { translate } = useTranslation();
    return (
        <IonItem
      key={part.id}
      
      lines="none"
      detail={false}
      className="quranChapterListItem"
    >
      <IonAvatar className={`chapterAvatar burgundy`}>
      <IonLabel className="ion-padding-top">
          <IonText className='chapterLabel'>{part.id}</IonText>
        </IonLabel>
      </IonAvatar>
      <IonLabel className="ion-padding-start">
        <p> <IonText className='partTitle'>{part.start.chapter} {part.start.verseId}</IonText></p>
        <p> <IonText className='partTitle'>{part.end.chapter} {part.end.verseId}</IonText> 
        
        </p>
      </IonLabel>
      
    </IonItem>
    );
  };