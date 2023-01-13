// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAX1IdY9z3UIHlLI85_v1oFfsGlSqxz8do",
	authDomain: "first-auth-87e6d.firebaseapp.com",
	projectId: "first-auth-87e6d",
	storageBucket: "first-auth-87e6d.appspot.com",
	messagingSenderId: "557182584424",
	appId: "1:557182584424:web:33d6ecaf33767825485ddd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
