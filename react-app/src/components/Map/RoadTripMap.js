import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import * as mapActions from "../../store/map";
import Journal from '../Journal/Journal';

const RoadTripMap = () => {
  const dispatch = useDispatch();
  const [markerShown, setMarkerShown] = useState(false)
  const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
  const [zoom, setZoom] = useState(20);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      dispatch(mapActions.getJournalEntryPoints(user.id))
    }
  }, [dispatch, user]);

  const authenticate = useSelector((state) => state.session.authenticate);
  const journalEntryCoordinates = useSelector((state) => state.map.coordinates);
  console.log(journalEntryCoordinates);
  // console.log(journalEntryCoordinates.coordinates);


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
    <>
     <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact id="map"
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={() => setMarkerShown(true)}
          options={getMapOptions}
          >
          {journalEntryCoordinates &&
          journalEntryCoordinates.map(feature => {
            console.log(feature)
            return (
              <Marker
              lat={feature[0]}
              lng={feature[1]}
              name="My Marker"
              color="blue"
            />
              )
            })}
            {/* {markerShown && (
              document.addEventListener("click", (e)=> {
                console.log(e)
                // <Marker></Marker>
              })
              )} */}
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
