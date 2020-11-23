import RecipeImage from "../../assets/images/projectImages/Recipe.png"
import ColorPicker from "../../assets/images/projectImages/colorPicker2.png";
import ITGame from "../../assets/images/projectImages/ITGame.webp";
import GuessColor from "../../assets/images/projectImages/GuessColor2.png";
import WebCoffee from "../../assets/images/projectImages/WebCoffee.png";
import SpanishLearn from "../../assets/images/projectImages/WebSpanish.png";

export const ProjectsData = [
{
    imageSrc: RecipeImage,
    name: "Recipe Calculator",
    description: "A program that allows the user to input ingredient info. The user can add ingredients listing calories and weight.  After adding recipes the user can view the recipe or calculate total calories and calories based on serving size. Orignally written in Python, rewritten with GUI implementation in C# "
  },
  {
    imageSrc: ColorPicker,
    name: "Color Picker",
    description: "A window that shows a color wheel and allows the user to select a color.  Based on the user selection, two other colors are generated to show a triadic color scheme.  A useful program for artist and designers.  The values were calculated using properties of an equilateral triangle.  Written in C++ using the SFML library for graphics."
  },
  {
    imageSrc: ITGame,
    name: "IT Game",
    description: "A text-based game written in C# about my experiences working in IT. This project taught me a lot about design and state management. I created a map object that updates depending on what room the user is in, what computers they have completed, and what doors are unlocked based on their progress."
  },
  {
    imageSrc: GuessColor,
    name: "Color Guesser",
    description: "A window that shows a color wheel and allows the user to select a color.  Based on the user selection, two other colors are generated to show a triadic color scheme.  A useful program for artist and designers.  The values were calculated using properties of an equilateral triangle.  Written in C++ using the SFML library for graphics."
  },
  {
    imageSrc: WebCoffee,
    name: "Practice Coffee Store Website",
    description: "A mock coffee store website.  I used Materialize and Sass to design this website. Currently not fitted for mobile."
  },
  {
    imageSrc: SpanishLearn,
    name: "Practice Spanish Learning Resource Site",
    description: "In my free time I really enjoy learning Spanish, so I decided to create a simple webiste that has learning resources available.  I created a simple javascript game that shows flashcards of questions and flips to reveal the answers.  The site also has links to resources used to create the site.  Javascript game does not currently work on mobile."
  }
  
  ]

