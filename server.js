require('dotenv').config();
const { SERVER_PORT } = process.env;
const app = require('./src');
const PORT = SERVER_PORT || 8080;
// starting the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${SERVER_PORT}!`));
