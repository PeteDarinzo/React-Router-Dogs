import { NavLink } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <nav>
      {dogs.map(dog => <NavLink exact to={`dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>)}
    </nav>
  );
}

export default Nav;