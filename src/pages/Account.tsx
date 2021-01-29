import React from 'react';
import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Account.css';


const faq: React.FC = () => {
  return (
    <IonPage >
      <IonContent class="bg-image" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="warning">
            <IonTitle class="ion-text-center" >Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonImg src='http://www.connecttradenetwork.org/images/logo.png' /> */}
        <div className="wrap-input">
             <div className="text-color">
          <p className="ion-text-center">Already a member? Click below to login</p>
        <div className="ion-text-center">
        <IonButton routerLink="/Login">Login</IonButton>
        </div>
        <p className="ion-text-center">New to CTN? Click below to register</p>
        <div className="ion-text-center">
        <IonButton routerLink="/Register">Register</IonButton>
        </div>
        </div>
        </div>
     
        
        
      </IonContent>
    </IonPage>
  );
};

export default faq;
