const express = require("express");
const app = express();

// Chuyển hướng với query string
app.get("/", (req, res) => {
  const queryString = req.url.split("?")[1];
  const redirectUrl = `https://www.example.com${queryString ? "?" + queryString : ""}`;
  res.redirect(301, redirectUrl);
});

// Lắng nghe kết nối
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
