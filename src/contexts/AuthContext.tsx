import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: "host" | "attendee";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: "host" | "attendee") => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // In a real app, this would use Supabase or another auth provider
  const login = async (email: string, password: string) => {
    // Simulate API call
    try {
      // Get the stored user data for this email
      const storedUserData = localStorage.getItem(`user_data_${email}`);
      let userName = email.split('@')[0]; // Default name based on email if no stored data
      let userRole: "host" | "attendee" = "attendee"; // Default role
      
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        userName = userData.name;
        userRole = userData.role;
      } else {
        // Fallback to legacy storage method
        userRole = localStorage.getItem(`user_role_${email}`) as "host" | "attendee" || "attendee";
      }
      
      // Mock successful login
      const mockUser = {
        id: "user123",
        name: userName,
        email,
        role: userRole
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${userName}!`,
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: "host" | "attendee") => {
    // Simulate API call
    try {
      // Mock successful registration - in real app would create user in backend
      const mockUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        role
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      // Store the user data by email for future logins
      localStorage.setItem(`user_data_${email}`, JSON.stringify({ name, role }));
      
      // Keep legacy storage for backward compatibility
      localStorage.setItem(`user_role_${email}`, role);
      
      toast({
        title: "Registration successful",
        description: `Welcome to PlanKaro, ${name}!`,
      });
    } catch (error) {
      console.error("Register error:", error);
      toast({
        title: "Registration failed",
        description: "Could not create account. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  // Check if user is already logged in from local storage
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
