const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
const PORT = 3000;


app.use(bodyParser.json());

// POST
app.post('/usuarios', (req, res) => {
  const { nombre, contrasena } = req.body;


  fs.readFile('./usuarios.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo usuarios.json:', err);
      res.status(500).send('Error en el servidor');
      return;
    }


    let usuarios = [];
    if (data) {
      usuarios = JSON.parse(data);
    }


    usuarios.push({ nombre, contrasena });


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

// GET
app.get('/usuarios', (req, res) => {

  fs.readFile('./usuarios.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo usuarios.json:', err);
      res.status(500).send('Error en el servidor');
      return;
    }


    let usuarios = [];
    if (data) {
      usuarios = JSON.parse(data);
    }

    res.status(200).json(usuarios);
  });
});


app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
