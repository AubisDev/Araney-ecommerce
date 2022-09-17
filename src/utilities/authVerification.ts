import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "../firebase/firebase"


export const isUserLoggedIn = () => {
    onAuthStateChanged(firebaseAuth, (userAuth) => {
        if (userAuth) {
            return userAuth;
        }
    })
}

export const userFirebaseLogout = () => firebaseAuth.signOut();