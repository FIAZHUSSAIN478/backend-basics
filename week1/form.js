const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
http.createServer((req, resp) => {
fs.readFile('html/form.html', (err, data) => {
    if (err) {
        resp.writeHead(50, { 'Content-Type': 'text/palin' });
        resp.end("internal server error");
        return;
    }
     if (req.url == '/') {
       resp.write(data)
    }
    else if (req.url == '/submit') {
        let dataBody=[];
        req.on('data',(chunk)=>{
            dataBody.push(chunk);
        })
        req.on('end',()=>{
            rawData=Buffer.concat(dataBody).toString();
            let readableData=querystring.parse(rawData);
            let dataStrig="my name is "+readableData.name+" and my email is "+readableData.email;
            console.log(dataStrig);
            // fs.writeFileSync( "text"+readableData.name+".txt",dataStrig);
            // console.log("file created");  // this is for creating syn file 


            fs.writeFile("text"+readableData.name+".txt",dataStrig,(err)=>{
                if(err){
                    resp.end("internal server error");
                    return false;
                }
                else{
                    console.log("file created");
                }
            });
        });
        resp.write('<h1>Form Submitted Successfully</h1>');
    }

  resp.end();})
}).listen(3200);






// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/html' })

//     if (req.url == '/') {
//         resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" name="name" placeholder="enete name">
//         <input type="text" name="email" placeholder="enter email">
//         <button> Submit </button>
//         </form>
        
//         `);
//     }
//     else if (req.url == '/submit') {
//         resp.write('<h1>Form Submitted Successfully</h1>');
//     }
//     resp.end();
// }).listen(3200);