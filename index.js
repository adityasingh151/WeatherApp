import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error rendering index page. Please try again later.');
    }
});

app.get("/weather", async (req, res) => {
    try {
        const weatherData = response.data;
        res.render("weather", { weatherData });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
