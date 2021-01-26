import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';

const { GOOGLE_MAP_API_KEY} = process.env;
const RoadTripMap = ({ setAuthenticated }) => {

  const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
  const [zoom, setZoom] = useState(11);

  return (
    <>
     <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={39.737}
            lng={-104.989}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact >
      </div>
    </>
  );
}

export default RoadTripMap;
