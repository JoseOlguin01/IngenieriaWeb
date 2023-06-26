const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
app.use(cors());
const PORT = 3000;


app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'HiFitness' 
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// POST
app.post('/usuarios', (req, res) => {
  const { nombre, contrasena } = req.body;

  const query = `INSERT INTO usuarios (nombre, contrasena) VALUES (?, ?)`;
  connection.query(query, [nombre, contrasena], (err, result) => {
    if (err) {
      console.error('Error al insertar el usuario en la base de datos:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    console.log('Usuario registrado exitosamente');
    res.sendStatus(200);
  });
});

// PUT
app.put('/usuarios', (req, res) => {
  const { actualContrasena, nuevaContrasena } = req.body;

  const sql = 'UPDATE usuarios SET contrasena = ? WHERE contrasena = ?';

  connection.query(sql, [nuevaContrasena, actualContrasena], (err, result) => {
    if (err) {
      console.error('Error al actualizar la contraseña:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    if (result.affectedRows == 0) {
      console.log('Contraseña incorrecta');
      res.status(400).send('Contraseña incorrecta');
      return;
    }

    console.log('Contraseña actualizada exitosamente');
    res.sendStatus(200);
  });
});



// GET
app.get('/usuarios', (req, res) => {
  const query = `SELECT * FROM usuarios`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los usuarios de la base de datos:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    res.status(200).json(results);
  });
});

// DELETE
app.delete('/usuarios', (req, res) => {
  const { nombre, contrasena } = req.body;

  const query = `DELETE FROM usuarios WHERE nombre = ? AND contrasena = ?`;
  connection.query(query, [nombre, contrasena], (err, result) => {
    if (err) {
      console.error('Error al eliminar la cuenta de usuario:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    if (result.affectedRows == 0) {
      console.log('Nombre de usuario o contraseña incorrectos');
      res.status(400).send('Nombre de usuario o contraseña incorrectos');
      return;
    }

    console.log('Cuenta eliminada exitosamente');
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});