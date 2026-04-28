
const express = require('express');
const app = express();
const port = 3200;


app.use(express.json());


let users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com' }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});


app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
}

y
const newUser = { name, email };
users.push(newUser);

res.status(201).json({ message: 'User created successfully', user: newUser });
});


app.listen(port);