import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
// import MapViewDirections from 'react-native-maps-directions';
import Marker from '../Marker/Marker';
import * as mapActions from "../../store/map";
import MapAutoComplete from '../MapAutoComplete/MapAutoComplete';

const TripMap = () => {
    const dispatch = useDispatch();
    const [center, setCenter] = useState({ lat: 39.73750267736547, lng: -104.98928358002577 });
    const [zoom, setZoom] = useState(4);
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        if (user) {
            dispatch(mapActions.getAllJournalEntryPoints(user.id))
        }
    }, [dispatch, user]);

    const authenticate = useSelector((state) => state.session.authenticate);
    const startLat = useSelector((state) => state.map.addedLat)
    const startLon = useSelector((state) => state.map.addedLon)
    const endLat = useSelector((state) => state.map.addedEndLat)
    const endLon = useSelector((state) => state.map.addedEndLon)

    if (!authenticate) {
        return null;
    }
    const { GOOGLE_MAP_API_KEY } = process.env;

    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

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
                    <Marker
                        lat={startLat}
                        lng={startLon}
                        name="My Marker"
                        color="pink"
                    />
                    <Marker
                        lat={endLat}
                        lng={endLon}
                        name="My Marker"
                        color="pink"
                    />
                </GoogleMapReact >
            </div>
        </>
    );
}

export default TripMap;
