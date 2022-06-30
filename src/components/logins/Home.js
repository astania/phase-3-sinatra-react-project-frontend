import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DefaultNavbar from '../navigation/DefaultNavBar'
import GuestNavBar from '../navigation/GuestNavBar'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import LogInScreen from './LogInScreen'
import LoggedInHome from './LoggedInHome'



const Home = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest }) => {


    return (

        <div>
            <Header />
            {isLoggedIn ? <GuestNavBar /> : <DefaultNavbar />}
            <LogInScreen guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest}/>
            {/* {!!isLoggedIn ? <LoggedInHome loggedInGuest={loggedInGuest}/> : <LogInScreen guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest}/>} */}
        
            <Outlet />
            <Footer />
        </div >
    )
}



export default Home

