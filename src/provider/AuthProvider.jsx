// providers/AuthProvider.js

import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import useGetUserById from '../hooks/useGetUserById';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user] = useAuthState(auth);
    const [myUserDb, setMyUserDb] = useState(null);
    const userId = user?.uid;
    let a = useGetUserById(userId);

    // Fetch user data using the custom hook inside the functional component
    const userData = useGetUserById(userId);

    // When the user changes, update myUserDb state with the fetched user data
    useEffect(() => {
        setMyUserDb(userData);
    }, [userData, a]);

    const handleLogOut = () => {
        auth.signOut();
        setMyUserDb(null);
    };

    const authContextValue = {
        user: myUserDb,
        logout: handleLogOut,
        setMyUserDb
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };