
const LoggedInHome = ({loggedInGuest}) => {
  return (
    <div>
      <h2>Welcome, {loggedInGuest.name}</h2>
    </div>
  )
}

export default LoggedInHome