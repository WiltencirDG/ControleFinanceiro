import Firebase from 'firebase';

const devConfig = {
    apiKey: "AIzaSyDi_ji-Nu3rBsVxVlXvXPRE_EqW5giNbIM",
    authDomain: "schelascontrolefinanceiro.firebaseapp.com",
    databaseURL: "https://schelascontrolefinanceiro.firebaseio.com",
    projectId: "schelascontrolefinanceiro",
    storageBucket: "schelascontrolefinanceiro.appspot.com",
    messagingSenderId: "500482245718"
};

const prodConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export const firebaseImpl = Firebase.initializeApp(config);
export const firebaseDatabase = Firebase.database();
export const firebaseAuth = Firebase.auth();
export const googleProvider = new Firebase.auth.GoogleAuthProvider();
export const facebookProvider = new Firebase.auth.FacebookAuthProvider();