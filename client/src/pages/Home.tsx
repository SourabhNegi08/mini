import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import UserCard from "@/components/UserCard"
import EventCard from "@/components/EventCard"
import MapView from "@/components/MapView"
import CreateEventForm from "@/components/CreateEventForm"
import { Search, MapPin, Calendar, Users, Plus, Filter } from "lucide-react"

export default function Home() {
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("events")
  
  // todo: remove mock functionality
  const mockEvents = [
    {
      id: "1",
      title: "Morning Coffee & Networking",
      description: "Join us for casual coffee and conversation. Perfect for meeting new people in a relaxed setting.",
      date: "Tomorrow",
      time: "9:00 AM",
      location: "Cafe Coffee Day, Connaught Place",
      category: "Networking",
      attendeeCount: 8,
      maxAttendees: 12,
      organizer: { name: "Arjun Sharma" },
      distance: "1.2 miles",
      isJoined: false,
      isFavorited: true
    },
    {
      id: "2",
      title: "Weekend Hiking Adventure",
      description: "Explore the beautiful trails around Mount Rainier. All skill levels welcome!",
      date: "Saturday",
      time: "8:00 AM",
      location: "Aravalli Hills, Gurgaon",
      category: "Outdoor",
      attendeeCount: 15,
      maxAttendees: 20,
      organizer: { name: "Priya Singh" },
      distance: "35 km",
      isJoined: true,
      isFavorited: false
    },
    {
      id: "3",
      title: "Book Club Discussion",
      description: "This month we're discussing 'The Seven Husbands of Evelyn Hugo'. New members welcome!",
      date: "Next Tuesday",
      time: "7:00 PM",
      location: "Delhi Public Library, CP",
      category: "Learning",
      attendeeCount: 6,
      maxAttendees: 10,
      organizer: { name: "Kavya Patel" },
      distance: "5.2 km",
      isJoined: false,
      isFavorited: false
    }
  ]
  
  const mockUsers = [
    {
      id: "1",
      name: "Ananya Gupta",
      bio: "Love hiking, coffee shops, and exploring new neighborhoods. Always up for spontaneous adventures!",
      location: "Central Delhi",
      interests: ["Hiking", "Coffee", "Photography", "Travel", "Books"],
      distance: "3.5 km",
      mutualFriends: 3,
      isOnline: true
    },
    {
      id: "2",
      name: "Rohit Kumar",
      bio: "Software engineer by day, rock climber by weekend. Looking for climbing partners and tech meetups.",
      location: "Gurgaon",
      interests: ["Rock Climbing", "Tech", "Board Games", "Craft Beer"],
      distance: "7.5 km",
      mutualFriends: 1,
      isOnline: false
    },
    {
      id: "3",
      name: "Meera Joshi",
      bio: "Foodie and cooking enthusiast. Love trying new restaurants and hosting dinner parties.",
      location: "Khan Market",
      interests: ["Cooking", "Food", "Wine", "Travel", "Art"],
      distance: "2.8 km",
      mutualFriends: 5,
      isOnline: true
    }
  ]
  
  const mapEvents = [
    { id: "1", title: "Coffee Meetup", location: "CP Cafe", attendeeCount: 8, category: "Social", x: 30, y: 40 },
    { id: "2", title: "Hiking Group", location: "Delhi Ridge", attendeeCount: 12, category: "Outdoor", x: 70, y: 25 },
    { id: "3", title: "Book Club", location: "Lodhi Gardens", attendeeCount: 6, category: "Learning", x: 45, y: 70 }
  ]
  
  const mapUsers = [
    { id: "1", name: "Ananya", x: 35, y: 35 },
    { id: "2", name: "Rohit", x: 65, y: 60 },
    { id: "3", name: "Meera", x: 20, y: 75 }
  ]
  
  const handleCreateEvent = () => {
    setShowCreateEvent(true)
    console.log('Opening create event form')
  }
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-4">
            Find Your People
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with like-minded people in your area. Join events, make friends, 
            and build meaningful relationships through shared experiences.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, people, or places..."
                className="pl-10 pr-4"
                data-testid="input-search"
              />
            </div>
          </form>
          
          <Button 
            onClick={handleCreateEvent}
            size="lg"
            className="mb-8"
            data-testid="button-create-event-hero"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>
        
        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="events" data-testid="tab-events">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="people" data-testid="tab-people">
                <Users className="h-4 w-4 mr-2" />
                People
              </TabsTrigger>
              <TabsTrigger value="map" data-testid="tab-map">
                <MapPin className="h-4 w-4 mr-2" />
                Map
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" size="sm" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <TabsContent value="events" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
            
            {mockEvents.length === 0 && (
              <Card className="p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">No events found</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to create an event in your area!
                </p>
                <Button onClick={handleCreateEvent}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="people" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {mockUsers.map((user) => (
                <UserCard key={user.id} {...user} />
              ))}
            </div>
            
            {mockUsers.length === 0 && (
              <Card className="p-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">No people found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or expanding your radius.
                </p>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="map">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">
                Events & Friends Near You
              </h3>
              <MapView 
                events={mapEvents}
                users={mapUsers}
                centerOnUser={true}
              />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Create Event Modal */}
      {showCreateEvent && (
        <CreateEventForm 
          onClose={() => setShowCreateEvent(false)}
          onSubmit={() => setShowCreateEvent(false)}
        />
      )}
    </div>
  )
}