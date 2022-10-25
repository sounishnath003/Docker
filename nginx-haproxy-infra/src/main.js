const http = require("http");
const os = require("os");

const APPID = process.env.APPID || 3000;

function runServer() {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json").end(
      JSON.stringify({
        appId: APPID,
        hostname: os.hostname(),
        platform: os.platform(),
        endOfLife: os.EOL,
        cpus: os.cpus().length,
        data: `you have connected to ${os.hostname()}:${APPID} service instance...`,
        timestamp: Date.now(),
        headers: req.headers,
      })
    );
  });

  server.listen(APPID, () => {
    console.log(`server is up and running on port ${APPID}`);
  });
  return server;
}

async function main() {
  runServer();
}

main()
  .then(() => {
    console.log(`ALL OK...!`);
  })
  .catch((err) => console.error(err));
