import { IonAvatar, IonItem, IonLabel, IonNote } from "@ionic/react";
import React from "react";

interface LessonItemProps {
  id?: string;
  title?: string;
  link?: string;
}

const LessonListItem: React.FC<LessonItemProps> = ({ id, title, link }) => {
  return (
    <IonItem
      key={id}
      routerLink={link}
      lines="none"
      detail={false}
      className="lesson welcome"
    >
      <IonAvatar slot="start" className="lesson">
        <IonLabel style={{ marginTop: 7 }}>
          <h4>{id}</h4>
        </IonLabel>
      </IonAvatar>
      <IonNote className="ion-padding-start ion-text-center">
        <h4>{title}</h4>
      </IonNote>
    </IonItem>
  );
};

export default LessonListItem;
