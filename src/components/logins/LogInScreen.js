import React from "react"

const LogInScreen = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest }) => {
    // console.log("In log in screen", guests)
    const guestOptions = guests.map(guest => {
        return { label: guest.name, value: guest.id }
    })


    //alphabetize guestOptions for dropdown menu
    function compare(a, b) {
        if (a.label < b.label) {
            return -1;
        }
        if (a.label > b.label) {
            return 1;
        }
        return 0;
    }
    guestOptions.sort(compare);


    const handleChange = (event) => {
        console.log(event.target.value)
        setCurrentGuestId(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const guest = guests.find(guest => guest.id === Number(currentGuestId))
        console.log("guest = ", guest)
        setLoggedInGuest(guest)
        console.log("loggedInGuest =", loggedInGuest)
        setIsLoggedIn(() => true)
        console.log("LoggedIn = ", isLoggedIn)
}

        return (
            <div>
                <h2><em>Log in below</em></h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        Select your name
                        <select onChange={e => handleChange(e)}>
                            {guestOptions.map(option => (
                                <option value={option.value} key={option.value}>{option.label}</option>))}
                        </select>
                    </label>
                    <button type="submit">login</button>
                </form>
            </div>
        )
    
}

export default LogInScreen