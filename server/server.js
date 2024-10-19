const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-meet', (req, res) => {
    // Mock response
    res.json({ link: 'https://meet.google.com/abc-defg-hij' });
});

const PORT = 5173;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
