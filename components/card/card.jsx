import Icon from "../icons/icon.jsx"
import './card.css'
function Card({gameEnd,player, onPlay , index }) {
  console.log(player);
    let icon = <Icon />
    if (player == "X") {
        icon = <Icon name='cross'/>
    } else if (player == "O"){
        icon = <Icon name = 'circle'/>
    }
    return(
      <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
        {icon}
        
      </div>  
    )
}

export default Card