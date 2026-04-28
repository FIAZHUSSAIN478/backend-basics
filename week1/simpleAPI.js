const http = require('http');

const userData=[
    {
        name:"Fiaz",
        email:"fiaztest@gmail.com",
        age:25

    },
    {
        name:"Ali",
        email:"Alitest@gmail.com",
        age:27

    },
    {
        name:"Jawad",
        email:"Jawadtest@gmail.com",
        age:30

    }
]
const server = http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','application/json')
    resp.write(JSON.stringify(userData))
    resp.end()

})
server.listen(6100);