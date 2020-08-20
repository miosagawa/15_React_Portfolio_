import TravelBuddyGif from '../Gifs/travelbuddy1.gif';
// import ResponsivenessPortfolioGif from '../Gifs/Responsiveness_Portfolio.jpg';
import FourChoiceQuizGif from '../Gifs/Four_choice_quiz.jpg';
import PasswordGeneratorGif from '../Gifs/Password_Generator.jpg';
import TemplateEngineGif from '../Gifs/Template_Engine.jpg';

const projects = [
    {
        "id": 1,
        "projectName": "Travel buddy",
        "exampleGif" : TravelBuddyGif,
        "summary": "Travel Buddy looks to combine the tools for travel into one helpful site Combing local language translation, geolocation, and geo search we have provided a platform that allows a traveling user to find whats around and communicate with the local language.",
        "techUsed": "Design / Coding(Responsive) / HTML,CSS,JavaScript",
        "githubLink": "https://github.com/miosagawa/00_Travel-Buddy.git",
        "deployedLink": "https://miosagawa.github.io/00_Travel-Buddy/index.html"
    },
    // {
    //     "id": 2,
    //     "projectName": "Responsiveness Portfolio",
    //     "exampleGif" : ResponsivenessPortfolioGif,
    //     "summary": "Safe Flight is a web application designed to help the user plan out a flight itinerary with airlines that are safe, secure, and not prone to malfuntion.",
    //     "techUsed": "Design / Coding(Responsive) / HTML,CSS,JavaScript",
    //     "githubLink": "https://github.com/miosagawa/01_Responsiveness-Portfolio.git",
    //     "deployedLink": "https://miosagawa.github.io/01_Responsiveness-Portfolio/index.html"
    // },
    {
        "id": 3,
        "projectName": "Four choice quiz",
        "exampleGif" : FourChoiceQuizGif,
        "summary": "This quiz has ten questions. The user's score is based on the percentage of questions answered correctly. The questions are based on JavaScript essentials. Unfortunately I didn't have enough time to include a timer or saved score system. I was halfway finished with these features before I ran out of time.",
        "techUsed": "Design / Coding(Responsive) / HTML,CSS,JavaScript",
        "githubLink": "https://github.com/miosagawa/02_Four-Choice-Quiz.git",
        "deployedLink": "https://miosagawa.github.io/02_Four-Choice-Quiz/Assets/index.html"
    },
    {
        "id": 4,
        "projectName": "Password Generator",
        "exampleGif" : PasswordGeneratorGif,
        "summary": "This website generates a ramdom password. Javasxript create a password between 8 and 128 characters. To create a password, just click the red generate password button. Password has at least one small character, one big character, one number and one special character.",
        "techUsed": "Design / Coding(Responsive) / HTML,CSS,JavaScript",
        "githubLink": "https://github.com/miosagawa/03_Password-Generator.git",
        "deployedLink": "https://miosagawa.github.io/03_Password-Generator/Develop/index.html"
    },
    {
        "id": 5,
        "projectName": "Template Engine",
        "exampleGif" : TemplateEngineGif,
        "summary": "You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.",
        "techUsed": "Design / Coding(Responsive) / HTML,CSS,JavaScript",
        "githubLink": "https://github.com/miosagawa/05_Template-Engine.git",
        "deployedLink": "https://miosagawa.github.io/05_Template-Engine/Develop/output/team.html"
    }
];

export default projects;