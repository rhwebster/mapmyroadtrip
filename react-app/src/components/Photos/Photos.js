import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllPhotos } from "../../store/photos";

const Photos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      dispatch(getAllPhotos(user.id))
    }
  }, [dispatch, user]);

  const authenticate = useSelector((state) => state.session.authenticate);
  const photos = useSelector((state) => state.photos.photos);

  if (!authenticate) {
    return null;
  }

  return (
    <>
    Photo Route being hit
    {photos.map(url => {
        return (
            <img src={`./images/${url}`}/>
        )
    })}
    </>
  );
}

export default Photos;
