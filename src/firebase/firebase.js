import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXMx78-Ia8uNGddmYU5e4J6MS32sKzn-8",
    authDomain: "ecommerce-bebidas-combo-loco.firebaseapp.com",
    projectId: "ecommerce-bebidas-combo-loco",
    storageBucket: "ecommerce-bebidas-combo-loco.appspot.com",
    messagingSenderId: "637564674703",
    appId: "1:637564674703:web:e06a27ba68639ac35a86fa"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db