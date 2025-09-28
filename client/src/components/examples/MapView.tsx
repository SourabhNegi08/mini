import MapView from '../MapView'

export default function MapViewExample() {
  const mockEvents = [
    {
      id: "1",
      title: "Coffee Meetup",
      location: "Downtown Cafe",
      attendeeCount: 8,
      category: "Social",
      x: 30,
      y: 40
    },
    {
      id: "2", 
      title: "Hiking Group",
      location: "Discovery Park",
      attendeeCount: 12,
      category: "Outdoor",
      x: 70,
      y: 25
    },
    {
      id: "3",
      title: "Book Club",
      location: "Library",
      attendeeCount: 6,
      category: "Learning",
      x: 45,
      y: 70
    }
  ]
  
  const mockUsers = [
    { id: "1", name: "Sarah", x: 35, y: 35 },
    { id: "2", name: "Mike", x: 65, y: 60 },
    { id: "3", name: "Alex", x: 20, y: 75 }
  ]

  return (
    <div className="w-full p-4">
      <MapView 
        events={mockEvents}
        users={mockUsers}
        centerOnUser={true}
      />
    </div>
  )
}