require('dotenv').config();
const app = require('./src/app')

//accessing the dotenv

const port = 3000;
app.listen(port,()=>{
    console.log(`server starting to a ${port}`);
})