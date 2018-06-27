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

// security: name of the security to download
// tag: "values" for shares-type or "data" for the last values
function getrefData(security,tag) {
    switch(tag) {
        case 'data':
            return (firebase.database().ref('/'/*+security+'data'*/)
                        .once('value'));
            // return firebase.database().ref('/'+security+'/'+security+'data').limitToLast(1000)
            //             .once('value');
        case 'values':
            return (firebase.database().ref('/'+security+'values')
                        .once('value'));
        default:
            console.log("Error in parameters to retreive data from Firebase");      
    }
}

export default getrefData