const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use(cors({
  origin: 'http://localhost:8080', // Allow requests from the frontend
  credentials: true,
}));


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
