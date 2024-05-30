const express = require("express")
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
app.use(express.json());

app.post("/todos", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo;
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the invalid input"
        })
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg : "todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({
        // console.log(todos) is a promise 
    });
    res.json({
        todos
    })
    
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the invalid input"
        })
    }
    await todo.update({
        _id : req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "todo masrked as completed"
    })
})

app.listen(3000)

// write basic express boilerplate code
// write express.json() middleware