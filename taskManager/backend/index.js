require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const TaskService = require("./services/task.service");
const taskModel = require("./models/task.model");


app.use(cors());
const PORT = 8082;
const DB_URI = "mongodb+srv://shilpi:taskmanager@cluster0.pwilxcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  } = require("./controllers/task.controller");

  const taskRoutes = require("./routes/task.routes");
  
mongoose.connect(DB_URI,{
    useNewurlParser : true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connected!"))
.catch((error) => console.log("Error in connecting DB", error));

app.listen(PORT, () =>{
    console.log(`Backend listening on Port ${PORT}!`);
});
app.use(express.json());
app.use("/tasks", taskRoutes);
//const TaskServiceInstance = new TaskService();
