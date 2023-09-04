// hooks/useGetUserById.js

import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useGetUserById = (userId) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // console.log('Fetching user with ID:', userId);
                const usersRef = collection(db, 'userRef');
                const querySnapshot = await getDocs(query(usersRef, where('userId', '==', userId)));

                if (!querySnapshot.empty) {
                    // User found, set the user data
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    // console.log('User data:', userData);
                    setUser(userData);
                } else {
                    // User not found, set user data to null
                    console.log('User not found');
                    setUser(null);
                }
            } catch (error) {
                console.error('Error getting user:', error);
                setUser(null);
            }
        };

        if (userId) {
            fetchUser();
        } else {
            setUser(null);
        }
    }, [userId]);

    return user;
};


export default useGetUserById;