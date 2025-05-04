import { createContext, ReactNode, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { login, onAuthChange, register, logout, resetPassword as firebaseResetPassword } from '../auth/authService'; // Ensure these functions are correct

import { FirebaseError } from 'firebase/app';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>; 
  resetPassword: (email: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
 

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Get the role from Firebase token or other sources
        // Set the user role if you need to
        setRole('user'); // Example role, adjust it as needed
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  const handleResetPassword = async (email: string) => {
    try {
      await firebaseResetPassword(email);
    } catch (error) {
      console.error('Password reset error:', error);
      setError('Failed to send password reset email.');
    }
  };  
  const handleLogin = async (email: string, password: string) => {
    try {
      // Attempt login
      await login(email, password);
  
     
    } catch (err: unknown) {
      // Handle login error and set error message in context
      if (err instanceof FirebaseError) {
        // FirebaseError is now recognized
        setError(err.message); // Set Firebase error message to be displayed in the components
      } else {
        // Handle other errors
        setError("An unexpected error occurred.");
      }
    }
  };


  const handleRegister = async (email: string, password: string) => {
    await register(email, password);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <AuthContext.Provider value={{ error, setError, user, loading, role, login: handleLogin, register: handleRegister, logout: handleLogout, resetPassword: handleResetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
