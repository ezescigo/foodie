import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARz4_Vbt3YvI-qB1VNgyT4F11vGBdhrqE",
  authDomain: "foodie-4da8b.firebaseapp.com",
  projectId: "foodie-4da8b",
  storageBucket: "foodie-4da8b.appspot.com",
  messagingSenderId: "290801636854",
  appId: "1:290801636854:web:763889095853ca7f1563d7",
};

let firebaseApp;

firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp);

export { firebaseApp };
