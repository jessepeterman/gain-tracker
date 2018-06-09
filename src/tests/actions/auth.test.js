import { login, logout } from '../../actions/auth';

test('should successfully call login', () => {
  const action = login({uid: "1234"});
  expect(action).toEqual({
    type: 'LOGIN',
    uid: {
      uid: '1234'
    }
  });
});

test('should successfully call logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});

