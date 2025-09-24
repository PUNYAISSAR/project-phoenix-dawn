import { useState } from "react";
import { Eye, EyeOff, User, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginFormProps {
  onForgotPassword: () => void;
  onSignUp: () => void;
  onBiometricLogin?: () => void;
}

export const LoginForm = ({ onForgotPassword, onSignUp, onBiometricLogin }: LoginFormProps) => {
  const [userType, setUserType] = useState<"student" | "teacher" | "admin">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // TODO: Implement actual authentication logic with Supabase
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log("Login attempt:", { userType, email, rememberMe });
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case "student": return <User className="h-4 w-4" />;
      case "teacher": return <Users className="h-4 w-4" />;
      case "admin": return <Shield className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
          <User className="h-6 w-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold">Welcome to SmartAttendence</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">I am a</Label>
            <RadioGroup value={userType} onValueChange={(value) => setUserType(value as any)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="teacher" id="teacher" />
                <Label htmlFor="teacher" className="flex items-center gap-2 cursor-pointer">
                  <Users className="h-4 w-4" />
                  Teacher
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin" className="flex items-center gap-2 cursor-pointer">
                  <Shield className="h-4 w-4" />
                  Administrator
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-11"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="h-11 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
              Remember me
            </Label>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Login Button */}
          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          {/* Links */}
          <div className="flex flex-col space-y-2 text-center text-sm">
            <Button
              type="button"
              variant="link"
              onClick={onForgotPassword}
              className="text-sm text-primary hover:underline p-0 h-auto"
            >
              Forgot your password?
            </Button>
            <Button
              type="button"
              variant="link"
              onClick={onSignUp}
              className="text-sm text-muted-foreground hover:text-primary p-0 h-auto"
            >
              Don't have an account? Sign up
            </Button>
          </div>

          {/* Biometric Login (placeholder) */}
          {onBiometricLogin && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>
          )}

          {onBiometricLogin && (
            <Button
              type="button"
              variant="outline"
              onClick={onBiometricLogin}
              className="w-full h-11"
            >
              Use Biometric Login
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};