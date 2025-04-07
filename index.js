const express = require('express');
const cors = require('cors');
const usuarios = require('./usuarios.json');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { usuario, password } = req.body;
  const user = usuarios.find(u => u.usuario === usuario && u.password === password);
  if (user) {
    res.json({ autenticado: true });
  } else {
    res.json({ autenticado: false });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API corriendo en el puerto ${port}`);
});
