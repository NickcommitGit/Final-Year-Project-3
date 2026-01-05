const mysql = require('mysql2');

// Database connection configuration
const db = mysql.createConnection({
  host: "localhost",    // Adjust according to your database settings
  user: "root",         // Your MySQL username
  password: "Sql12@admin",         // Your MySQL password
  database: "fyp"  // Your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
