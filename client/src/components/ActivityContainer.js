import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

// MUI Imports
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";




function ActivityContainer({
  activities,
  setActivities,
  searchTerm,
  handleSearch,
  sortBy,
  setSortBy,
  setSearchTerm,
  filterBy,
  setFilterBy,
  handleDeleteActivity,
  addMyActivities,
  clearSearch,
  handleShowActivities,
  handleRemoveMyActivities,
  faveActivities
}) {
  // State created for MUI
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  const mappedActivities = activities.map((activity) => (
    <ActivityCard
      key={activity.id}
      activity={activity}
      category={activity.categories}
      handleDeleteActivity={handleDeleteActivity}
      addMyActivities={addMyActivities}
      handleShowActivities={handleShowActivities}
      handleRemoveMyActivities={handleRemoveMyActivities}
      faveActivities={faveActivities}
    />
  ));

  function handleFilterBy(e) {
    setFilterBy(e.target.value);
    setLocation(e.target.value);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
    setSort(e.target.value);
  }

  return (
    <div>
      <div className="main">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort"
            onChange={handleSort}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="name">Activity Name</MenuItem>
            <MenuItem value="duration">Duration</MenuItem>
          </Select>
        </FormControl>

        {/* <Box sx={{ minWidth: 120 }}> */}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="Location"
            onChange={handleFilterBy}
          >
            <MenuItem value="default">All Cities</MenuItem>
            <MenuItem value="Denver">Denver</MenuItem>
            <MenuItem value="San Francisco">San Francisco</MenuItem>
            <MenuItem value="Seattle">Seattle</MenuItem>
            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
            <MenuItem value="Austin">Austin</MenuItem>
            <MenuItem value="New York City">New York City</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="Houston">Houston</MenuItem>
            <MenuItem value="Boulder">Boulder</MenuItem>
            <MenuItem value="New Orleans">New Orleans</MenuItem>
            <MenuItem value="San Diego">San Diego</MenuItem>
            <MenuItem value="Phoenix">Phoenix</MenuItem>
            <MenuItem value="Dallas">Dallas</MenuItem>
            <MenuItem value="Philadelphia">Philadelphia</MenuItem>
            <MenuItem value="Atlanta">Atlanta</MenuItem>
            <MenuItem value="Portland">Portland</MenuItem>
            <MenuItem value="Boston">Boston</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}

        <form onSubmit={(e) => handleSearch(e, searchTerm)}>
          <label></label>
          <TextField
            id="outlined-basic"
            label="Activity Name"
            variant="standard"
            size="small"
            type="text"
            name="name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></TextField>
          {/* <input type="submit" value="Submit"></input> */}
        </form>
   

      <br></br>
      {/* <Button */}
      <button
          id="button1"
          size="medium"
          color="primary"
          variant="text"
          onClick={() => handleShowActivities()}
        >
          Show Saved Activities
          </button>
        {/* </Button> */}
        {/* <Button */}
        <button
          id="button2"
          size="medium"
          color="primary"
          variant="text"
          onClick={() => clearSearch()}
        >
          Clear Search
          </button>
        {/* </Button> */}
      </div>

      <div className="cards">{mappedActivities}</div>
    </div>
  );
}

export default ActivityContainer;

