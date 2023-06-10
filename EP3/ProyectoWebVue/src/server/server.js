const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Ruta para manejar las solicitudes POST y almacenar los datos en el archivo JSON
app.post('/usuarios', (req, res) => {
  const { nombre, contrasena } = req.body;

  // Leer el archivo JSON existente
  fs.readFile('./usuarios.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo usuarios.json:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    // Parsear los datos JSON existentes
    let usuarios = [];
    if (data) {
      usuarios = JSON.parse(data);
    }

    // Agregar el nuevo usuario a la lista
    usuarios.push({ nombre, contrasena });

    // Escribir los datos actualizados en el archivo JSON
    fs.writeFile('./usuarios.json', JSON.stringify(usuarios), 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo usuarios.json:', err);
        res.status(500).send('Error en el servidor');
        return;
      }

      console.log('Usuario registrado exitosamente');
      res.sendStatus(200);
    });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});