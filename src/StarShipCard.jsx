import react from 'react'

const StarShipCard = ({starship}) =>{
    return(
       
        <div className='starship-card'>
        <h2> {starship.name}</h2>
        </div>
    )  
}
export default StarShipCard;