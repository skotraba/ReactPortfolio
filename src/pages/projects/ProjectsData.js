import RecipeImage from "../../assets/images/projectImages/Recipe.png"
// import ColorPicker from "../../assets/images/projectImages/colorPicker2.png";
// import ITGame from "../../assets/images/projectImages/ITGame.png";
// import GuessColor from "../../assets/images/projectImages/GuessColor2.png";
// import WebCoffee from "../../assets/images/projectImages/WebCoffee.png";
// import SpanishLearn from "../../assets/images/projectImages/WebSpanish.png";
import Portfolio from "../../assets/images/projectImages/PortfolioSS.png";
import GREVocab from "../../assets/images/projectImages/GREVocab.png";
import Burger from '../../assets/images/projectImages/Burger.png';
// import CSSProject from '../../assets/images/projectImages/CSSCourse.png';
import VerbViewer from '../../assets/images/projectImages/verbViewer.png';



//TODO figure out why image quality is low

//Gifs
// import TrelloGif from '../../assets/gifs/testTrello.gif';

export const ProjectsData = [
  {
    imageSrc: VerbViewer,
    link: "https://skotraba.github.io/VerbViewer/",
    name: "Verb Viewer",
    description: "I created a simple web application that has all the information about spanish verbs that I need in one place. I watch a lot of movies in Spanish to help me learn, and I often find myself wishing I had a central location for the information I look up.  I was really going for simplicity because some of the Spanish sites I use seem to overwhelm you with information you don't need. I used redux to store the current state, which in this application is the current verb being viewed. I found a free database of almost 600 spanish verbs that I used to create this application and implemented a search feature for the verbs shown on the left.  I would like to add a recently viewed section as well."
  },
  {
    imageSrc: Burger,
    link: "https://github.com/skotraba/Burger-Builder",
    name: "Burger Builder",
    description: "This was a project that I created from a Udemy Course called \"React - The Complete Guide.\" This project allows a user to order a customized burger that taught me a lot about the basics of using React.  I really enjoyed this course because it gave me a solid foundation of React fundamentals and I was then later able to create my own projects from what I learned in this course."
  },
  {
    imageSrc: GREVocab,
    link: "https://github.com/skotraba/GRE-Study",
    name: "GRE Vocab Study",
    description: "This is a simple web application built using Electron to help study GRE vocabulary. The application cycles through words and allows the user to hide or show the definition.  Although, it is not a complex application, I really enjoyed creating this project because it was really interesting to work with Electron and use web languages to create an application outside of the browser.  Going back, I would probably spend more time on the design and make it look more professional.  I would love to be able to edit the lists as well. For example, add words you frequently miss so you can study those later."
  },
  {
    imageSrc: RecipeImage,
    link: "https://github.com/skotraba/RecipeCalculatorGUI",
    name: "Recipe Calculator",
    description: "A program that allows the user to input ingredient info. The user can add ingredients listing calories and weight.  After adding recipes the user can view the recipe or calculate total calories and calories based on serving size.  It is a buffed up calcualtor program, but I love this because I do find it useful and use it when I need to calculate calories of homemade meals. Orignally written in Python, rewritten with GUI implementation in C# "
  },
  {
    imageSrc: Portfolio,
    link: "https://github.com/skotraba/skotraba.github.io",
    name: "Old Portfolio",
    description: "Old portfolio I made focusing on design, responsive layout and utilizing Bootstrap. This was the second portfolio I have made out of many.  It was my first time trying to make my portfolio responsive, and I learned a lot of what not to do from this project.  I love being able to look back and see how far I've come in my software development journey."
  },
  // {
  //   imageSrc: ColorPicker,
  //   link: "https://github.com/skotraba/Color-Picker",
  //   name: "Color Picker",
  //   description: "A window that shows a color wheel and allows the user to select a color.  Based on the user selection, two other colors are generated to show a triadic color scheme.  A useful program for artist and designers.  The values were calculated using properties of an equilateral triangle.  Written in C++ using the SFML library for graphics."
  // },
  // {
  //   imageSrc: ITGame,
  //   link: "https://github.com/skotraba/ITGame",
  //   name: "IT Game",
  //   description: "A text-based game written in C# about my experiences working in IT. This project taught me a lot about design and state management. I created a map object that updates depending on what room the user is in, what computers they have completed, and what doors are unlocked based on their progress."
  // },
  // {
  //   imageSrc: GuessColor,
  //   link: "https://github.com/skotraba/GuessColor",
  //   name: "Color Guesser",
  //   description: "A simple color guessing game that shows RGB values and let's you guess the color."
  // },
  // {
  //   imageSrc: CSSProject,
  //   link: "https://github.com/skotraba/CoffeeSite",
  //   name: "Trillo - A CSS Focused Project",
  //   description: "This was a project created following an advanced CSS and Sass course on Udemy(course referenced in ReadMe file).  This project was focused on using Sass and styling web components in a responsive and organized way.  This project taught me a lot about best practices when working with CSS and Sass and applies the BEM methodology."
  // },
  // {
  //   imageSrc: WebCoffee,
  //   link: "https://github.com/skotraba/CoffeeSite",
  //   name: "Practice Coffee Store Website",
  //   description: "A mock coffee store website.  I used Materialize and Sass to design this website. Currently not fitted for mobile."
  // },
  // {
  //   imageSrc: SpanishLearn,
  //   link: "https://github.com/skotraba/SpanishLearn",
  //   name: "Practice Spanish Learning Resource Site",
  //   description: "In my free time I really enjoy learning Spanish, so I decided to create a simple webiste that has learning resources available.  I created a simple javascript game that shows flashcards of questions and flips to reveal the answers.  The site also has links to resources used to create the site.  Javascript game does not currently work on mobile."
  // },
  
  
  
  ]

