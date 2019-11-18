function caesarCipher() {
  var message = document.getElementById("message").value;
  var key = +document.getElementById("key").value;
  var mode = document.getElementById("mode").value;

  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\] !\"#$%&'()*+,-./0123456789abcdefghijklmnopqrstuvwxyz:;<=>?@^_`{|}~";
  var translated = "";

  for (let char of message) {
    if (LETTERS.includes(char)) {

      var num = LETTERS.indexOf(char);

      if (mode == "encrypt") {
        num = num + key;
      } else if (mode == "decrypt") {
        num = num - key;
      }

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
  document.getElementById('output').innerHTML = translated;
}
