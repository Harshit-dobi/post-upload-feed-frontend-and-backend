const express = require("express")
const postModel = require("./models/model")
const uploadFile = require("./servicers/storage.service")
const multer = require("multer")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
const upload = multer({
    storage: multer.memoryStorage()
})




app.post("/upload-post", upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);


    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "post uploaded successfully",
        post
    })
})

app.get("/posts",async (req,res)=>{
    const posts = await postModel.find()

    res.status(200).json({
        message:"fetched",
        posts
    })

})

module.exports = app