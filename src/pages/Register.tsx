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
              <IonSelectOption value="Avertising">Avertising & Media</IonSelectOption>
              <IonSelectOption value="Agriculture">Agriculture, Fishing & Forestry </IonSelectOption>
              <IonSelectOption value="Arts">Arts, Culture & Entertainment</IonSelectOption>
              <IonSelectOption value="Automotive">Automotive & Marine</IonSelectOption>
              <IonSelectOption value="Business">Business & Professional Services</IonSelectOption>
              <IonSelectOption value="Computers">Computers & Telecommunications</IonSelectOption>
              <IonSelectOption value="Construction">Construction Epuipment & Contractors</IonSelectOption>
              <IonSelectOption value="Education">Education</IonSelectOption>
              <IonSelectOption value="Family">Family, Community & Civic Organizations</IonSelectOption>
              <IonSelectOption value="Finance">Finance & Insurance</IonSelectOption>
              <IonSelectOption value="Financial">Financial Services & Banking</IonSelectOption>
              <IonSelectOption value="Fitness">Fitness/Gyms</IonSelectOption>
              <IonSelectOption value="Government">Government, Education & Individuals</IonSelectOption>
              <IonSelectOption value="Grocery">Grocery</IonSelectOption>
              <IonSelectOption value="Health">Health & Beauty</IonSelectOption>
              <IonSelectOption value="HealthCare">Health Care</IonSelectOption>
              <IonSelectOption value="Home">Home & Garden</IonSelectOption>
              <IonSelectOption value="Housing">Housing</IonSelectOption>
              <IonSelectOption value="Insurance">Insurance - General</IonSelectOption>
              <IonSelectOption value="rLegaled">Legal</IonSelectOption>
              <IonSelectOption value="Lodging">Lodging & Travel</IonSelectOption>
              <IonSelectOption value="Manufacturing">Manufacturing, Production & Wholesale</IonSelectOption>
              <IonSelectOption value="Charitable">Non-Profit/Charitable Organizations</IonSelectOption>
              <IonSelectOption value="Educational">Not-for-Profit/Educational</IonSelectOption>
              <IonSelectOption value="Notary">Notary/Document Legalization</IonSelectOption>
              <IonSelectOption value="Personal">Personal Services & Care</IonSelectOption>
              <IonSelectOption value="Pets">Pets & Veterinary</IonSelectOption>
              <IonSelectOption value="Professional">Professional </IonSelectOption>
              <IonSelectOption value="Public">Public Utilities & Environment</IonSelectOption>
              <IonSelectOption value="Commercial">Real Estate Services & Commercial </IonSelectOption>
              <IonSelectOption value="Residential">Real Estate Services & Residential</IonSelectOption>
              <IonSelectOption value="Religious">Religious Organizations</IonSelectOption>
              <IonSelectOption value="Restaurants">Restaurants, Food & Beverages</IonSelectOption>
              <IonSelectOption value="Retail">Retail: Apparel, Gifts, Misc</IonSelectOption>
              <IonSelectOption value="Senior">Senior Housing & Services</IonSelectOption>
              <IonSelectOption value="Shopping">Shopping Centers</IonSelectOption>
              <IonSelectOption value="Sports">Sports & Recreation</IonSelectOption>
              <IonSelectOption value="Transportation">Transportation </IonSelectOption>
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
