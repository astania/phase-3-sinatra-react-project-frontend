import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    verticalAlign: "center"
}
const activeStyle = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    verticalAlign: "center",
    textDecoration: "underline",
  };

const Navbar = () => {
    return (
        <div>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }  
               to="/"
            >Home</NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }
                to="/restaurants"
            >Restaurants</NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }
                to="/reservations"
            >My Reservations</NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }
                to="/profile"
            >Profile</NavLink>
        </div>
    )
}

export default Navbar;