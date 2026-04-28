const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/taskDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed
      },
      { new: true }
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});