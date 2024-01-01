import { useState } from "react";
import Button from "../Button";
import ColourSelector from "../ColourSelector";

const PlayerTile = ({player, setPlayers, players}) => {
    const [playerName, setPlayerName] = useState(null)
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
        setPlayerName(null)
        setSelectedColour(player.colour)
    }
    const showButtons = (player.name !== playerName && playerName !== null) || selectedColour !== player.colour;
    return (
        <div className="w-full h-full p-2 ">
            <div className="relative flex flex-col items-center justify-center w-full h-full border-4 border-gray-300 rounded-lg">
                <input placeholder={player.name} className="w-5/6 py-1 text-2xl text-center text-black rounded-full" type='text' value={playerName} maxLength={20} onChange={(e)=>setPlayerName(e.target.value)}/>
                <ColourSelector selectedColour={selectedColour} setSelectedColour={setSelectedColour}/>
                {showButtons && (<div className="absolute bottom-0 flex items-center justify-center pb-2 mt-4 space-x-2">
                    <Button onClick={undo} outlineButton text="Undo" />
                    <Button onClick={updatePlayer} text="Save" />
                </div>)}
            </div>
            
        </div>
    )
}
export default PlayerTile;