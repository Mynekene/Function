'use strict';

// ip в число
const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.').map(Number);

  const p1 = parts[0] << 8 << 8 << 8;
  const p2 = parts[1] << 8 << 8;
  const p3 = parts[2] << 8;
  const p4 = parts[3];

  return p1 + p2 + p3 + p4;
};

module.exports = { ipToInt };
