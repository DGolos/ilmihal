import { IonButton } from "@ionic/react";
import React from "react";
import './MenuButton.css';

interface MenuButtonProps{
    label:string;
    isActive:boolean;
    onClick:()=>void;
    color:string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ label,isActive,color,onClick }) => {
    return (
        <IonButton className={isActive?"menuButtonActive":`menuButton${color}`} expand="block" onClick={onClick}>{label}</IonButton>
    );
  };
  

  