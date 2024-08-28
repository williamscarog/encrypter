let textArea = document.querySelector(".arialText");
let arialText = document.querySelector(".arialText-clipboard");


function btnEncrypt() {
  const encryptText = encrypt(textArea.value)
  arialText.value = encryptText
  textArea.value = "";
  arialText.style.backgroundImage = "none";

}
function btnDecrypt() {
  const encryptText = uncrypt(arialText.value)
  textArea.value = encryptText
  arialText.value = "";


}

function encrypt(encriptString) {
  const codigosMatriz = [
    //0  & 1 Esté es el orden de las posiciones.
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];


  encriptString = encriptString.toLowerCase();
  for (let index = 0; index < codigosMatriz.length; index++) {
    if (encriptString.includes(codigosMatriz[index][0])) {
      encriptString = encriptString.replaceAll(codigosMatriz[index][0], codigosMatriz[index][1])

    }

  }
  return encriptString;

};

function uncrypt(uncriptString) {
  const codigosMatriz = [
    //0  & 1 Esté es el orden de las posiciones.
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];


  uncriptString = uncriptString.toLowerCase();
  for (let index = 0; index < codigosMatriz.length; index++) {
    if (uncriptString.includes(codigosMatriz[index][1])) {
      uncriptString = uncriptString.replaceAll(codigosMatriz[index][1], codigosMatriz[index][0])

    }

  }
  return uncriptString;

};