import React from 'react';
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
         IonSlides
         
        } 
         from '@ionic/react';
         
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Home.css';
import './main.js';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center" color="warning">
             <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
        {/* <IonRow>
        <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
        </IonRow> */}
      <IonRow>
        <IonCol>
          <IonCard>
          <IonCardContent class="ion-text-center">
           Connect Trade Network
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>
          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default home;
