import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { callOutline, helpCircleOutline, home, peopleCircle, personCircleOutline, personOutline } from 'ionicons/icons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/About Us" component={About} exact={true} />
          <Route path="/Contact Us" component={Contact} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="About Us" href="/About Us">
            <IonIcon icon={peopleCircle} />
            <IonLabel>About Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact Us" href="/Contact Us">
            <IonIcon icon={callOutline} />
            <IonLabel>Contact Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Faq" href="/Faq">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
