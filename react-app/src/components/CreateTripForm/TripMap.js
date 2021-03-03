import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import * as mapActions from "../../store/map";

const TripMap = () => {
    const dispatch = useDispatch();
    const [center, setCenter] = useState({ lat: 39.73750267736547, lng: -104.98928358002577 });
    const [zoom, setZoom] = useState(3.7);
    const [markerShown, setMarkerShown] = useState(false)
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        if (user) {
            dispatch(mapActions.getAllJournalEntryPoints(user.id))
        }
    }, [dispatch, user]);

    // useEffect(() => {
    //     setCenter({ lat: ((startLat + endLat) / 2), lon: ((startLon + endLon) / 2) })
    // }, [endLon !== null]);

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
            mapTypeControl: false,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    return (
        <>
            <div style={{ height: '300px', width: '100%' }}>
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
                        color="red"
                    />
                    <Marker
                        lat={endLat}
                        lng={endLon}
                        name="My Marker"
                        color="green"
                    />
                </GoogleMapReact >
            </div>
        </>
    );
}

export default TripMap;
