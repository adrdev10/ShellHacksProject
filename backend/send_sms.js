const accountSid = 'ACCOUNTID';
const authToken = 'TOKEN';
const express = require('express')
// At the top of the file
const { parse } = require('querystring');
const app = express()
const port = 3000

//Do not touch this.
const client = require('twilio')(accountSid, authToken);

app.post('/postCall', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method == "post") {
        let body = "";
        req.on("data", (chunck) => {
            body += chunck;
            
        })
        req.on("end", () => {
            parse(body);
            console.log(body);
            res.end(["ok"]);
        })
        let cap = body['capacity'];
        if (cap == 10) {
            client.messages
            .create({
            body: 'Max Capacity Reached. Please choose another shelter',
            from: '+12563635545',
            to: '+17547154916',
            },(error, item) =>{
                if (error) {
                    console.log(error);
                }
            })
            .then(message => console.log(message.sid));s
        }else {
            client.messages
            .create({
            body: 'Current Capacity is '+ cap,
            from: '+12563635545',
            to: '+17547154916',
            },(error, item) =>{
                if (error) {
                    console.log(error);
                }
            })
            .then(message => console.log(message.sid));s
        }
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

