import { Auth, User, UserCredential } from "firebase/auth";

export interface UserInfo{
    id: number;
    username: string;
    token?: string;
}
