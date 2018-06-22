import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCkmvQ5XuvTRfCFbCj-w65uUdxq1GfYZ-g",
    authDomain: "roboadvisor-ccf56.firebaseapp.com",
    databaseURL: "https://roboadvisor-ccf56.firebaseio.com",
    projectId: "roboadvisor-ccf56",
    storageBucket: "roboadvisor-ccf56.appspot.com",
    messagingSenderId: "666908399026"
};
firebase.initializeApp(config);

function getrefData() {
    return firebase.database().ref('/exon-data').once('value');
}

export default getrefData