import './Card.css'
const Card = ({Name,children}) => {
  return (
    <div>
      My name is {Name}
      <br />
      The children is {children}
    </div>
  )
}

export default Card
