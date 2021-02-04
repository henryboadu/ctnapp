import React from 'react';
import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Account.css';


const Account: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
          <IonToolbar class="ion-text-center" color="warning">
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <div className="pgbackground">
             <div className="text-color">
          <p className="ion-text-center">     </p>
        <div className="ion-text-center">
        <IonButton routerLink="/Login">Login</IonButton>
        </div>
        <p className="ion-text-center">      </p>
        <div className="ion-text-center">
        <IonButton routerLink="/Register">Register</IonButton>
        </div>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
