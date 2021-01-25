import { fetch } from './csrf';

const SET_USER = 'session/setUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    console.log('LOGIN USER-----------> ', user)
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    console.log('RESPONSE HERE---------->', response.data)
  dispatch(setUser(response.data));
  return await response;
};

export const authenticatee = () => async dispatch => {
    const res = await fetch('/api/auth');
    console.log('RESTORE USER-----------> ', res)
  dispatch(setUser(res.data.current_user));
  return await res;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
