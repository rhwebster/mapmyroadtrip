
const SET_POINT = 'session/setPoint';
const REMOVE_POINT = 'session/removePoint';

const setPoint = (coordinates) => {
  return {
    type: SET_POINT,
    payload: coordinates,
  };
};

const removePoint = () => ({
  type: REMOVE_USER
});

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (response.ok) {
      let data = await response.json()
      dispatch(setUser(data));
    }
};

export const authenticate = () => async dispatch => {
    const res = await fetch('/api/auth');
    if (res.ok) {
      let data = await res.json()
      dispatch(setUser(data));
    }
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

const initialState = { lat: null, lon: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      newState.authenticate = true;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null, authenticate: false });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
