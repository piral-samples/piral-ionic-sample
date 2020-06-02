import * as React from "react";
import { PiletApi } from "piral";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

export function setupSamplePilet(api: PiletApi) {
  api.registerPage("/photos", () => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Photos are here</IonContent>
    </IonPage>
  ));
}
