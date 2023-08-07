require('dotenv').config();
const https = require('https');
const fs = require('fs');
const app = require('./src');

process.on('unhandledRejection', (reason, promise) => {
  console.log('[REASON]', reason);
});

const PORT = process.env.PORT || 8080;

const privateKey = fs.readFileSync('./key.pem', 'utf8');
const certificate = fs.readFileSync('./cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const server = https.createServer(credentials, app);

server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}!`));
