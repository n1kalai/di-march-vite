import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAAgu3FCSyMGUK_cOXAODy1oa5zhqbqWrI",
	authDomain: "fir-test-6a6df.firebaseapp.com",
	databaseURL: "https://fir-test-6a6df.firebaseio.com",
	projectId: "fir-test-6a6df",
	storageBucket: "fir-test-6a6df.appspot.com",
	messagingSenderId: "512845159561",
	appId: "1:512845159561:web:0758ab7fd12503aabbba58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //database
