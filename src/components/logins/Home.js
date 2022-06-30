import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'
import LogInScreen from './LogInScreen'
import LoggedInHome from './LoggedInHome'



const Home = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest }) => {

    return (

        <div>
            
            {!!isLoggedIn ? <LoggedInHome loggedInGuest={loggedInGuest}/> : <LogInScreen guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest}/>}
        
            <Outlet />
            <Footer />
        </div >
    )
}



export default Home

