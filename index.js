const express = require('express');
const app = express();

// Định nghĩa các route
app.get('/', (req, res) => {
  const redirectUrl = 'https://example.com';
  const queryString = new URLSearchParams(req.query).toString();
  const finalUrl = queryString ? `${redirectUrl}?${queryString}` : redirectUrl;
  res.redirect(302, finalUrl);
});

app.get('/redirect', (req, res) => {
  const redirectUrl = 'https://example.com';
  const queryString = new URLSearchParams(req.query).toString();
  const finalUrl = queryString ? `${redirectUrl}?${queryString}` : redirectUrl;
  res.redirect(302, finalUrl);
});

// Xuất ứng dụng
module.exports = app;
