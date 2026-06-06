import { createContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth"; // 1. Imported the User type from Firebase
import { auth } from "../firebase";

// 2. The Interface lines go right here at the top!
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode; // Explicitly types the React children components
}

// Now TypeScript knows exactly what 'AuthContextType' means
export const AuthContext = createContext<AuthContextType | null>(null);

// 3. Apply the type to the incoming props object
const AuthProvider = ({ children }: AuthProviderProps) => {
  // 4. Tell the state it can hold a Firebase 'User' object or 'null'
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup the listener on unmount
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;