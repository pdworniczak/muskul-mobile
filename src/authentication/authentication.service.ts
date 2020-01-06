import firebase from "firebase";

function logIn(
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export default {
  logIn
};
