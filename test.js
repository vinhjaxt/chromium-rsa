const { RSAKey } = require('./chromium')
const nValue = 'a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3'
const eValue = '10001'
const dValue = '8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161'
const pValue = 'd090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d'
const qValue = 'cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f'
const dmp1Value = '1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25'
const dmq1Value = '3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd'
const coeffValue = '3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250'
var TEXT = 'The quick brown fox jumped over the extremely lazy frog! ' +
    'Now is the time for all good men to come to the party.'
var encrypted
function encrypt () {
  var RSA = new RSAKey()
  RSA.setPublic(nValue, eValue)
  RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue)
  encrypted = RSA.encrypt(TEXT)
}
function decrypt () {
  var RSA = new RSAKey()
  RSA.setPublic(nValue, eValue)
  RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue)
  var decrypted = RSA.decrypt(encrypted)
  if (decrypted !== TEXT) {
    throw new Error('Crypto operation failed')
  }
  return decrypted
}

encrypt()
console.log('encrypted', encrypted)
console.log('decrypted', decrypt())
