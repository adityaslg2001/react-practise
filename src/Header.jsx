import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Header()
{
    let showNotificationSuccess=()=>{
        NotificationManager.success('Tera toh sahi hai bhai.', 'Nice Job!');
    }
    return (
    <h1 onClick={showNotificationSuccess}>THIS IS THE HEADER</h1>
);
}

export  {Header};