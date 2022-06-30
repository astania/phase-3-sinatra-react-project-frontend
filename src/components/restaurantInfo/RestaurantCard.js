

const RestaurantCard = ({restaurant}) => {
  return (
    <div>
      <img src={restaurant.image_url} alt="restaurant image" width="200" height="200"/>
      <h3>{restaurant.restaurant_name}</h3>
      <p>{restaurant.cuisine_type}</p>

    </div>
    
  )
}

export default RestaurantCard