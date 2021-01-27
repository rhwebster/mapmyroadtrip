import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as mapActions from "../../store/map";
// import './LoginFormModal.css'

const Journal = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  console.log('FRONTEND USERID---->', userId)

  useEffect(() => {
    dispatch(mapActions.getJournalEntryPoints(userId))
}, [dispatch]);

  return (
    <div>
        Journal
    </div>
  );
};

export default Journal;
