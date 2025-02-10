import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("request received");

  // Impostiamo l'header Content-Type come application/json
  res.setHeader("Content-Type", "application/json");

  res.statusCode = 200;

  const requestJson = JSON.stringify({
    location: "Mars",
  });

  res.end(requestJson);
});

server.listen(3000, () => {
  console.log("Server in ascolto su http://localhost:3000");
});
