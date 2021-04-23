import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();

  return result.docs.map((user) => user.data().length > 0).length;
}
