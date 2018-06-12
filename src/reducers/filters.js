import moment from 'moment';

const filterReducerDefaultState = {
  name: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    // case 'SET_NAME_FILTER':
    //   return {
    //     ...state,
    //     name: action.name
    //   }
    // case 'SET_START_DATE':
    //   return {
    //     ...state,
    //     startDate: action.startDate
    //   }
    // case 'SET_END_DATE':
    //   return {
    //     ...state,
    //     endDate: action.endDate
    //   }
    default: 
      return state;
  }
}