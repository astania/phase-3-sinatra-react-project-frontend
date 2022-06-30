import {Link} from "react-router-dom"

const RestaurantCard = ({restaurant}) => {
 

   
  return (
    <div>
      <img src={restaurant.image_url} alt="restaurant image" width="200" height="200"/>
      <h3>{restaurant.restaurant_name}</h3>
      <p>{restaurant.cuisine_type}</p>
      <Link to={"/restaurants/" + restaurant.id}>Make a Reservation</Link>
    </div>
    
  )
}

export default RestaurantCard