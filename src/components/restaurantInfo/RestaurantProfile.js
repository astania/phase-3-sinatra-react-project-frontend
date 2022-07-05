import { useParams } from "react-router-dom"
import { useState } from "react"


const RestaurantProfile = ({ restaurants, loggedInGuest, addNewReservation }) => {
  let params = useParams()

  console.log("logged in guest", loggedInGuest)

  const selectedRestaurant = restaurants.filter(restaurant => restaurant.id == params.id)[0]
  console.log(selectedRestaurant.restaurant_name)

  let blankReservationTemplate = {
    date: "",
    time: "",
    number_of_guests: "",
    restaurant_id: selectedRestaurant.id,
    guest_id: loggedInGuest.id,
    restaurant: {
      id: selectedRestaurant.id,
      restaurant_name: selectedRestaurant.restaurant_name,
      cuisine_type: selectedRestaurant.cuisine_type,
      image_url: selectedRestaurant.image_url
    }
  }

  const [newReservation, setNewReservation] = useState(blankReservationTemplate)

  const newGuestProfile = { ...loggedInGuest, reservations: [...loggedInGuest.reservations, newReservation] }
  console.log("TESTING", newGuestProfile)
  console.log("loggedInGuest", loggedInGuest)

  const handleInputChange = (e) => {
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setNewReservation({ ...newReservation, [name]: value })
  }

  console.log({ reservations: newReservation})

  const handleNewReservation = (e) => {
    e.preventDefault()
    console.log("reservation to be added",newReservation)
    console.log("all resevations, plus new", { reservations: [...loggedInGuest.reservations, newReservation] })
    fetch(`http://localhost:9292/guests/${loggedInGuest.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({ loggedInGuest, reservations: [...loggedInGuest.reservations, newReservation] }),
    })
      .then(r => r.json())
    // .then(updatedGuest => addNewReservation(updatedGuest))

    // setNewReservation(blankReservationTemplate)
    .then(updatedGuest => console.log("updatedGuest",updatedGuest))
  }
  

  if (loggedInGuest.id > 0) {
    return (
      <div>
        <h2>Make a Reservation at:</h2>
        <h3>{selectedRestaurant.restaurant_name}</h3>

        <form onSubmit={handleNewReservation}>
          <label> Reservation Date
            <input type="text" name="date" value={newReservation.date} onChange={handleInputChange} />
          </label>
          <label> Reservation Time
            <input type="text" name="time" value={newReservation.time} onChange={handleInputChange} />
          </label>
          <label> Number of Guests
            <input type="text" name="number_of_guests" value={newReservation.number_of_guests} onChange={handleInputChange} />
          </label>
          <button type="submit">Make a Reservation</button>
        </form>

      </div>

    )
  } else {
    return (
      <div>
        <h3><em>Please log in to make a reservation</em></h3>
      </div>
    )

  }

}

export default RestaurantProfile

// "reservation": {

//   "date": "2022-06-09",
//   "time": "2000-01-01T05:30:00.000Z",
//   "number_of_guests": 3,
//   "restaurant_id": 17,
//   "guest_id": 45

// }