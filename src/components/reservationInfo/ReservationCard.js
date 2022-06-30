

const ReservationCard = ({reservation}) => {
  return (
    <div>
      <img src={reservation.restaurant.image_url} width="100" height="100"/>
      <h4>{reservation.restaurant.restaurant_name}</h4>
      <p>date: {reservation.date}</p>
      <p>time: {reservation.time}</p>
      <p>Number of guests: {reservation.number_of_guests}</p>
      <button>cancel reservation</button>
    </div>
  )
}

export default ReservationCard