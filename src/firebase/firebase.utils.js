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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
