import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
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
        <h6 className="ion-text-center" style={{paddingLeft:"6px",marginTop:"5px"}}>{title}</h6>
        
      
    </IonItem>
  );
};

export default LessonListItem;
