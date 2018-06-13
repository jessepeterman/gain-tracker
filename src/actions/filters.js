
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});
export const setSingleDate = (singleDate) => ({
  type: 'SET_SINGLE_DATE',
  singleDate
});

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
