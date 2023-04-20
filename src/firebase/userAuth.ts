import { Dispatch } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getIdToken,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import {
  registerUserWithEmailAndPassword,
  setUserData,
  UserLogInWithGoogle,
  userLogout,
  userSignInWithEmailAndPassword,
} from "../redux/states/user";
import { firebaseAuth } from "./firebase";
import { PublicRoutes } from "../models";

interface AuthCheckerProps {
  dispatch: Dispatch;
  navigate: NavigateFunction;
}

interface dispatchProps {
  dispatch: Dispatch;
  navigate: NavigateFunction;
}

interface EmailAndPasswordProps {
  dispatch: Dispatch;
  email: string;
  password: string;
  navigate: NavigateFunction;
}

interface UserRegistrationProps {
  dispatch: Dispatch;
  username: string;
  email: string;
  password: string;
  navigate: NavigateFunction;
}

interface UserLogoutProps {
  dispatch: Dispatch;
}

export const isUserChecked = ({ dispatch, navigate }: AuthCheckerProps) => {
  firebaseAuth.onAuthStateChanged(async (user: User | null) => {
    if (user) {
      const token = await firebaseAuth.currentUser?.getIdToken(true);
      dispatch(
        setUserData({
          username: user.displayName,
          email: user.email,
          token,
        })
      );
      navigate(PublicRoutes.HOME);
    } else {
      dispatch(userLogout({}));
    }
  });
};

export const googleSignIn = async ({ dispatch, navigate }: dispatchProps) => {
  signInWithPopup(firebaseAuth, new GoogleAuthProvider())
    .then((resp: UserCredential) => {
      const { user } = resp;
      dispatch(
        UserLogInWithGoogle({
          username: user.displayName,
          email: user.email,
          token: GoogleAuthProvider.credentialFromResult(resp)?.accessToken,
        })
      );
      navigate(PublicRoutes.HOME);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const handleUserRegistration = async ({
  dispatch,
  username,
  email,
  password,
  navigate,
}: UserRegistrationProps) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password).then(
    async (resp: UserCredential) => {
      const { user: userAuth } = resp;
      let token: string = "";
      getIdToken(userAuth).then((results) => {
        token = results;
      });
      await updateProfile(userAuth, {
        displayName: username,
      });
      dispatch(
        registerUserWithEmailAndPassword({
          email: userAuth.email,
          username: userAuth.displayName,
          token,
        })
      );
      navigate(PublicRoutes.HOME);
    }
  );
};

export const userSignIn = async ({
  dispatch,
  email,
  password,
  navigate,
}: EmailAndPasswordProps) => {
  signInWithEmailAndPassword(firebaseAuth, email, password).then(
    async (resp: UserCredential) => {
      const { user: userAuth } = resp;
      let token: string = "";
      await getIdToken(userAuth).then((results) => {
        token = results;
      });
      dispatch(
        userSignInWithEmailAndPassword({
          email: userAuth.email,
          username: userAuth.displayName,
          token,
        })
      );
      navigate(PublicRoutes.HOME);
    }
  );
};

export const userFirebaseLogout = async ({ dispatch }: UserLogoutProps) => {
  firebaseAuth.signOut().then(() => {
    dispatch(userLogout({}));
    location.reload();
  });
};
