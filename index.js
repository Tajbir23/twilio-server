const express = require('express');
const cors = require('cors');
const Twilio = require('twilio');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/sms', (req, res) => {
    try {
        const incomingMessage = req.body.Body;
        const fromNumber = req.body.From;
        
        console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);
        const twiml = new Twilio.twiml.MessagingResponse();
        twiml.message('Thank you for your message! We will get back to you soon.');

        // Send the TwiML response to Twilio
        res.type('text/xml');

        res.send('<Response></Response>');
    } catch (error) {
        console.error('Error processing SMS:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


