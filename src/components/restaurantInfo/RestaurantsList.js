import RestaurantCard from './RestaurantCard'


const RestaurantsList = ({restaurants}) => {
  console.log(restaurants)


  return (
    <div>
      <div>RestaurantsList</div>
      {restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id}/>)}
    </div>
    
  )
}

export default RestaurantsList