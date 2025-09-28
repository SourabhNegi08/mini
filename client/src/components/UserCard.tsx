import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, MessageCircle, Heart, Users } from "lucide-react"
import { useState } from "react"

interface UserCardProps {
  id: string
  name: string
  avatar?: string
  bio: string
  location: string
  interests: string[]
  distance?: string
  mutualFriends?: number
  isOnline?: boolean
}

export default function UserCard({ 
  id, 
  name, 
  avatar, 
  bio, 
  location, 
  interests, 
  distance, 
  mutualFriends,
  isOnline 
}: UserCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  
  const handleLike = () => {
    setIsLiked(!isLiked)
    console.log(`${isLiked ? 'Unliked' : 'Liked'} ${name}`)
  }
  
  const handleMessage = () => {
    console.log(`Opening message with ${name}`)
  }
  
  const handleConnect = () => {
    console.log(`Sending friend request to ${name}`)
  }

  return (
    <Card className="hover-elevate p-6" data-testid={`card-user-${id}`}>
      <div className="flex items-start gap-4">
        <div className="relative">
          <Avatar className="h-16 w-16" data-testid={`img-avatar-${id}`}>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-heading font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-chart-4 border-2 border-background rounded-full" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground" data-testid={`text-username-${id}`}>
                {name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="h-3 w-3" />
                  <span>{location}</span>
                </div>
                {distance && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground text-sm">{distance} away</span>
                  </>
                )}
              </div>
            </div>
            
            <Button
              size="icon"
              variant="ghost"
              onClick={handleLike}
              className={isLiked ? "text-destructive" : "text-muted-foreground"}
              data-testid={`button-like-${id}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-3 line-clamp-2" data-testid={`text-bio-${id}`}>
            {bio}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {interests.slice(0, 3).map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
            {interests.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{interests.length - 3} more
              </Badge>
            )}
          </div>
          
          {mutualFriends && mutualFriends > 0 && (
            <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{mutualFriends} mutual friend{mutualFriends > 1 ? 's' : ''}</span>
            </div>
          )}
          
          <div className="flex gap-2 mt-4">
            <Button
              onClick={handleConnect}
              className="flex-1"
              data-testid={`button-connect-${id}`}
            >
              Connect
            </Button>
            <Button
              variant="outline"
              onClick={handleMessage}
              data-testid={`button-message-${id}`}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}