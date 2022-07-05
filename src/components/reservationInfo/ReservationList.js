import ReservationCard from './ReservationCard'

const ReservationList = ({ loggedInGuest, onDeleteReservation }) => {
  let reservations = loggedInGuest.reservations

  if (reservations.length > 0) {
    return (
      <div>
        <h3>{loggedInGuest.name}'s Reservations</h3>
        {reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id} onDeleteReservation={onDeleteReservation}/>)}
      </div>
    )
  } else {
    return (
      <h3><em>You have no reservations</em></h3>
    )
  }

  
}

export default ReservationList