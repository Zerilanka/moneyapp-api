import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
  res.send('Backend de MoneyApp funcionando correctamente con Neon!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});