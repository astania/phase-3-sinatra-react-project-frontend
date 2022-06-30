import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    // backgroundColor: "rgb(2555, 120, 44)",
    verticalAlign: "center"
}
const activeStyle = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    // backgroundColor: "rgb(2555, 120, 44)",
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
                to="/guests/restaurants"
            >Restaurants</NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }
                to="/guests/reservations"
            >My Reservations</NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : style
          }
                to="/guests/profile"
            >Profile</NavLink>
        </div>
    )
}

export default Navbar;