import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User, updateProfile as firebaseUpdateProfile, sendPasswordResetEmail, UserCredential } from 'firebase/auth'; 
import { FirebaseError } from 'firebase/app';

// Reset Password
export const resetPassword = async (email: string): Promise<void> => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
};

// Login function
export const login = async (email: string, password: string) => {
  const auth = getAuth();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error('Error during login attempt:', error);

      if (error.code === 'auth/wrong-password') {
        throw new Error('Incorrect password.');
      }
      if (error.code === 'auth/user-not-found') {
        throw new Error('No user found with this email.');
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email format.');
      }
    }
    throw new Error('An unexpected error occurred.');
  }
};

// Register function
export const register = async (email: string, password: string, fullName: string) => {
  const auth = getAuth();
  
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

    // After user is created, update their profile with the full name
    await firebaseUpdateProfile(userCredential.user, { displayName: fullName });

    console.log("User registered and full name set:", fullName);

    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          throw new Error("This email is already registered.");
        case "auth/invalid-email":
          throw new Error("Invalid email format.");
        default:
          throw new Error("Registration failed. Please try again.");
      }
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unknown error occurred during registration.");
  }
};

// Export firebaseUpdateProfile explicitly so it can be used in other files
export { firebaseUpdateProfile };

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred during logout.");
  }
};

// onAuthChange function (with correct type for the callback parameter)
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
