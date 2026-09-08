require("dotenv").config();

const app = require("./src/app")
const ConnectDataBase = require("./src/db/db")

ConnectDataBase();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})

