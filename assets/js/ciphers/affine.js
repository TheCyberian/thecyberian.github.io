function affineCipher() {
  var message = document.getElementById("message").value;
  var key = +document.getElementById("key").value;
  var mode = document.getElementById("mode").value;

  const LETTERS = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  if (mode == "encrypt") {
    encrypt(key, message);
  } else if (mode == "decrypt") {
    decrypt(key, message);
  }

  function encrypt(key, message) {
    var translated = "";
    var keys = getKeyParts(key);
    checkKeys(keys[0], keys[1], "encrypt");
    for (let char of message) {
      if (LETTERS.includes(char)) {
        var num = LETTERS.indexOf(char);
        translated = translated + LETTERS.charAt((num * keys[0] + keys[1]) % LETTERS.length);
      } else {
        translated = translated + char;
      }
    }
    document.getElementById('output').innerHTML = translated;
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function decrypt(key, message) {
    var plainText = "";
    var keys = getKeyParts(key);
    checkKeys(keys[0], keys[1], "decrypt");
    var modInverse = getModInverse(keys[0], LETTERS.length);

    for (let char of message) {
      if (LETTERS.includes(char)) {
        var num = LETTERS.indexOf(char);
        plainText = plainText + LETTERS.charAt(mod((num - keys[1]) * modInverse, LETTERS.length));
      } else {
        plainText = plainText + char;
      }
    }
    document.getElementById('output').innerHTML = plainText;
  }

  function getKeyParts(key) {
    let keyA = Math.round(key / LETTERS.length);
    let keyB = key % LETTERS.length;

    return [keyA, keyB];
  }

  function checkKeys(keyA, keyB, mode) {
    if (keyA == 1 && mode == 'encrypt') {
      console.log(`The affine cipher becomes incredibly weak when key A is set to 1. Choose a different key.`);
    }
    if (keyB == 0 && mode == 'encrypt') {
      console.log(`The affine cipher becomes incredibly weak when key B is set to 0. Choose a different key.`);
    }
    if (keyA < 0 || keyB < 0 || keyB > LETTERS.length - 1) {
      console.log(`Key A must be greater than 0 and Key B must be between 0 and ${LETTERS.length - 1}.`);
    }
    if (gcd(keyA, LETTERS.length) != 1) {
      console.log(`Key A ${keyA} and the symbol set size ${LETTERS.length} are not relatively prime. Choose a different key.`)
    }
  }

  function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  function getModInverse(a, m) {
    a = a % m;
    let x;
    for (x = 1; x < m; x++) {
      if (((a * x) % m) == 1) {
        return x;
      }
    }
  }
}
