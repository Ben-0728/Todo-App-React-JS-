const express = require("express");
const app = express();
const cors = require("cors");
const {todo} = require("./db");
const { createTodo, updateTodo } = require("./types");
app.use(express.json());
app.use(cors());

app.get("/todos", async function(req, res){
  const todos = await todo.find();
  res.json({todos});
})

app.post("/todo",async function(req,res){
    const Createpayload = req.body;
    const parsedPayload = createTodo.safeParse(Createpayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: "Invalid inputs"});
        return;
    }
    await todo.create({
        title: Createpayload.title,
        description: Createpayload.description,
        completed: false,
    })
    res.json({msg: "Todo created successfully"});
}

)

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeparse(Createpayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: "Invalid inputs"});
        return;
    }
    await todo.updateOne({
        _id: updatePayload.id},
        {
            completed: true,
        })
    res.json({msg: "Todo updated successfully"});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
