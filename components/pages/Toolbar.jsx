import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSearchbar,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { cashOutline } from 'ionicons/icons';

const Toolbar = ({ title }) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{title}</IonTitle>
                <IonButton fill="clear" slot="end">
                    Sign In
                </IonButton>
                <IonButton fill="clear" slot="end">
                    Sign Up
                </IonButton>
                <IonButton color="success" slot="end">
                    <IonIcon slot="end" icon={cashOutline} />
                    Sell
                </IonButton>
            </IonToolbar>
        </IonHeader>
    )
}

export default Toolbar;
