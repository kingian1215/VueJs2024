const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// 提供 dist 資料夾中的靜態文件
app.use(express.static(path.join(__dirname, 'dist')));

// 處理 SPA 應用的所有其他路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
