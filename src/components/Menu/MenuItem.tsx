import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonIcon,
  IonLabel,
  IonRow,
  IonText,
} from "@ionic/react";
import { heartSharp, heartOutline } from "ionicons/icons";
import React from "react";
import "./MenuItem.css";

interface MenuItemProps {
  label?: string;
  title: string;
  description: string;
  icon?: string;
  color: string;
  link: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  title,
  description,
  icon,
  color,
  link,
}) => {
  const addFavourites = () => {};
  return (
    <IonCard routerLink={link} className="menuItem">
      <IonRow >
        <IonCol size="4">
          {icon && <img src={icon} height="40px" width="40px" />}
          {label && (
            <>
              <IonAvatar className={`menuItemAvatar menuItemAvatar${color}`}>
                <p className={`menuItemLabel ${color}`}>{label}</p>
              </IonAvatar>
            </>
          )}
        </IonCol>
        <IonCol size="8">
          <IonText className={`menuItemTitle ${color}`}>{title}</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonText className="menuItemDescription">{description}</IonText>
      </IonRow>
      
    </IonCard>
  );
};


