import EventCard from '../EventCard'

export default function EventCardExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <EventCard
        id="1"
        title="Morning Coffee & Networking"
        description="Join us for casual coffee and conversation. Perfect for meeting new people in a relaxed setting. We'll be at the corner table by the window!"
        date="Tomorrow"
        time="9:00 AM"
        location="Cafe Coffee Day, Connaught Place"
        category="Networking"
        attendeeCount={8}
        maxAttendees={12}
        organizer={{
          name: "Arjun Sharma",
          avatar: undefined
        }}
        distance="1.8 km"
        isJoined={false}
        isFavorited={true}
      />
    </div>
  )
}