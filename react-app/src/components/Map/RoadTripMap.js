import React, { useState } from 'react';
import { useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import Journal from '../Journal/Journal';

const RoadTripMap = () => {
  const [markerShown, setMarkerShown] = useState(false)
  const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
  const [zoom, setZoom] = useState(20);

  const authenticate = useSelector((state) => state.session.authenticate);

  if (!authenticate) {
    return null;
  }
  const { GOOGLE_MAP_API_KEY} = process.env;

  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      // styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const onMapClick = (e) => {
    console.log('LATLONG----------->',e)
    // isMarkerShown:true

    return (<Marker
            lat={e.lat}
            lng={e.lng}
            name="My Marker"
            color="blue"
          />)
}


  return (
    <Journal />
    // <>
    //  <div style={{ height: '500px', width: '100%' }}>
    //     <GoogleMapReact id="map"
    //       bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
    //       defaultCenter={center}
    //       defaultZoom={zoom}
    //       onClick={() => setMarkerShown(true)}
    //       options={getMapOptions}
    //       >
    //         {markerShown && (
    //           document.addEventListener("click", (e)=> {
    //             console.log(e)
    //             // <Marker></Marker>
    //           })
    //           )}
    //       <Marker
    //         lat={39.737}
    //         lng={-104.989}
    //         name="My Marker"
    //         color="blue"
    //       />
    //     </GoogleMapReact >
    //   </div>
    // </>
  );
}

export default RoadTripMap;
