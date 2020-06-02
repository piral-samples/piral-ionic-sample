import * as React from "react";
import { square, triangle, images } from "ionicons/icons";
import { Link, Redirect } from "react-router-dom";
import {
  ComponentsState,
  ErrorComponentsState,
  Notifications,
  SwitchErrorInfo,
  Menu,
} from "piral";
import {
  IonApp,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  DashboardContainer: () => <Redirect from="/" to="/home" />,
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  Layout: ({ children }) => (
    <IonApp>
      <Notifications />
      <IonTabs>
        <IonRouterOutlet>{children}</IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/photos">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/about">
            <IonIcon icon={square} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonApp>
  ),
};
