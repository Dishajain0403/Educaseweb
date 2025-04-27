import NavControls from "@/components/navControls";
import { Camera } from "lucide-react";

export default function AccountSettings() {
  // Static mock user data
  const user = {
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  };
  
  return (
    <div className="app-page pb-16">
      <h1 className="text-xl font-semibold text-foreground mb-4">Account Settings</h1>
      
      <div className="border-b border-border pb-6 mb-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <span className="text-2xl text-gray-400">
                {user.fullName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
              <Camera className="h-3 w-3" />
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold text-foreground">
              {user.fullName}
            </h2>
            <p className="text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4">
          {user.bio}
        </p>
      </div>
      
      <NavControls />
    </div>
  );
}
