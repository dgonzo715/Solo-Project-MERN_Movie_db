const express = require('express');
const app = express();
// inside the server directory, you need to run: npm install cors
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({
    extended: true, 
}));
// to allow our browser to request data from our API, we must
// add the cors functionality to our express server.
app.use(cors());

require('./config/mongoose.config');

// require('./routes/movie.routes.js')(app);
const movieRoutes = require('./routes/movie.routes');
movieRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})