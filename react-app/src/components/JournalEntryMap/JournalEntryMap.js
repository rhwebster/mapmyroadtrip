import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
// import MapViewDirections from 'react-native-maps-directions';
import Marker from '../Marker/Marker';
import * as mapActions from "../../store/map";
import MapAutoComplete from '../MapAutoComplete/MapAutoComplete';
import './JournalEntryMap.css'


const JournalEntryMap = () => {
    const { GOOGLE_MAP_API_KEY } = process.env;
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);
    const authenticate = useSelector((state) => state.session.authenticate);
    const journalEntryCoordinates = useSelector((state) => state.map.coordinates);

    const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
    const [addedMarkers, setAddedMarkers] = useState([{lat: 0, lng: 0 }]);
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        if (user) {
        dispatch(mapActions.getAllJournalEntryPoints(user.id))
        }
    }, [dispatch, user]);


    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    if (!authenticate) {
        return null;
    }
    return (
        <>
        {/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqv0i4MiCzZEjdupXsSQ3sv4oBFdaTSjI&libraries=places"></script> */}
        <MapAutoComplete setAddedMarkers={setAddedMarkers}/>
        {console.log('Marker',addedMarkers.lat, addedMarkers.lng)}
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact id="map"
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={getMapOptions}
            >
            <Marker
                lat={addedMarkers.lat}
                lng={addedMarkers.lng}
                name="My Marker"
                color="pink"
                />
            {journalEntryCoordinates &&
            journalEntryCoordinates.map(feature => {
                return (
                <Marker key={feature[0]}
                lat={feature[0]}
                lng={feature[1]}
                name="My Marker"
                color="blue"
                />
                )
                })}
            </GoogleMapReact >
        </div>
        </>
    );
    }

export default JournalEntryMap;
