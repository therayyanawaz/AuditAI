require('dotenv').config();
const app = require('./src/app')

//accessing the dotenv
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server starting at port ${PORT}`);
})