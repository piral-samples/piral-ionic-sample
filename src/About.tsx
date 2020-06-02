import * as React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

export const About = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>More details ...</IonContent>
  </IonPage>
);
