

const ReservationCard = ({reservation, onDeleteReservation}) => {
  
  const handleDelete = (reservation) => {
    fetch(`http://localhost:9292/reservations/${reservation.id}`, {
        method: "DELETE",
    })
      .then(() => onDeleteReservation(reservation.id))
  }

  return (
    <div>
      <img src={reservation.restaurant.image_url} width="100" height="100" alt="restaurant"/>
      <h4>{reservation.restaurant.restaurant_name}</h4>
      <p>date: {reservation.date}</p>
      <p>time: {reservation.time}</p>
      <p>Number of guests: {reservation.number_of_guests}</p>
      <button onClick={() => handleDelete(reservation)}>cancel reservation</button>
    </div>
  )
}

export default ReservationCard