const sha1 = require('sha1');

const r1 = sha1('short-text');
console.log(r1);

const r2 = sha1('very-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-text');
console.log(r2);