const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    //const jsonData = req.body;
    flag = 1;
    //if (jsonData.phone === 'true') {
    if( flag == 1) {
        client.calls
  .create({
    twiml: '<Response><Say>Ahoy, World!</Say></Response>',
    to: '+919687782811', // Replace with the recipient's phone number
    from: '+16692315172' // Use the purchased Twilio phone number as the "From" number
  })
  .then(call => console.log(call.sid));
    } else {
        res.json({ message: 'No call initiated' });
    }
    res.end()
});

const port = 80;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
