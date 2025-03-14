'use client'
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: { role: string; email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string, role: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ role: string; email: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // Simulate login logic
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.email === email && userData.password === password) {
        setUser({ email, role: userData.role });
        localStorage.setItem("user", JSON.stringify({ email, role: userData.role }));
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("User not found");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signup = (email: string, password: string, role: string) => {
    // Simulate signup logic
    const userData = { email, password, role };
    setUser({ email, role });
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;