
import RestaurantList from './components/restaurantInfo/RestaurantsList'
import Home from './components/logins/Home';
import About from './components/logins/About';
import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GuestProfile from './components/guestInfo/GuestProfile';
import ReservationList from './components/reservationInfo/ReservationList';


const App = () => {
  
  const [restaurants, setRestaurants] = useState([])
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then(r => r.json())
      .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
      .then(setRestaurantsLoading(false))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/guests")
      .then(r => r.json())
      .then(fetchedGuests => setGuests(fetchedGuests))

      .then(setGuestsLoading(false))
  }, [])

  const [restaurantsLoading, setRestaurantsLoading] = useState(true)
  const [guestsLoading, setGuestsLoading] = useState(true)

  const [currentGuestId, setCurrentGuestId] = useState("")
  const [loggedInGuest, setLoggedInGuest] = useState({})

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // if(loading) return (<h1>Loading...</h1>)


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest}/>}>
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } />
          <Route exact path="about" element={<About />} />
          <Route exact path="restaurants" element={<RestaurantList restaurants={restaurants}/>} />
          <Route exact path="profile" element={<GuestProfile loggedInGuest={loggedInGuest}/>}/>
          <Route exact path="reservations" element={<ReservationList loggedInGuest={loggedInGuest}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )



}

export default App;









{/* <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact index element={<Home />} />
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }/>
          <Route path="home" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="restaurants" element={<RestaurantList />}/>
      </Route>
    </Routes>  */}

/* /* <Button className={classes.button} variant="contained">Hey!</Button> */

/* <Router>

       <Header slogan="Never wait for a table again!" storeName="Reservation World" /> */


/* <Route path="/guests/new">
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
<Footer /> */