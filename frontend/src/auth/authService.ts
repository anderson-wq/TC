import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User,  sendPasswordResetEmail } from 'firebase/auth'; // Ensure correct import of User and onAuthStateChanged
import { FirebaseError } from 'firebase/app'; // 👈 Ensure you're importing FirebaseError for error handling


export const resetPassword = async (email: string): Promise<void> => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
};


export const login = async (email: string, password: string) => {
  const auth = getAuth();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful:', userCredential.user); // Success log
    return userCredential.user;  // Return user details on successful login
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error('Error during login attempt:', error); // Log full error object

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
    
    // General error catch
    throw new Error('An unexpected error occurred.');
  }
};
// Register function
export const register = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
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
