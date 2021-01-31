const SET_NEW_ENTRY = "user/SET_NEW_ENTRY";

export const setNewEntry = (entryData) => {
    return {
        type: SET_NEW_ENTRY,
        entryData: entryData,
    };
};

export const addEntry = (formObj ) => async (dispatch) => {

    const { userId, title ,tripId, profPic, entry, lat, lon } = formObj;
    const formData = { userId, title , tripId, profPic,entry, lat, lon };

    const res = await fetch(`/api/entry/`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    console.log('STORE DATA---------->', formData)

    dispatch(setNewEntry(res));
    return res
  };

// export const addEntry = (entryData) => {
//     return async (dispatch) => {
//         await fetch(`entries/<int:entry_id>`, {
//             method: 'POST',
//             body: JSON.stingify(entryData),
//         });
//         dispatch(setNewEntry(entryData))
//     };
// };

const initialState = {};

function reducer (state = initialState, action) {
    switch (action.type) {
        case SET_NEW_ENTRY:
            return {...state, [action.entryData]: action.entryData};
        default:
            return state;
    };
};

export default reducer
