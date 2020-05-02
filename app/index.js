const server = require("./api/server.js");

const PORT = process.env.PORT || 80;
const HOST = "0.0.0.0";

server.listen(PORT, HOST);
console.log(`\n== API running on ${HOST}:${PORT} ==\n`);
