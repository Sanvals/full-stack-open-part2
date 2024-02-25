const Notification = ({message, alertMode = "green"}) => {
    if (message == null) {
        return null
    }

    return (
        <div className={alertMode}>
            {message}
        </div>
    )
}

export default Notification