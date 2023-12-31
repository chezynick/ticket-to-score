import { useState } from "react";
import PlayerScoreSheet from "../PlayerScoreSheet";

const FinalCountUp = ({players, setPlayers }) => {
    const sortedPlayerIds = players.map(player => player.id)
    const [playerToScore, setPlayerToScore] = useState(0)
    const thisPlayer = players.find(player => player.id === sortedPlayerIds[playerToScore])
    if(playerToScore === sortedPlayerIds.length)return (
        <div>
        <div>{players[0].name}: {players[0].score}</div>
        <div>{players[1].name}: {players[1].score}</div>
        </div>
    )
    return ( <div className='w-screen h-screen'>
        <PlayerScoreSheet onClick={()=>setPlayerToScore(playerToScore + 1)} players={players} currentPlayer={thisPlayer} setPlayers={setPlayers}/>
    

    </div> );
}
 
export default FinalCountUp;