import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBb_1SA09D6rQQqXtgXUV15Q_qSckQAp_c',
  authDomain: 'hot-takes-redux-50333.firebaseapp.com',
  databaseURL: 'https://hot-takes-redux-50333.firebaseio.com',
  projectId: 'hot-takes-redux-50333',
  storageBucket: 'hot-takes-redux-50333.appspot.com',
  messagingSenderId: '76918745243'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
