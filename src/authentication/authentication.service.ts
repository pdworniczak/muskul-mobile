import firebase from "firebase";

function logIn(
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function logOut(): Promise<void> {
  return firebase.auth().signOut();
}

function getUser(): firebase.User {
  return firebase.auth().currentUser;
}

export default {
  logIn,
  logOut,
  getUser
};
