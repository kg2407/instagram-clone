import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Here I want to import the seed file
const config = {
    apiKey: "AIzaSyBAQUKHtU3gxYev_mXWxeRDMDOJiltI7aQ",
    authDomain: "instagram-clone-1b6cc.firebaseapp.com",
    projectId: "instagram-clone-1b6cc",
    storageBucket: "instagram-clone-1b6cc.appspot.com",
    messagingSenderId: "77286496333",
    appId: "1:77286496333:web:e07ce26bc685d2bb88e404"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore
//Here is I want to call the seed file (only Once!)
//seedDatabase(firebase)

export { firebase, FieldValue }
