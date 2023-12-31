import { useState } from "react";
import Button from "../../components/Button";

const PlayerScoreSheet = ({onClick, players, currentPlayer, setPlayers}) => {
    const [culmulativeScore, setCulmativeScore] = useState(0)
    const [destinationCardWorth, setDestinationCardWorth] = useState(0)
    const removePoints = () => {
        const newCulmScore = Number(culmulativeScore) - Number(destinationCardWorth);
        setCulmativeScore(newCulmScore)
        setDestinationCardWorth(0);
    }
    const addPoints = () => {
        const newCulmScore = Number(culmulativeScore) + Number(destinationCardWorth);
        setCulmativeScore(newCulmScore)
        setDestinationCardWorth(0);
    }
    const completePlayerScoring = ()=> {
        setPlayers(players.map(player => {
            if(player.id === currentPlayer.id){
                const newScore = Number(player.score) + Number(culmulativeScore)
                return {...player, score: newScore}
            }
            return player
        }));
        setCulmativeScore(0);
        setDestinationCardWorth(0)
        onClick();
    }
    return ( <div className="flex flex-col justify-between w-full ">
        <div className="flex flex-col justify-center">
        <h1>{currentPlayer.name}</h1>
        <input className="mx-4 text-gray-800" value={destinationCardWorth} type='text' onChange={(e)=>setDestinationCardWorth(e.target.value)}/>
        <div className="flex justify-between w-full py-6">
            <Button outlineButton text="Incomplete" onClick={removePoints}/>
            <Button  text="Completed" onClick={addPoints}/>
        </div>
        </div>

        <div className="flex justify-between w-full py-6">
            <Button outlineButton text="Reset player score" onClick={()=>{
                setDestinationCardWorth(0)}
                }/>
            <Button  text="Next Player" onClick={completePlayerScoring}/>
        </div>
        
    </div> );
}
 
export default PlayerScoreSheet;