const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.send(`
  <html>
    <head>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 48px;
        }
      </style>
    </head>
    <body>
      <h1>Hello from automatic deployment CI/CD!!!!!</h1>
    </body>
  </html>
`);


});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;