import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Search, Menu, Plus } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  userName?: string
  userAvatar?: string
  onMenuClick?: () => void
  onSearchClick?: () => void
  onNotificationsClick?: () => void
  onProfileClick?: () => void
  onCreateEvent?: () => void
}

export default function Header({
  userName = "You",
  userAvatar,
  onMenuClick,
  onSearchClick,
  onNotificationsClick,
  onProfileClick,
  onCreateEvent
}: HeaderProps) {
  const [notifications] = useState(3) // todo: remove mock functionality
  
  const handleMenuClick = () => {
    console.log('Menu clicked')
    onMenuClick?.()
  }
  
  const handleSearchClick = () => {
    console.log('Search clicked')
    onSearchClick?.()
  }
  
  const handleNotificationsClick = () => {
    console.log('Notifications clicked')
    onNotificationsClick?.()
  }
  
  const handleProfileClick = () => {
    console.log('Profile clicked')
    onProfileClick?.()
  }
  
  const handleCreateEvent = () => {
    console.log('Create event clicked')
    onCreateEvent?.()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMenuClick}
            className="md:hidden"
            data-testid="button-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <h1 className="font-heading font-bold text-xl text-primary">
            Connect
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
            data-testid="button-search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCreateEvent}
            className="hidden sm:flex"
            data-testid="button-create-event"
          >
            <Plus className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNotificationsClick}
              data-testid="button-notifications"
            >
              <Bell className="h-5 w-5" />
            </Button>
            {notifications > 0 && (
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-medium">
                {notifications > 9 ? '9+' : notifications}
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            className="p-1"
            onClick={handleProfileClick}
            data-testid="button-profile"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  )
}