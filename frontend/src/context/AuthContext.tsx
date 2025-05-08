import { createContext, ReactNode, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { login, onAuthChange, register, logout, resetPassword as firebaseResetPassword, firebaseUpdateProfile } from '../auth/authService';  // Import firebaseUpdateProfile

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (user: User, updates: { displayName?: string, photoURL?: string }) => Promise<void>;  // Add the updateProfile function to context
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
        setRole('user');  // Example role, adjust it as needed
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
      await login(email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleRegister = async (email: string, password: string, fullName: string) => {
    try {
      await register(email, password, fullName);  // Pass fullName to register function
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleUpdateProfile = async (user: User, updates: { displayName?: string, photoURL?: string }) => {
    try {
      await firebaseUpdateProfile(user, updates);  // Use firebaseUpdateProfile here
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile.');
    }
  };

  return (
    <AuthContext.Provider value={{ error, setError, user, loading, role, login: handleLogin, register: handleRegister, logout: handleLogout, resetPassword: handleResetPassword, updateProfile: handleUpdateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
