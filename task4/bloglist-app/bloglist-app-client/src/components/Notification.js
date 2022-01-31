const Notification = ({ message, classname }) => {
    return (
        <div className={`${classname}`}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
