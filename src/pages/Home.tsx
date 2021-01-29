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
      <div className="ion-text-center">
        <img src='http://www.connecttradenetwork.org/images/logo.png' height="80" width="180" />
      </div>
    <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <img src="https://i.postimg.cc/prFhgCPx/3-Z7-A122611111.jpg"/>
      </IonSlide>
      <IonSlide>
        <img src="https://i.postimg.cc/kX0Mgpvz/IMG-0276-2.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/prFhgCPx/3-Z7-A122611111.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/s2Lxrg1d/uoload-3.jpg"/>
      </IonSlide>
      <IonSlide>
      <img src="https://i.postimg.cc/G2s2hnsB/upload-4.jpg"/>
      </IonSlide>
    </IonSlides> 
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard color="warning">
             <div className="ion-text-center">
            <h1>Why Connect Trade Network?</h1>
          </div>
          </IonCard>
         
        <div className="ion-text-center">
          <img src="https://i.postimg.cc/wMcKxwx8/images.png"/>
        </div> 
        <IonCard>
          <IonItem color="dark">
            <p>
        CTN® organizes large trade shows each year in various cities and countries. Our biggest event; Ghana Trade Exhibition- GTE is aimed at bringing together exhibitors from various countries. Members of CTN® are given priority in booth registration. Members of CTN® also get travel opportunities to attend and participate in trade shows internationally.
        </p>
          </IonItem>
        </IonCard>
         
          <div className="ion-text-center">
        <IonButton routerLink="/Register" color="warning">Join Now</IonButton>
        </div>
        </IonCol>  
      </IonRow>
    </IonGrid>
    <IonCard color="warning">
          <h1 className="ion-text-center">Membership Packages</h1>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Individual (1 Person)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={peopleOutline} slot="start" />
            <IonLabel >Business (1 - 4 Persons)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Corporate (5+ Employees)</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={personOutline} slot="start" />
            <IonLabel >Associations (10+ Employees)</IonLabel>
          </IonItem> 
        </IonCard>
        <IonGrid>
              <IonRow>
                <IonCol>
                      <div className="ion-text-center">
          <img src="https://i.postimg.cc/cLrT1G3S/address.png" height="20" width="20"/>
        </div> 
       <div className="ion-text-center">
         <p>P.0 Box CT 4030 Cantonments.Accra</p>
         </div>
         <div className="ion-text-center">
          <img src="https://i.postimg.cc/3N95hQvG/phone.png" height="20" width="20"/>
        </div> 
       <div className="ion-text-center">
         <p>(233) 205 214. 755 (Ghana)</p>
         </div>
         <div className="ion-text-center">
          <img src="https://i.postimg.cc/3N95hQvG/phone.png" height="20" width="20"/>
        </div> 
       <div className="ion-text-center">
         <p>(+1).213.528.0955 (USA)</p>
         </div>
         <div className="ion-text-center">
          <img src="https://i.postimg.cc/yNrywQxN/email.png" height="20" width="20"/>
        </div> 
       <div className="ion-text-center">
         <p>Info@Connecttradnetwork.Com</p>
         </div>
         <div className="ion-text-center">
           <IonButton routerLink="/Contact Us" color="warning">Contact Us Now</IonButton>
         </div>
         <IonItem>
         </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default home;
