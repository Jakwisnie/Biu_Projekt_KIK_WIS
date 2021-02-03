import React from 'react'

const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`}>
            <p>Podałeś juz tą literę</p>
        </div>
    )
}

export default Notification
