const express = require("express")
const fs = require('fs')

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

// app.get('/images', (req, res) => {
//     res.status(200).json(images)

// })


app.post('/api/save-favorite', async (req, res) => {
    console.log(req.body);
    // Validera inkommande data med Joi här
    const { user, imageUrl } = req.body; // Antag att dessa fält finns i din request body

    // Här skulle du spara datan i din JSON-fil
    
    res.json({ message: 'Bild sparad' });
  });

app.listen(3000, () => console.log("Server is up and running..."))