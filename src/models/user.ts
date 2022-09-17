import { Auth, User, UserCredential } from "firebase/auth";

export interface UserInfo{
    id?: number;
    username?: string;
    email?: string;
    loggedIn?: boolean;
    token?: string;
}
