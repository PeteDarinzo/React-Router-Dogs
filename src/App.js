import './App.css';
// import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// import DogList from './DogList';
// import DogDetails from './DogDetails';
import Routes from './Routes';

/** dog images are in public/images/ 
 * the srcs are set here, and used in the dogs array
*/
const whiskey = "/images/whiskey.jpg";
const duke = "/images/duke.jpg";
const perry = "/images/perry.jpg";
const tubby = "/images/tubby.jpg";

/**
 * inside a browser router, make a switch containing two routes
 * the DogList route renders a list of all dogs
 * DogDetails shows one dog, the dog is take from the "name" parameter
 * if neither route is hit, redirect to the DogList
 * 
 */
function App({ dogs }) {
  return (
    <div className="App">
      <Routes dogs={dogs} />
    </div>
  );
}

const dogs = App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export { dogs };
export default App;
