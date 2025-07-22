const express =require('express');
const airoutes = require('./routes/ai.routes')
const app = express();
const cors = require('cors')

app.use(cors())
app.get("/",(req,res)=>{
    res.send("server started")
})

app.use(express.json());
app.use('/ai',airoutes)

module.exports = app