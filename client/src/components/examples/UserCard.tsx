import UserCard from '../UserCard'

export default function UserCardExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <UserCard
        id="1"
        name="Sarah Chen"
        bio="Love hiking, coffee shops, and exploring new neighborhoods. Always up for spontaneous adventures and meeting new people!"
        location="Downtown Seattle"
        interests={["Hiking", "Coffee", "Photography", "Travel", "Books"]}
        distance="2.3 miles"
        mutualFriends={3}
        isOnline={true}
      />
    </div>
  )
}