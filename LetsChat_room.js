const firebaseConfig = {
      apiKey: "AIzaSyAxukuM533F6iMf4TG6ZXPZBIi6M3twRTY",
      authDomain: "class-94-74b6e.firebaseapp.com",
      databaseURL: "https://class-94-74b6e-default-rtdb.firebaseio.com",
      projectId: "class-94-74b6e",
      storageBucket: "class-94-74b6e.appspot.com",
      messagingSenderId: "105303470829",
      appId: "1:105303470829:web:efa32df4ece290e8d512e4",
      measurementId: "G-335M2H8DYY"
};
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
