import React from 'react'
import ActivityCard from './ActivityCard'

function ActivityContainer(
  { activities, 
    searchTerm, 
    handleSearch, 
    sortBy, 
    setSortBy, 
    setSearchTerm, 
    filterBy, 
    setFilterBy,
    handleDeleteActivity
  }) {
  
  const mappedActivities = activities.map(activity => (
    <ActivityCard 
      key={activity.id}
      activity={activity}
      category={activity.categories}
      handleDeleteActivity={handleDeleteActivity}
    />
  ))

  function handleFilterBy(e){
    setFilterBy(e.target.value)
  }
  
  return (
    <div>
      {/* <form action="/search" method="POST" */}
      <strong>Sort By:</strong>
      <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="name">Activity Name</option>
        <option value="duration">Duration</option>
      </select>


      <label>
        <strong>Filter Location:</strong>
        <select onChange={handleFilterBy} value={filterBy}>
          <option value="default">All Cities</option>
          <option value="Denver">Denver</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Seattle">Seattle</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Austin">Austin</option>
          <option value="New York City">New York City</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Boulder">Boulder</option>
          <option value="New Orleans">New Orleans</option>
          <option value="San Diego">San Diego</option>
          <option value="Phoenix">Phoenix</option>
          <option value="Dallas">Dallas</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="Miami">Miami</option>
          <option value="Atlanta">Atlanta</option>
          <option value="Portland">Portland</option>
          <option value="Boston">Boston</option>
        </select>
      </label> 

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


