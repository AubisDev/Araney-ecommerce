import { initializeApp } from "@Firebase/app";
​​import { getAuth } from "@Firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDUUfeNoCUTxRz_Yorl6YhlKZZjgWTxFfQ",
  authDomain: "araney-ecommerce.firebaseapp.com",
  projectId: "araney-ecommerce",
  storageBucket: "araney-ecommerce.appspot.com",
  messagingSenderId: "286092809769",
  appId: "1:286092809769:web:0a6343246e01e2e381ae38"
};

const app = initializeApp(firebaseConfig);
export const fbAuth = getAuth(app);

