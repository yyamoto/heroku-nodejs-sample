var express = require('express');
    app = express();

app.use(express.static('public'));

// 3000ポートで待ち受ける
app.listen(process.env.PORT || 3000);
console.log('server starting...');