const express = require('express');
const app = express();

// Chức năng chuyển hướng với query string
app.get('*', (req, res) => {
  // URL đích cho việc chuyển hướng
  const redirectUrl = 'https://example.com';
  
  // Lấy query string từ yêu cầu
  const queryString = new URLSearchParams(req.query).toString();
  
  // Kết hợp URL với query string
  const finalUrl = queryString ? `${redirectUrl}?${queryString}` : redirectUrl;
  
  // Chuyển hướng đến URL cuối cùng
  res.redirect(302, finalUrl);
});

// Lắng nghe trên cổng do Stormkit chỉ định
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});