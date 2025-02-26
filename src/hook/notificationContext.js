import React, {useState, createContext, useCallback, useContext } from "react";

// Notification Component
import Notification from "../components/notification/Notification";

const notificationContext = createContext();

export function NotificationProvider({ children }) {
    // Notification List
    const [notifs, setNotifs] = useState([]);

    // Add Notification
    const addNotif = useCallback((message, type) => {
        // List
        let list = {
            message : message,
            type : type,
        }
        // Add to new notification to list
        setNotifs(prev => [...prev, list]);

        // Remove After 5 seconds
        const duration = 5000;
        setTimeout(() => {
            // Remove Notifation
            removeNotif();
        }, duration);
    }, []);

    // Remove the Notification
    const removeNotif = useCallback(() => {
        setNotifs(prev => prev.slice(1));
    }, [])

    return (
        <notificationContext.Provider value={{ notifs, addNotif }}>
            {children}
            <Notification notif={notifs} />
        </notificationContext.Provider>
    )

}

export function useNotification() {
    return useContext(notificationContext);
}