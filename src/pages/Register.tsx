import React, {useState} from 'react';
import { IonContent, IonHeader, IonSelect, IonSelectOption, IonItemDivider, IonButtons, IonBackButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonCard,IonGrid, IonRow, IonCol, IonButton, IonInput, IonRouterLink } from '@ionic/react';

const register: React.FC = () => {
  // const [gender, setGender] = useState<string>();
  // const [hairColor, setHairColor] = useState<string>('brown');

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
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput type="text" placeholder=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
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
          <IonItem>
            <IonLabel position="floating">Company Name</IonLabel>
            <IonInput type="text" placeholder=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Industry</IonLabel>
            {/* <IonSelect value={hairColor} okText="Okay" cancelText="Dismiss" onIonChange={e => setHairColor(e.detail.value)}> */}
            <IonSelect>
              <IonSelectOption value="brown">Avertising & Media</IonSelectOption>
              <IonSelectOption value="blonde">Agriculture, Fishing & Forestry </IonSelectOption>
              <IonSelectOption value="black">Arts, Culture & Entertainment</IonSelectOption>
              <IonSelectOption value="red">Automotive & Marine</IonSelectOption>
              <IonSelectOption value="brown">Business & Professional Services</IonSelectOption>
              <IonSelectOption value="blonde">Computers & Telecommunications</IonSelectOption>
              <IonSelectOption value="black">Construction Epuipment & Contractors</IonSelectOption>
              <IonSelectOption value="red">Education</IonSelectOption>
              <IonSelectOption value="red">Family, Community & Civic Organizations</IonSelectOption>
              <IonSelectOption value="red">Finance & Insurance</IonSelectOption>
              <IonSelectOption value="red">Financial Services & Banking</IonSelectOption>
              <IonSelectOption value="red">Fitness/Gyms</IonSelectOption>
              <IonSelectOption value="red">Government, Education & Individuals</IonSelectOption>
              <IonSelectOption value="red">Grocery</IonSelectOption>
              <IonSelectOption value="red">Health & Beauty</IonSelectOption>
              <IonSelectOption value="red">Health Care</IonSelectOption>
              <IonSelectOption value="red">Home & Garden</IonSelectOption>
              <IonSelectOption value="red">Housing</IonSelectOption>
              <IonSelectOption value="red">Insurance - General</IonSelectOption>
              <IonSelectOption value="red">Legal</IonSelectOption>
              <IonSelectOption value="red">Lodging & Travel</IonSelectOption>
              <IonSelectOption value="red">Manufacturing, Production & Wholesale</IonSelectOption>
              <IonSelectOption value="red">Non-Profit/Charitable Organizations</IonSelectOption>
              <IonSelectOption value="red">Not-for-Profit/Educational</IonSelectOption>
              <IonSelectOption value="red">Notary/Document Legalization</IonSelectOption>
              <IonSelectOption value="red">Personal Services & Care</IonSelectOption>
              <IonSelectOption value="red">Pets & Veterinary</IonSelectOption>
              <IonSelectOption value="red">Professional </IonSelectOption>
              <IonSelectOption value="red">Public Utilities & Environment</IonSelectOption>
              <IonSelectOption value="red">Real Estate Services & Commercial </IonSelectOption>
              <IonSelectOption value="red">Real Estate Services & Residential</IonSelectOption>
              <IonSelectOption value="red">Religious Organizations</IonSelectOption>
              <IonSelectOption value="red">Restaurants, Food & Beverages</IonSelectOption>
              <IonSelectOption value="red">Retail: Apparel, Gifts, Misc</IonSelectOption>
              <IonSelectOption value="red">Senior Housing & Services</IonSelectOption>
              <IonSelectOption value="red">Shopping Centers</IonSelectOption>
              <IonSelectOption value="red">Sports & Recreation</IonSelectOption>
              <IonSelectOption value="red">Transportation </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" placeholder=""></IonInput>
          </IonItem> 
          {/* <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Gender: {gender ?? '(none selected)'}</IonItem>
          <IonItem>Hair Color: {hairColor}</IonItem> */}
          
          <p className="ion-text-center">Already a member?</p>
          <p className="ion-text-center"><IonRouterLink href="/Login">Login here</IonRouterLink> </p>
    </IonCard>
    <IonGrid>
              <IonRow>
                <IonCol size="4">
                </IonCol>
                <IonCol class="ion-text-center" size="4">
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
