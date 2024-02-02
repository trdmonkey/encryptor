<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- LINK FAVICON -->
    <link rel="shortcut icon" href="./img/icon.png" type="image/x-icon" />
    <title>Encryptor</title>

    <!-- LINK CSS -->
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <div id="container">
      <div id="inputContainer">
        <input type="text" id="inputText" placeholder="Texto" />
        <button onclick="encriptar()">Encriptar</button>
        <button onclick="desencriptar()">Desencriptar</button>
      </div>

      <div id="outputContainer">
        <textarea id="outputText" placeholder="Resultado" readonly></textarea>
        <div class="muneco">
          <img src="./img/muneco.jpeg" style="border-radius: 50px" alt="" />
        </div>
      </div>
    </div>

    <!-- LINK JS -->
    <script src="./js/app.js"></script>
  </body>
</html>
