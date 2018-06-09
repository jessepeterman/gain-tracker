// instaed of importing actual moment library, we need to import it with a special syntac since we're in the mock libary file
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp); 
};
