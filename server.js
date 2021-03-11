require('dotenv').config();
const app = require('./src');

process.on('unhandledRejection', (reason, promise) => {
  console.log('[REASON]', reason);
});

const PORT = process.env.PORT || 8080;
// starting the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}!`));
