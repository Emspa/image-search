const express = require("express")
const fs = require('fs').promises;

const cors = require("cors");
const { addToFavoriteSchema } = require("./schemas/image.schema");
const { validate } = require("./validate");

const app = express()


app.use(cors());
app.use(express.json())

app.get('/api/users/favorite/:id', async (req, res) => {
    try {
        let users = JSON.parse(await fs.readFile("./users.json", "utf-8"));
        let user = users.find(u => u.id === req.params.id);
        
        if (user) {
            res.json(user.favorites); 
        } else {
            res.status(404).json({ message: 'User not found' }); 
        }
    } catch (error) {
        console.error('Error reading from users.json:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/api/users/save-favorite', validate(addToFavoriteSchema), async (req, res) => {
    const { user, title, byteSize, imageUrl } = req.body;

    try {
        let data = await fs.readFile('./users.json', 'utf8');
        let users = JSON.parse(data);
        
        let foundUser = users.find(u => u.id === user);
        if (foundUser) {
            const favoriteExists = foundUser.favorites.some(favorite => favorite.link === imageUrl);
            if (!favoriteExists) {
                foundUser.favorites.push({ title, byteSize, link: imageUrl });
     
            }
        } else {
            users.push({
                id: user, 
                favorites: [{ title, byteSize, link: imageUrl }]
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












