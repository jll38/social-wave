import { FirebaseError } from "firebase/app";
export function handleFirebaseLoginError(error: FirebaseError): string {
    if(error.code === "auth/missing-email"){
        return "Please enter your email address";
    } else if(error.code === "auth/invalid-email"){
        return "Please enter a valid email address";
    } else if(error.code === "auth/missing-password"){
        return "Please enter your password";
    }
    else if(error.code === "auth/weak-password"){
        return "Password should be at least 6 characters!";
    }
    return "Error: " + error.message;
}