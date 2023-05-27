// components/Map.js
import React from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "../components/PlacesAutocomplete";
import { useState } from "react";

const Map = (selectedPlace) => {
  const [selected, setSelected] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: 1.352, lng: 103.819 };
  //const selectedPlace = useSelector((state) => state.selectedPlace);

  return (
    <div>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={selected ? selected : center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
