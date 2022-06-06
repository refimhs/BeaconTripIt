import * as firebase from 'firebase';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyC8_iCVBWaFRSw9qOibIZmLkVRnc6PTh3E",
        authDomain: "tripit-94945.firebaseapp.com",
        databaseURL: "https://tripit-94945-default-rtdb.firebaseio.com",
        projectId: "tripit-94945",
        storageBucket: "tripit-94945.appspot.com",
        messagingSenderId: "690836474773",
        appId: "1:690836474773:web:b6558ab3c5f722866ec49c",
        measurementId: "G-V3Y6P87WLC"
    })
}else{
    firebase.app()
}

export default configFirebase2