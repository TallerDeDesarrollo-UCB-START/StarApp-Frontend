import fb from "firebase";

const config = {
  apiKey: "AIzaSyDoUaczcNSjuDo4FncPmz7EwLDkoTgQxNM",
  authDomain: "testing-start.firebaseapp.com",
  projectId: "testing-start",
  storageBucket: "testing-start.appspot.com",
  messagingSenderId: "87018430306",
  appId: "1:87018430306:web:dd3a61f67539e3700cd63b",
  measurementId: "G-RMBTG4Y43Z",
};
fb.initializeApp(config);

export default fb;
