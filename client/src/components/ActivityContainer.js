import React from 'react'
import ActivityCard from './ActivityCard'

function ActivityContainer({ activities, searchTerm, handleSearch, sortBy, setSortBy, setSearchTerm }) {
  
  const mappedActivities = activities.map(activity => (
    <ActivityCard 
      key={activity.id}
      activity={activity}
      category={activity.categories}
    />
  ))
  
    // function handleSearchTest(e){
    //   e.preventDefault()
    //   handleSearch()
    // }

  return (
    <div>
      {/* <form action="/search" method="POST" */}
      Sort by: 
      <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="name">Activity Name</option>
        <option value="city">City</option>
        <option value="duration">Duration</option>
      </select>


      <form onSubmit={(e) => handleSearch(e, searchTerm)}> 
        <label>Search By Activity Name: </label>
        <input 
        type="text" 
        name="name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        ></input>
<        input type="submit" value="Submit"></input>
      </form>
      <div className="cards">{mappedActivities}</div>
    </div> 
  )
}

export default ActivityContainer;


