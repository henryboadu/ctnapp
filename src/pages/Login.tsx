import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonButtons, IonBackButton, IonTitle, IonToolbar, IonRouterLink, IonItem, IonLabel, IonCard,IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';

const login: React.FC = () => {
  
  return (
    
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar color="warning">
          <IonButtons slot="start">
          <IonBackButton text="Back" icon="buttonIcon"/>
        </IonButtons>
            <IonTitle class="ion-text-center">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonCard>
      <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" placeholder=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" placeholder=""></IonInput>
          </IonItem>   
          <p className="ion-text-center"><IonRouterLink href="/Login">Forgot Password</IonRouterLink> </p>
    </IonCard>
    <IonGrid>
              <IonRow>
                <IonCol size="4">
                </IonCol>
                <IonCol class="ion-text-center" size="4">
                <IonButton size="large" href="#" class="ion-text-center" shape="round"color="warning">Login</IonButton>
                </IonCol>
                <IonCol size="4">
                </IonCol>
              </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
    
    
  );
};

export default login;
