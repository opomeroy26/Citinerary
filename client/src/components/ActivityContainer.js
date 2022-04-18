import React from 'react'
import ActivityCard from '/ActivityCard'

function ActivityContainer({ activities }) {
  
  const mappedActivities = activities.map(activity => (
    <ActivityCard 
      key={activity.id}
      activity={activity}
    />
  ))
  
  activities.map(a => console.log(a))
  return (
    <div>{mappedActivities}</div>
  )
}

export default ActivityContainer;