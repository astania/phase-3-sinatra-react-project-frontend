import { useState } from 'react'
import {Outlet} from 'react-router-dom'
// import {useHistory} from 'react-router-dom'

const Home = ({ guests, loggedInGuest, setLoggedInGuest, setGuestLoggedIn }) => {

    // const guestOptions = guests.map(guest => {
    //     return { label: guest.name, value: guest.id }
    // })

    const [currentGuestId, setCurrentGuestId] = useState("")
    // const history = useHistory()
    

    const handleChange = (event) => {
        console.log(event.target.value)
        setCurrentGuestId(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const guest = guests.find(guest => guest.id === Number(currentGuestId))
        console.log(guest)
        setLoggedInGuest(guest)
        console.log(loggedInGuest)
        setGuestLoggedIn(true)
        // history.push("/restaurants")

    }

    return (

        <div>
            {/* <div><img src={window.location.origin + "/Images/homePageBackground.jpg"} alt="A fancy restaurant interior"></img></div> */}
            <h2><em>Log in below</em></h2>
            <form onSubmit={e => handleSubmit(e)}>
            <label>
                Select your name
                <select onChange={e => handleChange(e)}>
                    {/* {guestOptions.map(option => (
                        <option value={option.value} key={option.value}>{option.label}</option>))} */}
                </select>
            </label>
            <button type="submit">login</button>
        </form>

        <Outlet />
        </div >
    )
}



export default Home

