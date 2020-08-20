import safeFlightGif from '../Gifs/safe-flight-example.gif';
import mernScraperGif from '../Gifs/react-mongo-scraper-example.gif';
import freelancersGif from '../Gifs/freelancers-example.gif';

const projects = [
    {
        "id": 1,
        "projectName": "Safe Flight",
        "exampleGif" : safeFlightGif,
        "summary": "Safe Flight is a web application designed to help the user plan out a flight itinerary with airlines that are safe, secure, and not prone to malfuntion.",
        "techUsed": "React, MongoDB, Express, Node.js, Reactstrap, React-Router-Dom, Mongoose, Passport.js, Moment.js, Axios, Bcrypt, Bootstrap, Node-sass, and this project is deployed with Heroku.",
        "githubLink": "https://github.com/JYoung32/safe-flight",
        "deployedLink": "https://floating-everglades-15450.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "MERN Scraper",
        "exampleGif" : mernScraperGif,
        "summary": "MERN Scraper is a news article web application that allows the user to view news articles, save an article, it can also allow the user to post and delete notes on a save article.",
        "techUsed": "Tech Used: React, MongoDB, Express, Node.js, Reactstrap, Bootstrap, Mongoose, Axios, Cheerio, React-Router-Dom, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/react-mongo-scraper",
        "deployedLink": "https://thawing-lowlands-26119.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Freelancers",
        "exampleGif" : freelancersGif,
        "summary": "Freelancers is a web application designed to assist the user with connect them to a local expert to get the job done. In addition, a professional can come visit the app and leave their information to later be called upon to do a job.",
        "techUsed": "Tech Used: Express, Express-Handlebars, HTML, CSS, Javascript, MySQL, Sequelize, Node,js, Animate.CSS and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/freelancers",
        "deployedLink": "https://obscure-savannah-83730.herokuapp.com/"
    }
];

export default projects;