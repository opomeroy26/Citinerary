import React from 'react'
import ActivityCard from './ActivityCard'

function ActivityContainer({ activities, searchTerm }) {
  
  const mappedActivities = activities.map(activity => (
    <ActivityCard 
      key={activity.id}
      activity={activity}
      category={activity.categories}
    />
  ))
  
  return (
    <div>
      <form action="/home/" method="GET">
        <label>Search By Activity Name: </label>
        <input type="text" name="name"></input>
        <input type="submit" value="Search!"></input>
      </form>
      <div className="cards">{mappedActivities}</div>
    </div>
  )
}

export default ActivityContainer;