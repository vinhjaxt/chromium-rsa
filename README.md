# The Chromium's RSA library
This RSA library used by Chromium Benchmark here: https://chromium.googlesource.com/v8/v8.git/+/refs/heads/master/benchmarks/

# Modified
I fixed some errors (undefined variables, etc..).

# Install
`npm i -S vinhjaxt/chromium-rsa`
or
`yarn add vinhjaxt/chromium-rsa`

# Usage
* NodeJS:
```js
const { RSAKey } = require('chromium-rsa')
const rsa = new RSAKey()
rsa.setPublic(nValue, eValue)

const encrypted = rsa.encrypt('Your Data')

rsa.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue)

const yourData = rsa.decrypt(encrypted)
// Pls checkout test.js
```

* Browser:
```html
<script src="chromium.js"></script>
<script>
const rsa = new RSAKey()
rsa.setPublic(nValue, eValue)

const encrypted = rsa.encrypt('Your Data')

rsa.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue)

const yourData = rsa.decrypt(encrypted)
// Pls checkout test.js
</script>
```
