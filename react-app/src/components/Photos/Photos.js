import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUserPhotos } from "../../store/photos";
import Nav from '../Nav/Nav';
import Profile from '../Trips/Profile';
import { nanoid } from 'nanoid';

const Photos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [key] = React.useState(nanoid);

  useEffect(() => {
    if (user) {
      dispatch(getUserPhotos(user.id))
    }
  }, [dispatch, user]);

  const authenticate = useSelector((state) => state.session.authenticate);
  const photos = useSelector((state) => state.photos.photos);

  if (!authenticate) {
    return null;
  }

  return (
    <>
    <div className='wrapper'>
        <Nav  />
        <main className="main">
      {photos.map(url => {
          return (
              <img key={key} src={`${url}`} alt=""/>
          )
    })}
    </main>
        <Profile  />
    </div>
    </>
  );
}

export default Photos;
