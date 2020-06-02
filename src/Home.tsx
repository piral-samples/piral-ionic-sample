import * as React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
} from "@ionic/react";

export const Home = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton>Test</IonFabButton>
      </IonFab>
    </IonContent>
  </IonPage>
);
