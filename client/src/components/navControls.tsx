import React from "react";
import { Link } from "wouter";
import { Home, ChevronLeft, ChevronRight, Sun } from "lucide-react";

export default function NavControls() {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-4 py-3 flex justify-between items-center bg-white border-t border-border">
      <Link href="/">
        <a>
          <Home className="h-6 w-6 text-gray-600" />
        </a>
      </Link>
      
      <div className="flex items-center">
        <button className="mr-2">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <span className="text-sm text-muted-foreground">4 of 4</span>
        
        <button className="ml-2">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      <div className="flex items-center">
        <Sun className="h-6 w-6 text-gray-600" />
        <div className="ml-2 w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
