import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyCAd4Nh3VBSDNMppKtG7T9BtQYLEU7lNY4",
	authDomain: "auth-test-baad8.firebaseapp.com",
	projectId: "auth-test-baad8",
	storageBucket: "auth-test-baad8.appspot.com",
	messagingSenderId: "663153262666",
	appId: "1:663153262666:web:4e0aacb5fda61a8910e6b3"
});

const auth = app.auth();
export { auth };
export default app;
