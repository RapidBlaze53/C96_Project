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

  var user_name = localStorage.getItem(username , "user_name")

  var room_name = localStorage.getItem(roomname , "room_name")

  function send() {
    message = document.getElementById("msg").value;
    document.getElementById("msg").innerHTML = "";
  }