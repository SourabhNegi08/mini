import CreateEventForm from '../CreateEventForm'
import { useState } from 'react'

export default function CreateEventFormExample() {
  const [showForm, setShowForm] = useState(true)
  
  if (!showForm) {
    return (
      <div className="flex items-center justify-center h-64">
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Show Create Event Form
        </button>
      </div>
    )
  }
  
  return (
    <CreateEventForm 
      onClose={() => setShowForm(false)}
      onSubmit={() => setShowForm(false)}
    />
  )
}