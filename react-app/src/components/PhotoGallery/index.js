import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allPhotos} from "../../store/photos";

const PhotoGallery = ({photo_list}) => {


    const dispatch = useDispatch()
    const user = useSelector((state) => {
            if (state.session.user) {
              return state.session.user
            }
          });
    const photos = useSelector((state) => state.photos)

    console.log(user)
    console.log(photos)


    useEffect((user) => {
        if (user) {
        dispatch(allPhotos(user.id));
        }
    }, [dispatch, user]);

    return(
        <>
        </>
    )
}

export default PhotoGallery

