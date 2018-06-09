import authReducer from '../../reducers/auth';
// import { startLogin, startLogout} from '../../reducers/auth'; 

test('should dispatch login user', () => {
  const action = {
    type: 'LOGIN',
    uid: '1234'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should dispatch logout user', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(undefined);
});