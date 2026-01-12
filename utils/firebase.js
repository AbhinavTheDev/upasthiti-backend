import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmHPRrlrJo_wEGWGtqnnlWARG_mjXQ_do",
  authDomain: "upasthiti-vipstc.firebaseapp.com",
  projectId: "upasthiti-vipstc",
  storageBucket: "upasthiti-vipstc.firebasestorage.app",
  messagingSenderId: "835896602826",
  appId: "1:835896602826:web:d2fee5116d800371f38433",
  measurementId: "G-8RZRM14KWD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}