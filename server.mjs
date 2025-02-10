import { createServer } from "node:http";
const server = createServer((request, response) => {
  console.log("request received");
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Custom Message</title>
        </head>
        <body>
            <h1>Welcome to My Server!</h1>
            <p>This is a custom message sent from the server: <strong>Hello, world!</strong></p>
        </body>
        </html>
      `);
});

server.listen(3000,()=>{
    console.log('server running at http://localhost:3000/')
})
