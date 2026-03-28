import express from 'express'

const app = express();


// route 
app.get("/api/notes" ,  (req,res) => {
    res.send("you got 5 notes")
})

app.listen(5500,()=>{
    console.log("Server started in PORT 5500")
})