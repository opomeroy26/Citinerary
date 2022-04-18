import React from 'react'
import ActivityCard from './ActivityCard'

function ActivityContainer({ activities }) {
  
  const mappedActivities = activities.map(activity => (
    <ActivityCard 
      key={activity.id}
      activity={activity}
      category={activity.categories}
    />
  ))
  
  return (
    <div className="cards">{mappedActivities}</div>
  )
}

export default ActivityContainer;