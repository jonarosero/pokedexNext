import { GoogleAuthProvider, signOut, signInWithRedirect } from 'firebase/auth';
import auth from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const googleAuth = new GoogleAuthProvider();

export const login = async () => {
  const result = await signInWithRedirect(auth, googleAuth);
};

export const logout = async () => {
  await signOut(auth);
};

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return { user, loading, error };
};