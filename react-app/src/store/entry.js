const SET_NEW_ENTRY = "user/SET_NEW_ENTRY";
const GET_ENTRIES = "journalEntry/GET_ENTREES";

export const setNewEntry = (entryData) => {
    return {
        type: SET_NEW_ENTRY,
        entryData: entryData,
    };
};

export const getEntries = (journalEntries) => {
    return {
        type: GET_ENTRIES,
        journalEntries
    };
};

export const getAllJournalEntries = (userId) => async (dispatch) => {

    const res = await fetch(`api/user/${userId}/entries`);
    console.log('this is the data ======>', res)
    let data = await res.json();
    dispatch(getEntries(data.journalEntries));
};

export const addEntry = (formObj ) => async (dispatch) => {

    const { userId, title ,tripId, profPic, entry, lat, lon } = formObj;
    const formData = { userId, title , tripId, profPic, entry, lat, lon };

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

const initialState = {journalEntries: []};

const entryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_NEW_ENTRY:
            return {...state, [action.entryData]: action.entryData};
        case GET_ENTRIES:
            newState = Object.assign({}, state);
            newState.journalEntries = action.journalEntries;
            return newState;
        default:
            return state;
    };
};

export default entryReducer;
