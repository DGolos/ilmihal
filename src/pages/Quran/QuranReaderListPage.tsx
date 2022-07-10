import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { QuranChapterListItem } from "../../components/Quran/QuranChapterListItem";
import { QuranPartListItem } from "../../components/Quran/QuranPartListItem";
import { QuranChapter, quranChapters } from "../../data/QuranChapters";
import { QuranPart, quranParts } from "../../data/QuranParts";
import useTranslation from "../../hooks/useTranslation";


type QuranSection = "chapter" | "part";
export const QuranReaderListPage: React.FC = () => {
  const { translate } = useTranslation();
  const [currentSection, setCurrentSection] = useState<QuranSection>("chapter");
  const [searchText, setSearchText] = useState("");

  const [chapters, setChapters] = useState<QuranChapter[]>([]);
  const [parts, setParts] = useState<QuranPart[]>([]);
  const [filteredChapters, setFilteredChapters] = useState<QuranChapter[]>([]);

  const loadData = function () {
    setChapters(quranChapters);
    setParts(quranParts);
  };

  useIonViewWillEnter(() => {
    loadData();
  });

  useEffect(() => {
    setFilteredChapters(
      chapters.filter((chapter) => {
        return chapter.title.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  }, [searchText, chapters]);

  const chapterListItems = filteredChapters.map((chapter) => (
    <QuranChapterListItem chapter={chapter} isReader={true} color="burgundy"/>
  ));

  const partListItems = parts.map((part) => (
    <QuranPartListItem part={part} />
    
  ));

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              color="burgundy"
              defaultHref="/tabs/MainCategoryPage"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonSegment
          value={currentSection}
          onIonChange={(e) => setCurrentSection(e.detail.value as QuranSection)}
          mode="md"
          style={{marginLeft:"10px",marginRight:"10px"}}
        >
          <IonSegmentButton value={"chapter" as QuranSection} color="burgundy">
            <IonText>{translate("label-quran-chapter")}</IonText>
          </IonSegmentButton>
          <IonSegmentButton value={"part" as QuranSection} color="burgundy">
            <IonText>{translate("label-quran-part")}</IonText>
          </IonSegmentButton>
        </IonSegment>
        <div hidden={currentSection !== "chapter"}>
          <IonSearchbar
            className="ion-padding"
            placeholder={translate("label-quran-search")}
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
          <IonList style={{marginLeft:"10px",marginRight:"10px"}}>{chapterListItems}</IonList>
        </div>
        <div hidden={currentSection !== "part"}>
        <IonList style={{marginLeft:"10px",marginRight:"10px"}}>{partListItems}</IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};
