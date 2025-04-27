import { useCallback } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  const [_, navigate] = useLocation();
  
  const goToCreateAccount = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);
  
  const goToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  
  return (
    <div className="app-page flex flex-col justify-between">
      <div className="mt-auto mb-6">
        <h1 className="text-2xl font-bold text-textPrimary mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <Button 
          className="w-full bg-primary text-white py-3 rounded-md font-medium mb-4 h-12"
          onClick={goToCreateAccount}
        >
          Create Account
        </Button>
        
        <Button 
          className="w-full bg-secondary text-foreground py-3 rounded-md font-medium h-12"
          variant="secondary"
          onClick={goToLogin}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
