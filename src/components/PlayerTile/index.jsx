import { useState } from "react";
import Button from "../Button";

const PlayerTile = ({player, setPlayers, players}) => {
    const [playerName, setPlayerName] = useState(player.name)
    const updatePlayer = () => {
        const savedPlayer = {...player, name: playerName};
        setPlayers(players.map(ply => {
            if(ply.id === player.id){
                return savedPlayer
            }
            return ply
        }))
    }
    const undo = () => {
        setPlayerName(player.name)
    }
    return (
        <div className="w-full h-full  p-2 ">
            <div className="w-full flex flex-col justify-center rounded-lg items-center h-full border-4 border-gray-300">
            <input className="w-3/4 rounded-full text-center text-black" type='text' value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
            
            <div className="flex mt-4 justify-center space-x-2 items-center">
            <Button onClick={undo} outlineButton text="Undo" />
                <Button onClick={updatePlayer} text="Save" />
                </div>
            </div>
            
        </div>
    )
}
export default PlayerTile;