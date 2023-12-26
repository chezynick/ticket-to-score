import { useState } from "react";
import colours from "../../utils/colours";

const LongestTrain = ({players, setPlayers}) => {
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const togglePlayers = (player) => {
        if(selectedPlayers.includes(player.id)){
            setSelectedPlayers(selectedPlayers.filter(play => play !== player.id))
            const newPlayer = {...player, score: player.score - 10}
            setPlayers(players.map(play => {
                if(play.id === player.id){
                    return newPlayer
                }
                return play
            }))
        }
        setPlayers(selectedPlayers.push(player.id))
        const newPlayer = {...player, score: player.score + 10}
        setPlayers(players.map(play => {
            if(play.id === player.id){
                return newPlayer
            }
            return play
        }))
    }
    const enabledPlayers = players.filter(player => player.enabled);
    return ( 
        <div className="w-full h-full pb-4">
            <div className="w-full py-1 text-xl text-center text-gray-300">Who has the longest train?</div>
            <div className="grid w-full h-full grid-cols-2 grid-rows-2">
            {enabledPlayers.map(player => {
                  const isSelected =   !!selectedPlayers.includes(player.id);
                return (
                <div key={player.id} className="w-full h-full p-2">
                    <button onClick={()=>togglePlayers(player)} className={`rounded-lg w-full flex flex-col justify-center items-center border-4 h-full ${isSelected ? 'border-gray-400' :'border-gray-800'}`}>
                            <div>{player.name}</div>
                            <div className={`mt-4 w-10 h-10 rounded-full ${colours.find(col => col.id === player.colour).bg}`}/>
                            {isSelected && (<div className="mt-4 text-3xl text-gray-200">+10</div>)}
                    </button>
                </div>
            )})}</div>
        </div>
     );
}
 
export default LongestTrain;