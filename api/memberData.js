import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// Get Team
const getTeamMembers = (uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  fetch(`${dbUrl}/Members.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Get Single Member
const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/Members/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Delete Single Member
const deleteSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/Members/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create Member
const createMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/Members.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update Member
const updateMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/Members/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getTeamMembers,
  getSingleMember,
  deleteSingleMember,
  createMember,
  updateMember,
};
