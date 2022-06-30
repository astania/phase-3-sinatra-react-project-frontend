
const loggedInHome = () => {
  return (
    if (!!isLoggedIn) {
        return (
          
          <div> 
            <h1>Reserv'd</h1>
            <h5><em>Reserve with confidence!</em></h5>
    
    
            <nav>
              <Link to="/home" state={{ guests: guests }}>Home</Link> | {" "}
              <Link to="/about">About</Link>
            </nav>
            <Outlet />
          </div>
        )
      } else {
        return (
          <div>
           
            <h1>Reserv'd</h1>
            <h5><em>Reserve with confidence!</em></h5>
    
            <nav>
              <Link to="/home" state={{ guests: guests }}>Home</Link> | {" "}
              <Link to="/about">About</Link> | {" "}
              <Link to="/restaurants">Restaurants</Link> | {" "}
              <Link to="/reservations">My Reservations</Link> | {" "}
              <Link to="/profile">My Profile</Link>
            </nav>
            <Outlet />
          </div>
        )
      }
  )
}

export default loggedInHome