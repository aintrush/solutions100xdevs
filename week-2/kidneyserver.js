const express = require("express")
const port = 3000
const app = express()

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += (i+2)
//     }
//     return ans
// }

// app.get("/", (req, res) => {

//     const n = req.query.n
//     const ans = sum(n)
//     res.send(`Sum of the first ${n} numbers is ${ans}`)
// }
// )

/*************************************************************************************************/

const users = [{
    name : "hari",
    kidneys : [{healthy : false},
        {healthy : true}
    ]
}]

app.use(express.json());

// dispalays total kidney , health and unhealthy
app.get("/", (req,res)=>{
    const kidneys = users[0].kidneys;
    const totalKidneys = kidneys.length
    let healthyKidneys = 0;
    for ( let i=0; i< totalKidneys; i++){
        if ( kidneys[i].healthy)
            healthyKidneys += 1
    }

    const unhealthyKidneys = totalKidneys - healthyKidneys;

    res.json({totalKidneys,
        healthyKidneys,
        unhealthyKidneys        
    })

    res.send()
})

// adds a kidney to user : can be healty or otherwise
app.post("/", (req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
    msg : "Done !"
    })
})

// updates every kidney to healthy for the user
app.put("/", (req,res)=>{
    for ( let i = 0; i < users[0].kidneys.length; i++){
        newKidneys[i].healthy = true;
    }
    res.json({});
})

// removes unhealthy kidneys of user
app.delete("/", (req,res)=>{
    const newKidneys = [];
    for ( let i = 0; i<users[0].kidneys.length ; i++){
        if ( users[0].kidneys[i].healthy){
            newKidneys.push({healthy:true})
        }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg : "done"})
})

app.listen(port)