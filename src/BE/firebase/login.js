import { auth, fire } from './firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider

export const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const loginWithGoogle = () => {
    return signInWithPopup(auth, provider)
}