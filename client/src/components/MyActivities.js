import React from 'react'
import ActivityCard from './ActivityCard'

function MyActivities({ 
  activities, 
  searchTerm, 
  handleSearch, 
  sortBy, 
  setSortBy, 
  setSearchTerm, 
  filterBy, 
  setFilterBy,
  handleDeleteActivity,
  addMyActivities, 
  handleAddMyActivities, 
  setMyActivities,
  handleShowActivities,
  faveActivities
}) {
  
  // only render if activity.like === true

    const mappedActivities = activities
    .filter(activity => activity.like === true)
    .map(activity => (
      <ActivityCard 
        key={activity.id}
        activity={activity}
        category={activity.categories}
        handleDeleteActivity={handleDeleteActivity}
        addMyActivities={addMyActivities}
        setMyActivities={setMyActivities}
        handleShowActivities={handleShowActivities}
        faveActivities={faveActivities}
      />
    ))

    return (
    <div>{mappedActivities}</div>
  )
}

export default MyActivities