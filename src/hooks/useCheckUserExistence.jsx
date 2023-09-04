import React from 'react'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

const useCheckUserExistence = async (userId) => {
    try {
        const usersRef = collection(db, 'userRef');
        const userRef = doc(usersRef, userId);
        const docData = await getDoc(userRef);
        return docData.exists();
    } catch (error) {
        // Handle the error here
        console.error("Error checking user existence:", error);
        return false; // Assuming user doesn't exist in case of error
    }
}

export default useCheckUserExistence