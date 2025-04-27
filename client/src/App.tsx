import { useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Welcome from "@/pages/welcome";
import Login from "@/pages/login";
import CreateAccount from "@/pages/create-account";
import AccountSettings from "@/pages/account-settings";
import MobileContainer from "@/components/mobileContainer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/account-settings" component={AccountSettings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <MobileContainer>
            <Router />
          </MobileContainer>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
