import { useState } from "react";
import FinalScore from "../FinalScore";
import PlayerScoreSheet from "../PlayerScoreSheet";

const FinalCountUp = ({players, setPlayers }) => {
    const sortedPlayerIds = players.map(player => player.id)
    const [playerToScore, setPlayerToScore] = useState(0)
    const thisPlayer = players.find(player => player.id === sortedPlayerIds[playerToScore])
    if(playerToScore === sortedPlayerIds.length)return (
       <FinalScore players={players}/>
    )
    return ( <div className='w-screen h-screen'>
        <PlayerScoreSheet onClick={()=>setPlayerToScore(playerToScore + 1)} players={players} currentPlayer={thisPlayer} setPlayers={setPlayers}/>
    

    </div> );
}
 
export default FinalCountUp;