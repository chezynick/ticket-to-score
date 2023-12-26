import { useState } from "react";

const FinalCountUp = ({players, setPlayers }) => {
    const enabledPlayers = players.filter(player => player.enabled);
    const sortedPlayerIds = enabledPlayers.sort((a,b) => a.score < b.score ? -1 : 1,0).map(player => player.id)
    const [playerToScore, setPlayerToScore] = useState(0)
    const thisPlayer = players.find(player => player.id === sortedPlayerIds[playerToScore])
    if(playerToScore === sortedPlayerIds.length)return (
        <div>final score here</div>
    )
    return ( <div>
        <div>player to score</div>
        <div>{thisPlayer.name}</div>
        <button onClick={()=>setPlayerToScore(playerToScore + 1)}>next</button>

    </div> );
}
 
export default FinalCountUp;