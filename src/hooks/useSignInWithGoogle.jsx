import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleProvider } from '../config/firebase';

const useSignInWithGoogle = async () => {
    if (user) navigate("/")
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        if (user && user.uid) {
            const authenticatedUserId = user.uid;

            const isUserExisting = await useCheckUserExistence(authenticatedUserId);

            if (isUserExisting) {
                // User exists in the database, navigate to the desired page
                navigate("/");
            } else {
                // User schema doesn't exist, create the user schema and redirect
                const userData = {
                    userId: authenticatedUserId,
                    email: user.email,
                    username: user.displayName,
                    role: "user"
                };

                // Create the user schema in Firestore
                await setDoc(doc(usersRef, authenticatedUserId), userData);

                // Update the user context or perform any other necessary actions
                setMyUserDb(userData);

                // Navigate to the desired page
                navigate("/");
            }
        } else {
            console.error("Error signing in with Google: User information not available.");
        }
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
}

export default useSignInWithGoogle