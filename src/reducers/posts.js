const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    case 'SET_POSTS':
      return action.posts;
    case 'UPDATE_POST':
      return [
        ...state,
        action.updates
      ];
    default:
      return state;
  }
};