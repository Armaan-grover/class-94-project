const firebaseConfig = {
    apiKey: "AIzaSyDngcqolSMbiLXwf7YPYyCjlHNqR6sOt-A",
    authDomain: "chattr-beta.firebaseapp.com",
    projectId: "chattr-beta",
    storageBucket: "chattr-beta.appspot.com",
    messagingSenderId: "329528277434",
    appId: "1:329528277434:web:c741fa5b20123f811e8583",
    measurementId: "G-5M7BR93YZM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function addRoom() {
    var roomName = document.getElementById("roomName").value
    localStorage.setItem("roomName", roomName)
    firebase.database().ref("/").child(roomName).update({
          purpose: "adding room name"
    }

    )
    window.location="kwitterRoom.html"
}
function logout(){
    localStorage.removeItem("roomName")
    localStorage.removeItem("user")
    window.location="index.html"
    }