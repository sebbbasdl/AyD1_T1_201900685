// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Sebastian Alejandro de Leon Tenaz',

  };
  res.json(data);
});

app.post('/api/endpoint', (req, res) => {
  const datos = req.body;

  // Acceder a los valores usando las claves (key1 y key2 en este caso)
  const valor1 = parseInt(datos.key1);
  const valor2 = parseInt(datos.key2);

  // Calcular la multi de los valores recibidos
  const multi = valor1 * valor2;

  // Responder al frontend con la multi
  res.json({ multi: multi });
});

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});
