import firebase from "firebase"
import { auth } from "../App"


export default function SignIn ({  }) {

    const signInWithGoogle = () => {
        const provider = firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return(
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
