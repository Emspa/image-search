# image-search

Search for images using Google's Programmable Search Engine.
Save favourite pictures to a local database.

## Installation

cd client
cd image-search-app
npm install
npm run dev


cd server
npm install
nodemon server

## Create your environment variables
 
- Create a .env file in image-search/client/ and add two variables: `VITE_API_KEY="YOUR_API_KEY"` as well as `VITE_AUTH0_CLIENT_ID="YOUR_CLIENT_ID"`
 
They can be found at [Google API Key](https://developers.google.com/custom-search/v1/overview) and [Auth0 Client ID](https://auth0.com/) Respectively.