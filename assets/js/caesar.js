function caesarCipher() {

  var message = document.getElementById("message").value;
  var key = +document.getElementById("key").value;
  var mode = document.getElementById("mode").value;
  console.log(message);
  console.log(key);
  console.log(mode);

  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !\"#$%&'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~";
  var translated = "";

  for (let char of message) {
    if (LETTERS.includes(char)) {

      var num = LETTERS.indexOf(char);
      console.log(num);

      if (mode == "encrypt") {
        num = num + key;
      } else if (mode == "decrypt") {
        num = num - key;
      }
      console.log(num);
      if (num >= LETTERS.length) {
        num = num - LETTERS.length;
      } else if (num < 0) {
        num = num + LETTERS.length;
      }
      translated = translated + LETTERS.charAt(num);
    } else {
      translated = translated + char;
    }
  }
  console.log(translated);
  document.getElementById('output').innerHTML = translated;

}
