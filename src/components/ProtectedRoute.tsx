
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: ReactNode;
  requireRole?: "host" | "attendee";
}

export const ProtectedRoute = ({ 
  children, 
  requireRole 
}: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();

  if (!isAuthenticated) {
    toast({
      title: "Access denied",
      description: "Please sign in to access this page",
      variant: "destructive",
    });
    return <Navigate to="/auth" replace />;
  }

  if (requireRole && user?.role !== requireRole) {
    toast({
      title: "Access denied",
      description: `Only ${requireRole}s can access this page`,
      variant: "destructive",
    });
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
