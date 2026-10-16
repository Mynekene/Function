'use strict';

// робить випадковий ключ
const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * possible.length);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
