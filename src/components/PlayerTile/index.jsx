import { useState } from "react";
import Button from "../Button";
import ColourSelector from "../ColourSelector";

const PlayerTile = ({player, setPlayers, players}) => {
    const [playerName, setPlayerName] = useState(player.name)
    const [selectedColour, setSelectedColour] =useState(player.colour)
    const updatePlayer = () => {
        const savedPlayer = {...player, name: playerName, colour: selectedColour};
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
    const showButtons = player.name !== playerName || selectedColour !== player.colour;
    return (
        <div className="w-full h-full p-2 ">
            <div className="flex flex-col items-center justify-center w-full h-full border-4 border-gray-300 rounded-lg">
                <input className="w-3/4 text-center text-black rounded-full" type='text' value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
                <ColourSelector selectedColour={selectedColour} setSelectedColour={setSelectedColour}/>
                {showButtons && (<div className="flex items-center justify-center mt-4 space-x-2">
                    <Button onClick={undo} outlineButton text="Undo" />
                    <Button onClick={updatePlayer} text="Save" />
                </div>)}
            </div>
            
        </div>
    )
}
export default PlayerTile;