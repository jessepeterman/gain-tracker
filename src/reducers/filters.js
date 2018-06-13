import moment from 'moment';

const filterReducerDefaultState = {
  name: '',
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_BY_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    // case 'FILTER_BY_TODAY':
    //   return state.map(workout => {
    //     if(workout.date === action.date) {
    //       return workout;
    //     }
    //   }
    default: 
      return state;
  }
}