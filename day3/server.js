const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/taskDB')
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


const taskSchema = new mongoose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false,
  }
});

const Task = mongoose.model('Task', taskSchema);
app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body3);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
app.get('/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});
app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTask);
});
 
app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});


app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});