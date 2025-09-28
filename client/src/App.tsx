import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import CreateEventForm from "@/components/CreateEventForm";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  
  const handleCreateEvent = () => {
    setShowCreateEvent(true);
  }
  
  const handleSearch = () => {
    console.log('Search functionality triggered');
  }
  
  const handleNotifications = () => {
    console.log('Notifications clicked');
  }
  
  const handleProfile = () => {
    console.log('Profile clicked');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Header 
            userName="Ananya Gupta"
            onCreateEvent={handleCreateEvent}
            onSearchClick={handleSearch}
            onNotificationsClick={handleNotifications}
            onProfileClick={handleProfile}
          />
          
          <main className="relative">
            <div className="absolute top-4 right-4 z-40">
              <ThemeToggle />
            </div>
            <Router />
          </main>
          
          {showCreateEvent && (
            <CreateEventForm 
              onClose={() => setShowCreateEvent(false)}
              onSubmit={() => setShowCreateEvent(false)}
            />
          )}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}