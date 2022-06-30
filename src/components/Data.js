// import {React, useEffect, useState} from 'react';

// // console.log(restaurants)
// // console.log(guests)


// export const [restaurants, setRestaurants] = useState([])
// export const [guests, setGuests] = useState([])
// export const [guestLoggedIn, setGuestLoggedIn] = useState({})

// useEffect(() => {
//   fetch("http://localhost:9292/restaurants")
//     .then(r => r.json())
//     .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
//     .then(setRestaurantsLoading(false))
// }, [])

// useEffect(()=>{
//   fetch("http://localhost:9292/guests")
//     .then(r => r.json())
//     .then(fetchedGuests => setGuests(fetchedGuests))
//     .then(setGuestsLoading(false))
// }, [])

// export const [restaurantsLoading, setRestaurantsLoading] = useState(true)
// export const [guestsLoading, setGuestsLoading] = useState(true)

// export const [isLoggedIn, setIsLoggedIn] = useState(true)