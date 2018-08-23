'use strict';

var nodeCrypto = require('crypto');
console.log(nodeCrypto);
if (window) {
  window.nodeCrypto = nodeCrypto;
  console.log(window.nodeCrypto);
}

// const list = nodeCrypto.getCiphers();
// console.log(list.slice(114, 119));

// const key = 'test';
// const iv =  'testiv';

// let plain = 'plain text for cipher';


// const cipher = crypto.createCipher('aes', key);
// let encrypted = cipher.update(plain, 'utf8', 'base64') + cipher.final('base64');

// console.log(encrypted);


// const decipher = crypto.createDecipher('aes', key);
// let decrypted = decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8');

// console.log(decrypted);