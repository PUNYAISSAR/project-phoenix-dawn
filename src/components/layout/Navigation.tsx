import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  UserCheck, 
  BarChart3, 
  User, 
  Settings, 
  Menu,
  X,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NavigationProps {
  userRole?: "student" | "teacher" | "admin";
}

export const Navigation = ({ userRole = "student" }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      icon: Home,
      label: "Dashboard",
      href: "/",
      roles: ["student", "teacher", "admin"]
    },
    {
      icon: UserCheck,
      label: "Attendance",
      href: "/attendance",
      roles: ["student", "teacher", "admin"]
    },
    {
      icon: BarChart3,
      label: "Reports",
      href: "/reports",
      roles: ["student", "teacher", "admin"]
    },
    {
      icon: User,
      label: "Profile",
      href: "/profile",
      roles: ["student", "teacher", "admin"]
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
      roles: ["admin"]
    }
  ];

  const filteredItems = navigationItems.filter(item => 
    item.roles.includes(userRole)
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
          <div className="flex min-h-0 flex-1 flex-col bg-card border-r">
            {/* Logo */}
            <div className="flex h-16 flex-shrink-0 items-center px-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">SA</span>
                </div>
                <span className="text-lg font-semibold">SmartAttendence</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="lg:hidden">
        <div className="flex h-16 items-center justify-between bg-card border-b px-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">SA</span>
            </div>
            <span className="text-lg font-semibold">SmartAttendence</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">3</Badge>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 bg-card border-b shadow-lg">
            <nav className="space-y-1 p-4">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-40">
        <nav className="flex">
          {filteredItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center py-2 px-1 text-xs transition-colors min-h-[60px]",
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};