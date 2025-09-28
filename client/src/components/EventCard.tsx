import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, MapPin, Users, Clock, Heart } from "lucide-react"
import { useState } from "react"

interface EventCardProps {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  attendeeCount: number
  maxAttendees?: number
  organizer: {
    name: string
    avatar?: string
  }
  distance?: string
  isJoined?: boolean
  isFavorited?: boolean
}

export default function EventCard({
  id,
  title,
  description,
  date,
  time,
  location,
  category,
  attendeeCount,
  maxAttendees,
  organizer,
  distance,
  isJoined = false,
  isFavorited = false
}: EventCardProps) {
  const [joined, setJoined] = useState(isJoined)
  const [favorited, setFavorited] = useState(isFavorited)
  
  const handleJoin = () => {
    setJoined(!joined)
    console.log(`${joined ? 'Left' : 'Joined'} event: ${title}`)
  }
  
  const handleFavorite = () => {
    setFavorited(!favorited)
    console.log(`${favorited ? 'Unfavorited' : 'Favorited'} event: ${title}`)
  }
  
  const isEventFull = maxAttendees ? attendeeCount >= maxAttendees : false

  return (
    <Card className="hover-elevate overflow-hidden" data-testid={`card-event-${id}`}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs font-medium">
                {category}
              </Badge>
              {distance && (
                <span className="text-xs text-muted-foreground">• {distance} away</span>
              )}
            </div>
            
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4" data-testid={`text-description-${id}`}>
              {description}
            </p>
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={handleFavorite}
            className={favorited ? "text-destructive" : "text-muted-foreground"}
            data-testid={`button-favorite-${id}`}
          >
            <Heart className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {attendeeCount} attending
              {maxAttendees && ` / ${maxAttendees} max`}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={organizer.avatar} alt={organizer.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                {organizer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">by {organizer.name}</span>
          </div>
          
          <Button
            onClick={handleJoin}
            variant={joined ? "secondary" : "default"}
            disabled={!joined && isEventFull}
            className="min-w-20"
            data-testid={`button-join-${id}`}
          >
            {joined ? "Joined" : isEventFull ? "Full" : "Join"}
          </Button>
        </div>
      </div>
    </Card>
  )
}