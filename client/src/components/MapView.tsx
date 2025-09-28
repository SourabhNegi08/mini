import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Locate, Layers } from "lucide-react"
import { useState } from "react"

interface MapEvent {
  id: string
  title: string
  location: string
  attendeeCount: number
  category: string
  x: number // percentage from left
  y: number // percentage from top
}

interface MapUser {
  id: string
  name: string
  x: number
  y: number
}

interface MapViewProps {
  events?: MapEvent[]
  users?: MapUser[]
  centerOnUser?: boolean
}

export default function MapView({ 
  events = [], 
  users = [], 
  centerOnUser = false 
}: MapViewProps) {
  const [showUsers, setShowUsers] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  
  const handleLocateMe = () => {
    console.log('Locating user position')
  }
  
  const handleToggleLayers = () => {
    console.log('Toggling layer view')
  }
  
  const handleMarkerClick = (id: string, type: 'event' | 'user') => {
    setSelectedItem(id)
    console.log(`Selected ${type}: ${id}`)
  }

  return (
    <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden" data-testid="map-container">
      {/* Mock map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10">
        {/* Grid pattern to simulate map */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-muted-foreground/20" style={{ top: `${i * 10}%` }} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-muted-foreground/20" style={{ left: `${i * 10}%` }} />
          ))}
        </div>
      </div>
      
      {/* Event markers */}
      {showEvents && events.map((event) => (
        <div
          key={`event-${event.id}`}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${event.x}%`, top: `${event.y}%` }}
          onClick={() => handleMarkerClick(event.id, 'event')}
          data-testid={`marker-event-${event.id}`}
        >
          <div className="relative">
            <div className="w-8 h-8 bg-primary rounded-full border-2 border-background shadow-md flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            {selectedItem === event.id && (
              <Card className="absolute top-10 left-1/2 transform -translate-x-1/2 p-3 min-w-48 z-20">
                <h4 className="font-heading font-semibold text-sm mb-1">{event.title}</h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendeeCount} attending</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {event.category}
                  </Badge>
                </div>
              </Card>
            )}
          </div>
        </div>
      ))}
      
      {/* User markers */}
      {showUsers && users.map((user) => (
        <div
          key={`user-${user.id}`}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${user.x}%`, top: `${user.y}%` }}
          onClick={() => handleMarkerClick(user.id, 'user')}
          data-testid={`marker-user-${user.id}`}
        >
          <div className="w-6 h-6 bg-chart-2 rounded-full border-2 border-background shadow-md flex items-center justify-center">
            <div className="w-2 h-2 bg-background rounded-full" />
          </div>
          {selectedItem === user.id && (
            <Card className="absolute top-8 left-1/2 transform -translate-x-1/2 p-2 z-20">
              <span className="text-sm font-medium">{user.name}</span>
            </Card>
          )}
        </div>
      ))}
      
      {/* Current user location */}
      {centerOnUser && (
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: '50%', top: '50%' }}
        >
          <div className="w-4 h-4 bg-chart-4 rounded-full border-2 border-background shadow-lg animate-pulse" />
          <div className="absolute inset-0 w-8 h-8 border-2 border-chart-4/30 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
      )}
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          onClick={handleLocateMe}
          data-testid="button-locate"
        >
          <Locate className="h-4 w-4" />
        </Button>
        
        <Button
          size="icon"
          variant="secondary"
          onClick={handleToggleLayers}
          data-testid="button-layers"
        >
          <Layers className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Layer toggles */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <Button
          size="sm"
          variant={showEvents ? "default" : "outline"}
          onClick={() => setShowEvents(!showEvents)}
          data-testid="button-toggle-events"
        >
          <Calendar className="h-3 w-3 mr-1" />
          Events
        </Button>
        
        <Button
          size="sm"
          variant={showUsers ? "default" : "outline"}
          onClick={() => setShowUsers(!showUsers)}
          data-testid="button-toggle-users"
        >
          <Users className="h-3 w-3 mr-1" />
          Friends
        </Button>
      </div>
    </div>
  )
}