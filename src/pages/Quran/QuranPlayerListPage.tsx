import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonToolbar, useIonViewWillEnter } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { match } from "react-router-dom";
import { QuranChapterListItem } from "../../components/Quran/QuranChapterListItem";
import { QuranChapter, quranChapters } from "../../data/QuranChapters";
import useTranslation from "../../hooks/useTranslation";
import { translationService } from "../../services/TranslationService";



export const QuranPlayerListPage:React.FC=()=>{
  const [searchText, setSearchText] = useState("");
  const {translate}=useTranslation();
  const [chapters, setChapters] = useState<QuranChapter[]>([]);
  const [filteredchapters, setFilteredSurahs] = useState<QuranChapter[]>([]);

  const loadChapters = function () {
    setChapters(quranChapters.filter((chapter)=>{
      return chapter.player===true;
    }));
  };

  useIonViewWillEnter(() => {
    loadChapters();
  });

  useEffect(() => {
    setFilteredSurahs(
      chapters.filter((chapter) => {
        return chapter.title.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  }, [searchText, chapters]);

  const chapterListItems = filteredchapters.map((chapter) => (
    <QuranChapterListItem chapter={chapter} isReader={false} color="burgundy"/>
  ));

    return(
        <IonPage>
            <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/tabs/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <IonSearchbar
          className="ion-padding"
          placeholder={translate('label-quran-search')}
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <IonList style={{marginLeft:"10px",marginRight:"10px"}}>{chapterListItems}</IonList>
      </IonContent>
        </IonPage>
    )
}

