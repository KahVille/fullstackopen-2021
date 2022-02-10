import { useSelector } from "react-redux";


const Notification = () => {

  let hiddenNotification = false;

    const notification = useSelector(state => {
      if(state.notification.notification === '')
        hiddenNotification = true;
      
      return state.notification.notification
    })

    const styleVisible = {
      visibility: 'visible',
      border: 'solid',
      padding: 10,
      borderWidth: 1
    };

    const styleHidden = {
      visibility: 'hidden'
    };

    return (
      <div style={hiddenNotification ? styleHidden : styleVisible}>
        {notification}
      </div>
    )
};
  
  export default Notification;
