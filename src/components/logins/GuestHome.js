import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'
import LogInScreen from './LogInScreen'
import LoggedInHome from './LoggedInHome'



const GuestHome = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest, onAddNewGuest }) => {

    return (

        <div>
            {!!isLoggedIn ? <LoggedInHome loggedInGuest={loggedInGuest}/> : <LogInScreen guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest} onAddNewGuest={onAddNewGuest}/>}
            <Outlet />
            <Footer />
        </div >
    )
}



export default GuestHome

