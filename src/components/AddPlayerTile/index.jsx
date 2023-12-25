import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddPlayerTile = ({setPlayers, players}) => {

    const handleClick = () => {
        const firstUnEnabledPlayer = players.find((player)=> !player.enabled).name;
        const newPlayers = players.map(player => {
            if(player.name === firstUnEnabledPlayer){
                return {...player, enabled: true}
            }
            return player
        })
        setPlayers(newPlayers)
    }
    return (      
           <div className="w-full h-full  p-2 ">
    <button onClick={() => handleClick()} className="w-full flex flex-col justify-center rounded-lg items-center h-full border-4 border-gray-300">
    <div className="text-xl flex flex-col items-center justify-start" > 

<div className="flex items-center justify-center w-8 h-8 mb-2 bg-gray-400 text-black rounded-full"><FontAwesomeIcon icon={faPlus} /></div> Add player</div>

    </button>
    
</div> );
}
 
export default AddPlayerTile;