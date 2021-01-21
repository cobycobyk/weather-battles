const BASE_URL = '/api/weathers/';

export default {
 index
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}