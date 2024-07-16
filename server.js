// const http = require('http');
// const path = require('path');
// const fs = require('fs');
import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "dist", req.url);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("404 Not Found");
  }
});

server.listen(3002, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3002/");
});
