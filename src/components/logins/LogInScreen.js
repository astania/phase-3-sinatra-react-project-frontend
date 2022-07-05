import { React, useState } from "react"

const LogInScreen = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest, onAddNewGuest }) => {
    // console.log("In log in screen", guests)
    const guestOptions = guests.map(guest => {
        return { label: guest.name, value: guest.id }
    })

    const blankGuestTemplate = {
            username: "",
            password: "",
            name: ""
    }

    const [newGuest, setNewGuest] = useState(blankGuestTemplate)


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


    const handleDropdownChange = (event) => {
        console.log(event.target.value)
        setCurrentGuestId(event.target.value)

    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
    setNewGuest({ ...newGuest, [name]: value })
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

    const handleNewGuest = (e) => {
        e.preventDefault()
        console.log(newGuest)
        fetch("http://localhost:9292/guests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({guest: newGuest}),
        })
            .then(r => r.json())
            .then(newSubmission => onAddNewGuest(newSubmission))
        setIsLoggedIn(true)
        setLoggedInGuest(newGuest)
        setNewGuest(blankGuestTemplate)


    }

    return (
        <div>
            <h2><em>Log in below</em></h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Select your name
                    <select onChange={e => handleDropdownChange(e)}>
                        {guestOptions.map(option => (
                            <option value={option.value} key={option.value}>{option.label}</option>))}
                    </select>
                </label>
                <button type="submit">login</button>
            </form>
            <h2>Create an account</h2>
            <form onSubmit={e => handleNewGuest(e)}>
                <label>Name
                    <input type="text" name="name" value={newGuest.name} onChange={handleInputChange} />
                </label>
                <label>Username
                    <input type="text" name="username" value={newGuest.username} onChange={handleInputChange} />
                </label>
                <label>Password
                    <input type="text" name="password" value={newGuest.password} onChange={handleInputChange} />
                </label>
                <button type="submit" >create account</button>
            </form>
        </div>
    )
}

export default LogInScreen

// {
//     "guest": {
//     "username": "t123",
//     "password": "t123",
//     "name": "t123"
//      }
//     }
