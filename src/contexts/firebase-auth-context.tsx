import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import {
  doc,
  Firestore,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { firebaseApp } from "../lib/firebase";
import { User } from "../types/user";

const auth = getAuth(firebaseApp);

type CreateUserProps = {
  name: string;
  email: string;
  password: string;
};

export interface AuthContextValue {
  isAuthenticated: boolean;
  user: User;
  db: Firestore;
  setUser: (value: User) => void;
  signInEmail: (
    email: string,
    password: string
  ) => Promise<UserCredential | AuthError>;
  createUserEmail: ({ email, name, password }: CreateUserProps) => Promise<any>;
  logout: () => Promise<any>;
  getUser: () => void;
  resetPassword: (email: string) => Promise<any>;
  handleLoadingPage: (action: boolean) => void;
  isLoadingPage: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);

  const db = getFirestore(firebaseApp);

  const signInEmail = async (
    email: string,
    password: string
  ): Promise<UserCredential | AuthError> => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const createUserEmail = async ({
    name,
    email,
    password,
  }: CreateUserProps): Promise<any> => {
    return await createUserWithEmailAndPassword(auth, email, password).then(
      async () => {
        if (auth.currentUser) {
          setUser({
            name: name,
            email: email,
            uid: auth.currentUser.uid,
          });

          await setDoc(doc(db, "users", auth.currentUser.uid), {
            name: name,
            email: email,
            uid: auth.currentUser.uid,
          });
        }
      }
    );
  };

  const logout = () => {
    setIsAuthenticated(false);
    return signOut(auth);
  };

  const getUser = useCallback(async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser?.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        logout();
      } else {
        setUser(docSnap.data() as User);
      }
    }
  }, [db]);

  const onAuth = useCallback(() => {
    onAuthStateChanged(auth, (userProfile) => {
      if (userProfile) {
        getUser();
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [getUser]);

  const resetPassword = async (email: string): Promise<any> => {
    return sendPasswordResetEmail(auth, email);
  };

  const handleLoadingPage = (action: boolean) => {
    setIsLoadingPage(action);
  };

  useEffect(() => {
    const clearAuth = onAuth();
    return () => clearAuth;
  }, [onAuth]);

  return (
    <AuthContext.Provider
      value={{
        db,
        user,
        setUser,
        isAuthenticated,
        signInEmail,
        logout,
        createUserEmail,
        getUser,
        resetPassword,
        handleLoadingPage,
        isLoadingPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
