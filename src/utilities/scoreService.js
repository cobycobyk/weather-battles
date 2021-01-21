const BASE_URL = '/api/scores/';

export default {
  index,
  create,
  delete: deleteOne
}

function index() {
  return fetch(BASE_URL).then(res => res.json())
}

function create(score) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(score)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(BASE_URL + id, {method: 'DELETE'}).then(res => res.json());
}