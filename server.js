const helmet = require("helmet");
const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(helmet);
app.use(express.static(__dirname + "/dist/"));

// always fall back to index.html (Vue entry)
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Server listening at port 8080");
});
