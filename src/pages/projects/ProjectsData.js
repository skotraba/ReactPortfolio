import RecipeImage from "../../assets/images/projectImages/Recipe.png"
import ColorPicker from "../../assets/images/projectImages/colorPicker2.png";
import ITGame from "../../assets/images/projectImages/ITGame.png";
import GuessColor from "../../assets/images/projectImages/GuessColor2.png";
import WebCoffee from "../../assets/images/projectImages/WebCoffee.png";
import SpanishLearn from "../../assets/images/projectImages/WebSpanish.png";
import Portfolio from "../../assets/images/projectImages/PortfolioSS.png";
import GREVocab from "../../assets/images/projectImages/GREVocab.png";
import Burger from '../../assets/images/projectImages/Burger.png'
//TODO RESIZE ALL IMAGES 800 px by 600 px?

//Gifs
import TrelloGif from '../../assets/gifs/trelloClone.gif';

export const ProjectsData = [
  {
    imageSrc: TrelloGif,
    link: "https://github.com/skotraba/TrelloClone",
    name: "Trello Clone",
    description: "I created a clone of Trello using the React framework.  The project incorporates react-beautiful-dnd to recreate the drag and drop feature and material-ui for design.  The data is stored using Firebase/Firestore.  Written using REM methodology and a mobile first design."
  },
  {
    imageSrc: Burger,
    link: "https://github.com/skotraba/Burger-Builder",
    name: "Burger Builder",
    description: "This was a project that I created from a Udemy Course called \"React - The Complete Guide.\" This project allows a user to order a customized burger that taught me a lot about state management.     "
  },
  {
    imageSrc: GREVocab,
    link: "https://github.com/skotraba/GRE-Study",
    name: "GRE Vocab Study",
    description: "This is a web application built using Electron to help study GRE vocabulary."
  },
  {
    imageSrc: RecipeImage,
    link: "https://github.com/skotraba/RecipeCalculatorGUI",
    name: "Recipe Calculator",
    description: "A program that allows the user to input ingredient info. The user can add ingredients listing calories and weight.  After adding recipes the user can view the recipe or calculate total calories and calories based on serving size. Orignally written in Python, rewritten with GUI implementation in C# "
  },
  {
    imageSrc: ColorPicker,
    link: "https://github.com/skotraba/Color-Picker",
    name: "Color Picker",
    description: "A window that shows a color wheel and allows the user to select a color.  Based on the user selection, two other colors are generated to show a triadic color scheme.  A useful program for artist and designers.  The values were calculated using properties of an equilateral triangle.  Written in C++ using the SFML library for graphics."
  },
  {
    imageSrc: ITGame,
    link: "https://github.com/skotraba/ITGame",
    name: "IT Game",
    description: "A text-based game written in C# about my experiences working in IT. This project taught me a lot about design and state management. I created a map object that updates depending on what room the user is in, what computers they have completed, and what doors are unlocked based on their progress."
  },
  {
    imageSrc: GuessColor,
    link: "https://github.com/skotraba/GuessColor",
    name: "Color Guesser",
    description: "A simple color guessing game that shows RGB values and let's you guess the color."
  },
  {
    imageSrc: WebCoffee,
    link: "https://github.com/skotraba/CoffeeSite",
    name: "Practice Coffee Store Website",
    description: "A mock coffee store website.  I used Materialize and Sass to design this website. Currently not fitted for mobile."
  },
  {
    imageSrc: SpanishLearn,
    link: "https://github.com/skotraba/SpanishLearn",
    name: "Practice Spanish Learning Resource Site",
    description: "In my free time I really enjoy learning Spanish, so I decided to create a simple webiste that has learning resources available.  I created a simple javascript game that shows flashcards of questions and flips to reveal the answers.  The site also has links to resources used to create the site.  Javascript game does not currently work on mobile."
  },
  {
    imageSrc: Portfolio,
    link: "https://github.com/skotraba/skotraba.github.io",
    name: "Old Portfolio",
    description: "Old portfolio I made focusing on design, responsive layout and utilizing Bootstrap."
  },
  
  
  ]

