import {userList} from '~/api/fb/watchers'
export const isUserRegistered = function (email: string): boolean {
        return userList.findIndex((user) => user?.email === email) !== -1
}
