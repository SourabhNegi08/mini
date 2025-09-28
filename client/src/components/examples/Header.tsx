import Header from '../Header'

export default function HeaderExample() {
  return (
    <div className="w-full">
      <Header
        userName="Sarah Chen"
        userAvatar={undefined}
      />
    </div>
  )
}