const mongoose = require("mongoose")

async function ConnectDatabase(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log("Connected to Mongoose Database");
    
}
module.exports = ConnectDatabase;