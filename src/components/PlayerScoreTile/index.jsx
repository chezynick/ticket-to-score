import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colours from "../../utils/colours";

const PlayerScoreTile = ({player, setPlayers }) => {
    const playerColour = colours.find(col => col.id === player.colour)
    return ( 
        <div className="w-full h-full p-2">
            <div  className="flex items-center justify-between w-full h-full border-4 border-gray-300 rounded-lg">
                <div className={`h-full w-1/6 ${playerColour.bg}`}/>
                <div className="flex items-center justify-center w-2/6 h-full">{player.name}</div>
                <div className='flex items-center justify-center w-2/6 h-full text-5xl text-gray-800 bg-gray-300'>{player.score}</div>
                <div className="flex items-center justify-center w-1/6 h-full text-gray-200 bg-gray-800"><FontAwesomeIcon size='2x' icon={faPlus} /></div>
                
            </div>
        </div>
     );
}
 
export default PlayerScoreTile;