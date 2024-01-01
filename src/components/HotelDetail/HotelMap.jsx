// React and React Router DOM
import React from "react";

// Google Maps
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

// Material UI Components
import { Stack } from "@mui/material";

function HotelMap({ hotelDetail }) {
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const [position, setPosition] = React.useState({ lat: 0, lng: 0 });
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const address = hotelDetail?.hotel.address;

  React.useEffect(() => {
    const geocodingEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    const fetchLatLng = async () => {
      try {
        const response = await fetch(geocodingEndpoint);

        if (!response.ok) {
          throw new Error(`Geocoding API request failed with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "OK" && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const lat = location.lat;
          const lng = location.lng;
          setPosition({ lat, lng });
        }
      } catch (error) {
        console.error("Error during geocoding:", error.message);
      }
    };

    fetchLatLng();
  }, [address, apiKey]);
  return (
    <APIProvider apiKey={apiKey}>
      <Stack
        sx={{
          width: "600px",
          height: "600px",
          marginTop: 15,
        }}
      >
        <Map zoom={15} center={position} mapId={import.meta.env.VITE_GOOGLE_MAP_ID}>
          <AdvancedMarker
            position={position}
            onClick={() => {
              setShowInfoWindow(true);
            }}
          >
            <Pin background={"grey"} />
            {showInfoWindow && (
              <InfoWindow
                position={position}
                onClose={() => {
                  setShowInfoWindow(false);
                }}
              >
                <div>{hotelDetail?.hotel.name}</div>
              </InfoWindow>
            )}
          </AdvancedMarker>
        </Map>
      </Stack>
    </APIProvider>
  );
}

export default HotelMap;
