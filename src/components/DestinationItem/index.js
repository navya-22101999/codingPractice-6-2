// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li className="space">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
