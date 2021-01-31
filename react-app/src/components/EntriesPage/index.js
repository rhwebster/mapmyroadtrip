
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../../store/getTrips";
import { useHistory, useParams } from "react-router-dom";


 

const TripsPage = () => {
const history = useHistory();

  const Trip = ({ theTrip }) => {
    return (
       <div >
        <h3>{theTrip.title}</h3>
      </div>
 
    );
  };

  useEffect(() => {
      // stuff here
    });

  const dispatch = useDispatch();

  const currentTrips = useSelector((fullReduxState) => {
    return fullReduxState.trips.trips;
  });

   const userId = useSelector((fullReduxState) => {
       if (fullReduxState.user) {
           return fullReduxState.user.id
       }
   })

   console.log(userId)

  // With an empty array:
  // do this once when this component is first shown
  useEffect(async () => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    dispatch(getTrips(userId));
  }, []);


  return (
    <div>
      <br></br>
      {!currentTrips && <h3>Loading...</h3>}
      {currentTrips &&
        currentTrips.map((trip) => {
          return <Trip theEntry={trip} />
        })}
    </div>
  );
};

export default TripsPage;
