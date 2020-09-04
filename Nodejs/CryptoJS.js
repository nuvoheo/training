const CryptoJS = require('crypto-js');

function encryptJson(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), 'KEY_CRYPTO_JS').toString();
}

function decryptJson(data) {
  const bytes = CryptoJS.AES.decrypt(data, 'KEY_CRYPTO_JS');
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

module.exports = {
  encryptJson,
  decryptJson,
};
