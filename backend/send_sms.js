const accountSid = 'ACCOUNTID';
const authToken = 'b63e8965c5e1631e57d5c87eaa0b8fd4';
const express = require('express')
// At the top of the file
const { parse } = require('querystring');
const app = express()
const port = 3000

//Do not touch this.
const client = require('twilio')(accountSid, authToken);

var environmentRoot =  require('path').normalize(__dirname );

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });
 
 app.use(express.static(environmentRoot + '/public'));

app.post('/postCall', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        let body = "";
        req.on("data", (chunck) => {
            body += chunck;
        })
        req.on("end", () => {
            parse(body);
            console.log("body is:" + body);
            if (body == 10) {
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
                .then(message => console.log(message.sid));
            }else {
                console.log("Body is" +body)
                client.messages
                .create({
                body: 'Current Capacity is '+ body + " out of 10",
                from: '+12563635545',
                to: '+17547154916',
                },(error, item) =>{
                    if (error) {
                        console.log(error);
                    }
                })
                .then(message => console.log(message.sid));
            }
            res.end(body['capacity']++);
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

