import "./App.css";
import axios from "axios";
import { useState } from "react";

//pk.eab7a2cab044dfd6e6df5b9334adc72b
function App() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  // retrieve location data
  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data);
    setLocation(res.data[0]);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} is at lat and lon : {location.lat}, {location.lon}
        </p>
      )}
      <input onChange={handleSearch} placeholder="Search for a city" />
      <button onClick={getLocation}> Get Data</button>
    </div>
  );
}

export default App;
