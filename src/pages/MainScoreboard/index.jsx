import { useState } from "react";
import PlayerScoreTile from "../../components/PlayerScoreTile";
import TrainSelector from "../TrainSelector";

const MainScoreboard = ({players, setPlayers}) => {
    const [selectedPlayer, setSelectedPlayer ] = useState(null)
    const addPointsToPlayer = (trainSelection) => {
       const updatedPlayers = players.map(player => {
        if(player.id === selectedPlayer.id){
            return {...player, score: player.score + trainSelection.pointsToAward, trainsRemaining: player.trainsRemaining - trainSelection.numberOfTrains}
        }
        return player
       });
       setPlayers(updatedPlayers);
       setSelectedPlayer(null)
    }
    const enabledPlayers = players.filter(player => player.enabled)

    return ( 
        <div className="w-screen h-full ">
            {selectedPlayer && <TrainSelector selectedPlayer={selectedPlayer} addPointsToPlayer={addPointsToPlayer}/>}
            {!selectedPlayer &&
            <div className="grid w-full h-full grid-cols-1 grid-rows-4">
             {enabledPlayers.map(player => <PlayerScoreTile player={player} setPlayers={setPlayers} setSelectedPlayer={setSelectedPlayer} key={player.id}/>)}</div>}
        </div>
     );
}
 
export default MainScoreboard;