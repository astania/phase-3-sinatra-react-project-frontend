import RestaurantCard from './RestaurantCard'


const RestaurantsList = ({restaurants}) => {
  console.log(restaurants)


  return (
    <div>
      <h2>Our Restaurants</h2>
      {restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id}/>)}
    </div>
    
  )
}

export default RestaurantsList