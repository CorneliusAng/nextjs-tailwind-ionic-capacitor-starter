import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  IonSearchbar,
} from '@ionic/react';
import Toolbar from './Toolbar';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

const Search = () => {
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>
      <Toolbar title="Thrift"></Toolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Enable Notifications</IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
