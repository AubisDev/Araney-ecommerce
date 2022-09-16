import { Auth, User, UserCredential } from "firebase/auth";

export interface UserInfo{
    id?: number;
    userName: string;
    email?: string;
    loggedIn?: boolean;
    token?: string;
}

export interface AuthContextModel {
    auth: Auth
    user: User | null
    signIn: (email: string, password: string) => Promise<UserCredential>
    signUp: (name: string, email: string, password: string) => Promise<UserCredential>
    // sendPasswordResetEmail?: (email: string) => Promise<void>
}