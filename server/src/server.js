
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const corsOptions = {
    origin: process.env.CORS_ORIGIN, 
};

app.use(cors(corsOptions));


dotenv.config({
    path: '../.env'
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// health check route
app.get('/health-check', (req, res) => {
    res.send('ok');
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
