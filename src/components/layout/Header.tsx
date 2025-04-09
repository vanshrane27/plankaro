
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-purple-600 rounded-full p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-purple-600">PlanKaro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated && user?.role === "host" && (
              <Link
                to="/add-event"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive("/add-event")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                Add Event
              </Link>
            )}
          </nav>

          {/* Auth buttons for desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-gray-500 mr-1">Signed in as</span>
                  <span className="font-medium text-purple-600">{user?.name}</span>
                  <span className="ml-1 text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
                    {user?.role}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  onClick={logout}
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Sign in
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-base font-medium rounded-md ${
                    isActive(item.path)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

              {isAuthenticated && user?.role === "host" && (
                <Link
                  to="/add-event"
                  className={`px-4 py-2 text-base font-medium rounded-md ${
                    isActive("/add-event")
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                  onClick={closeMenu}
                >
                  Add Event
                </Link>
              )}
            </nav>

            <div className="pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Signed in as </span>
                    <span className="font-medium text-purple-600">{user?.name}</span>
                    <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
                      {user?.role}
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={closeMenu} className="block w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Sign in
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
