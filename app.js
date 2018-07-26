var express= require('express');
var app=express();
app.set('view engine','ejs');
var todocontroller= require('./controllers/todocontrollers');









todocontroller(app);


















app.use('/assets',express.static('assets'));

app.listen(3000);



//SHARE OUR WEBPAGE ON FACEBOOK ,GOOGLE+,ETC








//
//
//
//
//
//
// var http1=require('http');
// var fs=require('fs');
//
//
//
//
//
// var server=http1.createServer(function (req,res) {
//     if(req.url ==='/home'||req.url ==='/')
//     {
//         res.writeHead(200,{'Content-Type': 'text/html' });
//
//         var myreadStream=fs.createReadStream(__dirname+'/index.ejs','utf8');
//         myreadStream.pipe(res);
//     }
//     else
//     {
//         res.end("<h1>WHOOPSS</h1>")
//     }
//
//     //res.end();
//
// });
//
//
// server.listen(3000,'127.0.0.1');
//
//
//
