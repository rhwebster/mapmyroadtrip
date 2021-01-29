const SET_NEW_ENTRY = "user/SET_NEW_ENTRY";

export const setNewEntry = (entryData) => {
    return {
        type: SET_NEW_ENTRY,
        entryData: entryData,
    };
};

export const addEntry = (formObj ) => async (dispatch) => {

    const { title ,profPic,entry, lat, lon } = formObj;
    const formData = new FormData();
    if (profPic) formData.append("image", profPic);
    formData.append("title", title);
    formData.append("image", profPic);
    formData.append("entry", entry);
    formData.append("lat", lat);
    formData.append("lon", lon);

    const res = await fetch(`/api/entry/entries`, {
      method: "POST",
      body: formData,
    });

    console.log('STORE DATA---------->', formData)
    const data = res.json();
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
