
import RestaurantList from './components/restaurantInfo/RestaurantsList'
import GuestHome from './components/logins/GuestHome';
import About from './components/logins/MainLogInScreen';
import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GuestProfile from './components/guestInfo/GuestProfile';
import ReservationList from './components/reservationInfo/ReservationList';
import GuestNavBar from './components/navigation/GuestNavBar'
import DefaultNavbar from './components/navigation/DefaultNavBar';
import Header from './components/navigation/Header'


const App = () => {

  const [restaurants, setRestaurants] = useState([])
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then(r => r.json())
      .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/guests")
      .then(r => r.json())
      .then(fetchedGuests => setGuests(fetchedGuests))
  }, [])

  const [currentGuestId, setCurrentGuestId] = useState("")
  const [loggedInGuest, setLoggedInGuest] = useState({})

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onDeleteReservation = (id) => {
    const filteredReservations = loggedInGuest.reservations.filter(reservation => reservation.id !== id)
    
    console.log("in delete function", id)
   
    setLoggedInGuest({...loggedInGuest, reservations: filteredReservations})
  
  }

  const addNewGuest = (newGuest) => {
    setGuests([...guests, newGuest])
  }


  return (
    
    <BrowserRouter>
    <Header />
    {isLoggedIn ? <GuestNavBar /> : <DefaultNavbar />}
      <Routes>
        <Route exact path="/" element={<GuestHome guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest} onAddNewGuest={addNewGuest} />} />
        <Route path="/*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/restaurants" element={<RestaurantList restaurants={restaurants} />} />
        <Route exact path="/profile" element={<GuestProfile loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route exact path="/reservations" element={<ReservationList loggedInGuest={loggedInGuest} onDeleteReservation={onDeleteReservation}/>} />
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