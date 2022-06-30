import ReservationCard from "../reservationInfo/ReservationCard"


const GuestProfile = ({loggedInGuest}) => {
  let reservations = loggedInGuest.reservations

  console.log("in guest profile", loggedInGuest)
  // console.log(reservations)
 
  // return (
  //   <div>
  //     <h3>{loggedInGuest.name}'s Profile</h3>
  //     <h4>Reservations</h4>
  //     {reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id}/>)}
  //   </div>
    
  // )
}

export default GuestProfile