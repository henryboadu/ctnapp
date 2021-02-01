import React, {useState} from 'react';
import { IonContent, IonHeader, IonButtons, IonBackButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonCard,IonGrid, IonRow, IonCol, IonButton, IonInput, IonRouterLink } from '@ionic/react';

const register: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar color="warning">
          <IonButtons slot="start">
          <IonBackButton text="Back" icon="buttonIcon"/>
        </IonButtons>
            <IonTitle class="ion-text-center">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonCard>
      <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput type="text" placeholder=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" placeholder=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Telephone Number</IonLabel>
            <IonInput type="number" placeholder=""></IonInput>
          </IonItem>  
          <p className="ion-text-center">Already a member?</p>
          <p className="ion-text-center"><IonRouterLink href="/Login">Login here</IonRouterLink> </p>
    </IonCard>
    <IonGrid>
              <IonRow>
                <IonCol size="3">
                </IonCol>
                <IonCol class="ion-text-center" size="5">
                <IonButton size="large" href="#" class="ion-text-center" shape="round"color="warning">Register</IonButton>
                </IonCol>
                <IonCol size="4">
                </IonCol>
              </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default register;
