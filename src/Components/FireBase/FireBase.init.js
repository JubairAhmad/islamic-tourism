import { initializeApp } from "firebase/app";
import firebaseConfig from './FireBase.config'

const initializeAuthenticion=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenticion;