// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5k8-QmXdFwy6stVjCcx_Ep7rb5WrSo6c",
    authDomain: "tutorial-688b4.firebaseapp.com",
    databaseURL: "https://tutorial-688b4.firebaseio.com",
    projectId: "tutorial-688b4",
    storageBucket: "tutorial-688b4.appspot.com",
    messagingSenderId: "267279137266",
    appId: "1:267279137266:web:59118b7518ae22b7c3936b",
    measurementId: "G-DYRRS2K3KK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function writeData(){
    
    var x =  Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    firebase.database().ref("Users/"+x).set({
        firstName:document.getElementById("fname").value,
        lastName:document.getElementById("lname").value,
        contactNum:document.getElementById("cnumber").value,
        address:document.getElementById("address").value
    });
    alert("Successfully Submitted!")
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("cnumber").value="";
    document.getElementById("address").value="";
}