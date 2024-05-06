import {getDatabase, onValue, ref} from "firebase/database";
import {useFirebase} from "~/composable/useFirebase";
import {usersEntities} from '~/api/fb/entities'
const {firebaseApp} = useFirebase()
const db = getDatabase(firebaseApp);
export let userList = [];

onValue(usersEntities, (snapshot) => {
    userList = snapshot.val();
});
