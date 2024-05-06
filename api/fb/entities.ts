import {useFirebase} from "~/composable/useFirebase";
import {getDatabase, ref} from "firebase/database";

const {firebaseApp} = useFirebase()
const db = getDatabase(firebaseApp);

export const usersEntities = ref(db, 'users');
