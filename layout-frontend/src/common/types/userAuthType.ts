export default interface userAuth {
    username: string,
    roles: string[],
    token: string,
    expires: Date
};