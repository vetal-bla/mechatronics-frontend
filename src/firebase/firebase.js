import * as firebase from 'firebase'

const prodConfig = {
    apiKey: "AIzaSyAYpYCeEwEJXDr9-FXVpVLkvuDtP_cnNCY",
    authDomain: "mechatronics-frontend.firebaseapp.com",
    databaseURL: "https://mechatronics-frontend.firebaseio.com",
    projectId: "mechatronics-frontend",
    storageBucket: "mechatronics-frontend.appspot.com",
    messagingSenderId: "51254523853",
};

const devConfig = {
    apiKey: "AIzaSyCD2RnJlOxRAaZd5DFiCdAleIwS9syJJR8",
    authDomain: "fir-mechatronics.firebaseapp.com",
    databaseURL: "https://fir-mechatronics.firebaseio.com",
    projectId: "firebase-mechatronics",
    storageBucket: "firebase-mechatronics.appspot.com",
    messagingSenderId: "1070019120231",
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
    signInOptions: [
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
                size: 'invisible'
            },
            defaultCountry: 'UA',
        }]
}
export {
    auth,
    uiConfig,
};