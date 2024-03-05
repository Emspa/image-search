const express = require("express")

const cors = require("cors")

const app = express()

const images = [
    {
        id: 1,
        name: "elephant"
    },
    {
        id: 2,
        name: "cat"
    },
]

app.use(cors());
app.use(express.json())

app.get('/images', (req, res) => {
    res.status(200).json(images)

})

app.listen(3000, () => console.log("Server is up and running..."))