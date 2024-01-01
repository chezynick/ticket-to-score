import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colours from "../../utils/colours";
import TrainHistory from "../TrainHistory";

const PlayerScoreTile = ({player, setSelectedPlayer }) => {
    const playerColour = colours.find(col => col.id === player.colour)
    return ( 
        <div className="w-full h-full p-2">
            <div  className="flex items-center justify-between w-full h-full border-4 border-gray-300 rounded-lg">
                <button onClick={()=>setSelectedPlayer({...player, removePoints: true})} className={`h-full w-1/6 border-r-2 flex items-center justify-center border-gray-300 ${playerColour.bg} ${playerColour.id === 4 ? 'text-gray-300' : 'text-black'}`}>
                <FontAwesomeIcon size='2x' icon={faMinus} />
                </button>
                <div className="flex flex-col items-center justify-center w-2/6 h-full">
                    <span className="pb-2 text-xl">{player.name}</span>
                    <span className="text-xs">Trains: {player.trainsRemaining}/45</span>
                    <TrainHistory history={player.history}/>
                </div>
                <div className='flex items-center justify-center w-2/6 h-full text-5xl text-gray-800 bg-gray-300'>{player.score}</div>
                <button onClick={()=>setSelectedPlayer(player)} className="flex items-center justify-center w-1/6 h-full text-gray-200 bg-gray-800"><FontAwesomeIcon size='2x' icon={faPlus} /></button>
                
            </div>
        </div>
     );
}
 
export default PlayerScoreTile;