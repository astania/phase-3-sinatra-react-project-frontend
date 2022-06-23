// import { Button, makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: 'red'
//   }
// })

// import Footer from './components/navigation/Footer'
// import Header from './components/navigation/Header'
// import NavBar from './components/navigation/NavBar'
// import GuestForm from './components/guestInfo/GuestForm'
// import GuestCard from './components/guestInfo/GuestCard'
// import GuestProfile from './components/guestInfo/GuestProfile'
// import GuestLogInPage from './components/guestInfo/GuestLogInPage'
// import ReservationForm from './components/reservationInfo/ReservationForm'
// import ReservationCard from './components/reservationInfo/ReservationCard'
// import ReservationList from './components/reservationInfo/ReservationList'
// import RestaurantList from './components/restaurantInfo/RestaurantsList'
// import RestaurantForm from './components/restaurantInfo/RestaurantForm'
// import RestaurantCard from './components/restaurantInfo/RestaurantCard'
// import RestaurantProfile from './components/restaurantInfo/RestaurantProfile'
// import RestaurantLogInPage from './components/restaurantInfo/RestaurantLogInPage'


import { Router, Route, Outlet, Link } from 'react-router-dom'
// 
import {useState, useEffect} from "react"
import Home from './components/logins/Home'

const App = () => {
  // const classes = useStyles()

  const [restaurants, setRestaurants] = useState([])
  const [guests, setGuests] = useState([])

  const [restaurantsLoading, setRestaurantsLoading] = useState(true)
  const [guestsLoading, setGuestsLoading] = useState(true)
  
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then(r => r.json())
      .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
      .then(setRestaurantsLoading(false))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:9292/guests")
      .then(r => r.json())
      .then(fetchedGuests => setGuests(fetchedGuests))
      .then(setGuestsLoading(false))
  }, [])

  // if(loading) return (<h1>Loading...</h1>)
  
  console.log(guests)

  return (
    <div>
      <h1>Reserv'd</h1>
      <h5><em>Reserve with confidence!</em></h5>
      <nav>
        <Link to="/home">Home</Link> | {" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />

     
    </div>
  );
}

export default App;

/* <Button className={classes.button} variant="contained">Hey!</Button> */

 {/* <Router>

        <Header slogan="Never wait for a table again!" storeName="Reservation World" /> */}


          {/* <Route path="/guests/new">
            <GuestForm />
          </Route>

          <Route path="/restaurants/new">
            <RestaurantForm />
          </Route>

          <Route path="/restaurants/:id">
            <RestaurantCard />
          </Route>

          <Route path="/restaurants/profile">
            <RestaurantProfile />
          </Route>

          <Route path="/reservations/new">
            <ReservationForm />
          </Route>

          <Route path="/reservations/:id">
            <ReservationCard />
          </Route>

          <Route path="/guests/:id">
            <GuestCard />
          </Route>

          <Route path="/guests/reservations">
            <ReservationList />
          </Route>

          <Route path="/guests/profile">
            <GuestProfile />
          </Route>

          <Route path="/guests/restaurants">
            <RestaurantList />
          </Route>

          <Route exact path="/guests">
            <GuestLogInPage />
          </Route>

          <Route exact path="/restaurants">
            <RestaurantLogInPage />

          </Route>

          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>

          <Route path="*">
            {"404 Not Found"}
          </Route>
      </Router>
      <Footer /> */}