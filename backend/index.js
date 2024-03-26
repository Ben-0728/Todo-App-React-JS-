const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
app.use(express.json());

app.get("/todos", function(req, res){
  
})

app.post("/todo",function(req,res){
    const Createpayload = req.body;
    const parsedPayload = createTodo.safeparse(Createpayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: "Invalid inputs"});
        return;
    }}
)

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeparse(Createpayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: "Invalid inputs"});
        return;
    }}
)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
