import { getDatabase, ref, onValue, set, child, get } from "firebase/database";
import  {signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import {useFirebase} from '~/composable/useFirebase'
import  {userList} from '~/api/fb//watchers'
import {md5} from "js-md5";
import {isUserRegistered} from "~/api/fb/validation";

const {firebaseApp} = useFirebase()
const db = getDatabase(firebaseApp);
export const registrationUser = async function (email: string, pass: string) {
    debugger
    if (isUserRegistered(email)) {
        return {error: 'Такой пользователь уже зарегистрирован'}
    }
    const newUserId = userList.length;
    set(ref(db, `users/${newUserId}`), {
        email: email,
        pass: md5(pass)
    });
    if (isUserRegistered(email)) {
        return {status: 'success'}
    }
}

export const loginUser = async function (email: string, password: string) {
    // TODO сделать логин
    const auth = getAuth(firebaseApp);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    debugger
}
