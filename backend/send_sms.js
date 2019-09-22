const accountSid = 'AC36e4053e614b15fe37b4ac51dc065217';
const authToken = 'b63e8965c5e1631e57d5c87eaa0b8fd4';
const express = require('express')
const app = express()
const port = 3000

//Do not touch this.
const client = require('twilio')(accountSid, authToken);

app.get('/getCalls', (req, res) => {
    client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12563635545',
     to: '+17547154916',
   },(error, item) =>{
       if (error) {
            console.log(error);
       }
   })
  .then(message => console.log(message.sid));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

