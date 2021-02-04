import React, {useState} from 'react';
import { 
         IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonCol,
         IonGrid, 
         IonRow,IonCard, 
         IonCardHeader, 
         IonCardSubtitle, 
         IonCardTitle, 
         IonCardContent, 
         IonItem, 
         IonIcon, 
         IonLabel, 
         IonButton,
         IonSlide,
         IonSlides,
         IonImg,
         IonList,
         IonSearchbar, 
         IonFooter
         
        } 
         from '@ionic/react';
         
import { pin, wifi, wine, warning, walk,accessibility, personOutline, peopleCircleOutline, peopleOutline, } from 'ionicons/icons';

const projects: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <div className="dropdown">
           <button className="dropbtn">Projects Undertake</button>
          <div className="dropdown-content">
          <a href="">CTN Development Seminar</a>
          <a href="">CTN Community Outreach</a>
          <a href="">CTN Incubator Program </a>
          <a href="">CTN Accelerator Competition </a>
          <a href="">CTN Grant</a>
          </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default projects;
