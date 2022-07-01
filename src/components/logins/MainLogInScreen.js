import { Link } from "react-router-dom"

const MainLogInScreen = () => {
  return (
    <div>
      <h1>are you a:</h1>
      <Link to={"restaurant/new"}>New User</Link>
      <Link to={"guest/new"}>Returning User</Link>
    </div>
  )
}

export default MainLogInScreen