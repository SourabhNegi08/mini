import UserCard from '../UserCard'

export default function UserCardExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <UserCard
        id="1"
        name="Ananya Gupta"
        bio="Love hiking, coffee shops, and exploring new neighborhoods. Always up for spontaneous adventures and meeting new people!"
        location="Central Delhi"
        interests={["Hiking", "Coffee", "Photography", "Travel", "Books"]}
        distance="3.5 km"
        mutualFriends={3}
        isOnline={true}
      />
    </div>
  )
}