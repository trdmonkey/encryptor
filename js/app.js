/*
 *  biblioteca sjcl (Stanford JavaScript Crypto Library),
 */
/* function encriptar() {
  const inputText = document.getElementById("inputText").value;
  const password = "cursoAlura"; // Puedes cambiar esto

  const encrypted = sjcl.encrypt(password, inputText);
  document.getElementById("outputText").value = encrypted;
}

function desencriptar() {
  const encryptedText = document.getElementById("inputText").value;
  const password = "cursoAlura"; // Debe ser la misma clave que usaste para encriptar

  try {
    const decrypted = sjcl.decrypt(password, encryptedText);
    document.getElementById("outputText").value = decrypted;
  } catch (error) {
    document.getElementById("outputText").value =
      "Error al desencriptar. Verifica la clave.";
  }
} */

function encriptar() {
  const inputText = document.getElementById('inputText').value;
  let result = "";

  for (let i = 0; i < inputText.length; i++) {
    const currentChar = inputText[i];

    // Validar si el carácter es una letra minúscula
    if (/^[a-z]$/.test(currentChar)) {
      switch (currentChar) {
        case "e":
          result += "enter";
          break;
        case "i":
          result += "imes";
          break;
        case "a":
          result += "ai";
          break;
        case "o":
          result += "ober";
          break;
        case "u":
          result += "ufat";
          break;
      }
    } else if (currentChar !== ' ') {
      // Lanzar alerta si el carácter no es una letra minúscula o espacio
      alert("Solo se permiten letras minúsculas y espacios. Otros caracteres no están permitidos.");
      return; // Detener la ejecución si hay un carácter no permitido
    } else {
      // Mantener espacios sin cambios
      result += currentChar;
    }
  }

  document.getElementById('outputText').value = result.toLowerCase();
  toggleImageVisibility();
}

function desencriptar() {
  const inputText = document.getElementById('inputText').value.toLowerCase();
  let result = "";

  let i = 0;
  while (i < inputText.length) {
    let found = false;

    for (let len = 5; len > 0; len--) {
      const currentPart = inputText.substr(i, len);

      switch (currentPart) {
        case "enter":
          result += "e";
          i += len;
          found = true;
          break;
        case "imes":
          result += "i";
          i += len;
          found = true;
          break;
        case "ai":
          result += "a";
          i += len;
          found = true;
          break;
        case "ober":
          result += "o";
          i += len;
          found = true;
          break;
        case "ufat":
          result += "u";
          i += len;
          found = true;
          break;
      }

      if (found) {
        break;
      }
    }

    if (!found) {
      result += inputText[i];
      i++;
    }
  }

  document.getElementById('outputText').value = result;
  toggleImageVisibility();
}

function toggleImageVisibility() {
  const outputText = document.getElementById('outputText').value.trim();
  const muneco = document.querySelector('.muneco img');
  muneco.style.display = outputText ? 'none' : 'block';
}
