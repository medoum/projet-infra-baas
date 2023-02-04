import { initializeApp } from "firebase/app";
import { getFirestore }  from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCvG6q_HRo-GuE9sFKalaidAvnCpAdJQt0",
    authDomain: "infra-project-react.firebaseapp.com",
    projectId: "infra-project-react",
    storageBucket: "infra-project-react.appspot.com",
    messagingSenderId: "252407890245",
    appId: "1:252407890245:web:8fbe158902bb35d371be2c",
    measurementId: "G-TC0WD7FXGF"
  };

  const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);