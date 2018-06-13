import moment from 'moment';


export default (workouts, { name, sortBy, startDate, endDate }) => {
  return workout.filter((workout) => {
    const createdAtMoment = moment(workout.date);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const nameMatch = workout.name.toLowerCase().includes(name.toLowerCase());

    return startDateMatch && endDateMatch && nameMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.date < b.date ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name < b.name ? 1 : -1;
    }
  });
};


// const dateMatch = date ? date.isSameOrBefore(createdAtMoment, 'day') : true;

// filter workout by same day
// export default (workouts, { name, sortBy, startDate, endDate }) => {
//   return workout.filter((workout) => {
//     const createdAtMoment = moment(workout.time);
//     console.log(createdAtMoment;
    // return moment(workout.time) ;
//   });
//   });
// };


// filter workout by name

// export default (workouts, {name, sortBy, startDate, endDate }) => {
//   return workout.filter((workout) => {
//     return workout.name.toLowerCase().includes(name.toLowerCase());
//   }).sort((a, b) => {
//       return a.name < b.name ? 1 : -1;
//     }
//   });
// };