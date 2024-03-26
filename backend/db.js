const mongoose = require("mongoose");
// mongodb+srv://hacker_ben:MongoDBWebD@hackathon.vchd8bz.mongodb.net/
mongoose.connect("mongodb+srv://hacker_ben:MongoDBWebD@hackathon.vchd8bz.mongodb.net/")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("Todos", todoSchema);

module.exports = {
    todo
}