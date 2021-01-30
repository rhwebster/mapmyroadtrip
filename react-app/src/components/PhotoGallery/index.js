import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPhotos } from "../../store/photos";

const PhotoGallery = ({ photo_list }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id;
    }
  });
  console.log(userId);
  const photos = useSelector((state) => state.photos);

  console.log(photos);

  useEffect(() => {
    dispatch(allPhotos());
  }, [dispatch]);

  return <></>;
};

export default PhotoGallery;
