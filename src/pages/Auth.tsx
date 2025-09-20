import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

type AuthView = "login" | "forgot-password" | "reset-password" | "reset-success";

const Auth = () => {
  const [currentView, setCurrentView] = useState<AuthView>("login");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    setCurrentView("forgot-password");
  };

  const handleBackToLogin = () => {
    setCurrentView("login");
  };

  const handleResetSuccess = () => {
    setCurrentView("reset-success");
  };

  const handleBiometricLogin = () => {
    // TODO: Implement biometric authentication
    console.log("Biometric login attempted");
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return (
          <LoginForm
            onForgotPassword={handleForgotPassword}
            onBiometricLogin={handleBiometricLogin}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
        );
      case "reset-password":
        return (
          <ResetPasswordForm onSuccess={handleResetSuccess} />
        );
      case "reset-success":
        return (
          <div className="w-full max-w-md">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="text-center">
                Your password has been reset successfully. You can now login with your new password.
              </AlertDescription>
            </Alert>
            <button
              onClick={handleBackToLogin}
              className="mt-4 w-full text-center text-primary hover:underline"
            >
              Back to Login
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header with School Branding */}
        <div className="text-center space-y-2">
          <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-primary-foreground">ST</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">SchoolTrack</h1>
          <p className="text-muted-foreground">Advanced Biometric Attendance Management</p>
        </div>

        {/* Auth Form */}
        {renderCurrentView()}

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>&copy; 2024 SchoolTrack. All rights reserved.</p>
          <p className="mt-1">Secure • Reliable • Professional</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;