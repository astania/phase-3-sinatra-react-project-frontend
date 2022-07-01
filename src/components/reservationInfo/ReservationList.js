import ReservationCard from './ReservationCard'

const ReservationList = ({ loggedInGuest, onDeleteReservation }) => {
  let reservations = loggedInGuest.reservations

  return (
    <div>
      <h3>{loggedInGuest.name}'s Reservations</h3>
      {reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id} onDeleteReservation={onDeleteReservation}/>)}
    </div>

  )
}

export default ReservationList