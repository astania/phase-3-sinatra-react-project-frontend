import ReservationCard from './ReservationCard'

const ReservationList = ({ loggedInGuest }) => {
  let reservations = loggedInGuest.reservations

  console.log("in guest profile", loggedInGuest)
  console.log(reservations)

  return (
    <div>
      <h3>{loggedInGuest.name}'s Reservations</h3>
      {reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id} />)}
    </div>

  )
}

export default ReservationList