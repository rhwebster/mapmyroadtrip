import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import * as mapActions from "../../store/map";
import Nav from '../Nav/Nav';
import Profile from '../Trips/Profile';
import { nanoid } from 'nanoid';

const RoadTripMap = () => {
  const dispatch = useDispatch();
  const [key] = React.useState(nanoid);
  const [markerShown, setMarkerShown] = useState(false)
  const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
  const [addedMarkers, setAddedMarkers] = useState([{lat: 0, lng: 0 }]);
  const [zoom, setZoom] = useState(4);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      dispatch(mapActions.getAllJournalEntryPoints(user.id))
    }
  }, [dispatch, user]);

  const authenticate = useSelector((state) => state.session.authenticate);
  const journalEntryCoordinates = useSelector((state) => state.map.coordinates);

  if (!authenticate) {
    return null;
  }
  const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };


  const onMapClick = (e) => {
    return (<Marker
            lat={e.lat}
            lng={e.lng}
            name="My Marker"
            color="blue"
          />)
  }

  return (
    <>
    <div className='wrapper'>
        <Nav  />
        <main className="main">
     <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact id="map"
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={() => setMarkerShown(true)}
          options={getMapOptions}
          >
          <Marker
            lat={addedMarkers.lat}
            lng={addedMarkers.lng}
            name="My Marker"
            color="pink"
            />
          {journalEntryCoordinates &&
          journalEntryCoordinates.map((feature,i) => {
            return (
              <Marker key={feature? i:key}
              lat={feature[0]}
              lng={feature[1]}
              name="My Marker"
              color="blue"
              />
              )
            })}
          <Marker
            lat={39.737}
            lng={-104.989}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact >
      </div>
      </main>
        <Profile  />
    </div>
    </>
  );
}

export default RoadTripMap;
