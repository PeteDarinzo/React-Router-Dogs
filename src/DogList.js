import React from "react";
import { Link } from "react-router-dom"


/**
 * Display a list of links to each dog
 * take each dog's name and make it a prop in the "to" url
 * render each dog's name as a list item
 */
const DogList = ({ dogs }) => {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.name}>
          <Link to={`dogs/${dog.name}`}>{dog.name}</Link>
        </li>
      )
      )}
    </ul>
  );
}

export default DogList;