import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Input, List } from "antd";
import { addToSearchHistory } from "../redux/actions";
import { useDispatch } from "react-redux";

const PlacesAutocomplete = ({ setSelected }) => {
  const dispatch = useDispatch();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    debugger;
    setValue(address, false);
    clearSuggestions();

    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);
    setSelected({ lat, lng });

    dispatch(
      addToSearchHistory(`Address: ${address}, lat: ${lat}, lng: ${lng}`)
    );
  };

  return (
    <div>
      <Input.Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search an address"
      />
      {status === "OK" && (
        <List
          dataSource={data}
          renderItem={({ place_id, description }) => (
            <List.Item
              onClick={() => handleSelect(description)}
              style={{
                background: "white",
                paddingLeft: "10px",
                border: "1px solid #e8e8e8",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#f5f5f5",
              }}
            >
              {description}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default PlacesAutocomplete;
