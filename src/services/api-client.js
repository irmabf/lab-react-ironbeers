const axios = require('axios');
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';

export const getBeers = () => {
  return axios.get(baseURL).then((response) => response.data);
};