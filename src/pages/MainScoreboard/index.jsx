import { useState } from "react";
import PlayerScoreTile from "../../components/PlayerScoreTile";
import PointsAddedModal from "../../components/PointsAddedModal";
import TrainSelector from "../TrainSelector";

const MainScoreboard = ({players, setPlayers}) => {
    const [selectedPlayer, setSelectedPlayer ] = useState(null)
    const [pointsAddedInfo, setPointsAddedInfo] = useState(null);
    const addPointsToPlayer = (trainSelection) => {
        setPointsAddedInfo({pointsToAdd: trainSelection.pointsToAward, positive: true})
        setTimeout(()=>setPointsAddedInfo(null), 1200)
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
            {pointsAddedInfo && <PointsAddedModal pointsInfo={pointsAddedInfo}/>}
            {selectedPlayer && <TrainSelector selectedPlayer={selectedPlayer} addPointsToPlayer={addPointsToPlayer}/>}
            {!selectedPlayer &&
            <div className="grid w-full h-full grid-cols-1 grid-rows-4">
             {enabledPlayers.map(player => <PlayerScoreTile player={player} setPlayers={setPlayers} setSelectedPlayer={setSelectedPlayer} key={player.id}/>)}</div>}
        </div>
     );
}
 
export default MainScoreboard;