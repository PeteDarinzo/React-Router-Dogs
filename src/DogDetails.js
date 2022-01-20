import React from "react";
import { useParams, Link } from "react-router-dom";

/**
 * show the details of an individual dog
 * the useParam gets the dog's name from the url
 * use it to find the right dog from the list
 */
const DogDetails = ({ dogs }) => {

  const { name } = useParams();

  const dog = dogs.find(dog => dog.name === name);

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} style={{ width: "100px" }}></img>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map(fact => <li>{fact}</li>)}
      </ul>
      <Link to="/dogs">Back to dogs</Link>
    </div>
  );
}

export default DogDetails;