const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringencriptada = stringencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringencriptada.includes(matrizCodigo[i][0])) {
      stringencriptada = stringencriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringencriptada;
}

function btnDesencriptar() {
  const textoEncriptado = Desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function Desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}
function copy() {
  var contenido = document.querySelector(".mensaje");
  navigator.clipboard.writeText(contenido.value);
  alert("Copiado!");
  document.getElementById("inputTexto").value = "";
}
