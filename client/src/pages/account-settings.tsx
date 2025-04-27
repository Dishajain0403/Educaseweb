import { useQuery } from "@tanstack/react-query";
import NavControls from "@/components/navControls";
import { Camera } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AccountSettings() {
  // In a real app, you would get the user ID from authentication
  const userId = 1; 
  
  const { data: user, isLoading } = useQuery({
    queryKey: [`/api/users/${userId}`],
  });
  
  return (
    <div className="app-page pb-16">
      <h1 className="text-xl font-semibold text-foreground mb-4">Account Settings</h1>
      
      <div className="border-b border-border pb-6 mb-4">
        {isLoading ? (
          <div className="flex items-center">
            <Skeleton className="w-16 h-16 rounded-full mr-4" />
            <div>
              <Skeleton className="h-5 w-32 mb-1" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="relative mr-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {user?.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={user.fullName} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl text-gray-400">
                    {user?.fullName?.charAt(0).toUpperCase() || "U"}
                  </span>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                <Camera className="h-3 w-3" />
              </div>
            </div>
            
            <div>
              <h2 className="font-semibold text-foreground">
                {isLoading ? <Skeleton className="h-5 w-32" /> : user?.fullName || "User"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isLoading ? <Skeleton className="h-4 w-40" /> : user?.email || "user@example.com"}
              </p>
            </div>
          </div>
        )}
        
        {isLoading ? (
          <div className="mt-4">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mt-4">
            {user?.bio || "Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"}
          </p>
        )}
      </div>
      
      <NavControls />
    </div>
  );
}
