const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/sms', (req, res) => {
    const incomingMessage = req.body.Body;
    const fromNumber = req.body.From;
    
    console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);

    res.send('<Response></Response>');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


