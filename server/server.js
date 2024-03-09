const express = require("express")
const fs = require('fs').promises;

const cors = require("cors");
const { addToFavoriteSchema } = require("./schemas/image.schema");
const { validate } = require("./validate");

const app = express()


app.use(cors());
app.use(express.json())



app.post('/api/users/save-favorite', validate( addToFavoriteSchema ), async (req, res) => {
    const { user, title, byteSize, imageUrl } = req.body;

    try {
        let data = await fs.readFile('./users.json', 'utf8');
        console.log(process.cwd())
        let users = JSON.parse(data);
        
        let foundUser = users.find(u => u.sub === user);
        if (foundUser) {
            const favoriteExists = foundUser.favorites.some(favorite => favorite.url === imageUrl);
            if (!favoriteExists) {
                foundUser.favorites.push({ title, byteSize, url: imageUrl });
     
            }
        } else {
  
            users.push({
                name: user, 
                favorites: [{ title, byteSize, url: imageUrl }]
            });
        }

        await fs.writeFile('./users.json', JSON.stringify(users, null, 2), 'utf8');
        res.json({ message: 'Favorite saved' });
    } catch (error) {
        console.error('Error saving favorite:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.listen(3000, () => console.log("Server is up and running..."))












