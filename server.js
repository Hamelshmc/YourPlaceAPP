require('dotenv').config();
const app = require('./src');

const PORT = process.env.PORT || 8080;
// starting the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}!`));
