import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAjXSYM3dwFMMlV_10BjKQCLQZtSK_eIxw',
	authDomain: 'ecommerce-8be8b.firebaseapp.com',
	databaseURL: 'https://ecommerce-8be8b.firebaseio.com',
	projectId: 'ecommerce-8be8b',
	storageBucket: 'ecommerce-8be8b.appspot.com',
	messagingSenderId: '634654921432',
	appId: '1:634654921432:web:b2f09d428a31165b58bdad'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
