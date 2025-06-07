const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message || "";
  const botReply = `You said: ${userMessage}`;
  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`TBZ AI running on port ${port}`);
});