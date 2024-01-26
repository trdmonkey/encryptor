/*
 *  biblioteca sjcl (Stanford JavaScript Crypto Library),
 */
function encriptar() {
  const inputText = document.getElementById("inputText").value;
  const password = "UnaClaveSecreta"; // Puedes cambiar esto

  const encrypted = sjcl.encrypt(password, inputText);
  document.getElementById("outputText").value = encrypted;
}

function desencriptar() {
  const encryptedText = document.getElementById("inputText").value;
  const password = "UnaClaveSecreta"; // Debe ser la misma clave que usaste para encriptar

  try {
    const decrypted = sjcl.decrypt(password, encryptedText);
    document.getElementById("outputText").value = decrypted;
  } catch (error) {
    document.getElementById("outputText").value =
      "Error al desencriptar. Verifica la clave.";
  }
}
