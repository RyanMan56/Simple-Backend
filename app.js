const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.post('/simple-post', (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
