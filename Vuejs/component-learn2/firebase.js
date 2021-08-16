// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-Pzxo1KzOjLpbmL1ENiHfLl2UfvqGW30",
    authDomain: "tutorial-vuejs-33989.firebaseapp.com",
    projectId: "tutorial-vuejs-33989",
    storageBucket: "tutorial-vuejs-33989.appspot.com",
    messagingSenderId: "465647975702",
    appId: "1:465647975702:web:2d562ebf74d94860032437"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const kelasRef = database.ref('kelas');