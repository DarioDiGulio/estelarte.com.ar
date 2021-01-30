import HTTPHelper from '../models/HTTPHelper.js';

const head = '/api';

const Endpoints = {
  login: {
    endpoint: `${head}/login`,
    method: HTTPHelper.POST,
    session: false,
  },
};

export default Endpoints;
