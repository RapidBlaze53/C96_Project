// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwSsy4pwUMlROP-sAIFEWcW6Nd6tyy7xg",
    authDomain: "socialwebsite-616eb.firebaseapp.com",
    databaseURL: "https://socialwebsite-616eb-default-rtdb.firebaseio.com",
    projectId: "socialwebsite-616eb",
    storageBucket: "socialwebsite-616eb.appspot.com",
    messagingSenderId: "58479220655",
    appId: "1:58479220655:web:e328883f5e32549d93015a"
  };

  function logout() {
    window.location = "index.html";
  }

  addRoom(); {
    roomname = document.getElementById("room-name").value
  localStorage.setItem(roomname , "roomname");
  window.location="kwitter-page.html"
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div> <h3>" + roomname + "</h3></div>"
//End code
});});}
getData();

redirectToRoomName(); {
  localStorage.setItem(roomname, "room_name")
  window.location = "kwitter-page.html"
}


