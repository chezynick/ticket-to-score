import { useState } from "react";
import Button from "../../components/Button";
import FullWidthButton from "../../components/FullWidthButtons";
import PointsAddedModal from "../../components/PointsAddedModal";
import colours from "../../utils/colours";

const PlayerScoreSheet = ({onClick, players, currentPlayer, setPlayers}) => {
    const [culmulativeScore, setCulmativeScore] = useState(0)
    const [destinationCardWorth, setDestinationCardWorth] = useState(0)
    const [showSuccessModal, setShowSuccessModal] = useState(null, );
    const removePoints = () => {
        const newCulmScore = Number(culmulativeScore) - Number(destinationCardWorth);
        setShowSuccessModal({positive: false , pointsToAdd : destinationCardWorth})
        setTimeout(()=>setShowSuccessModal(null), 1200)
        setCulmativeScore(newCulmScore)
        setDestinationCardWorth(0);
    }
    const addPoints = () => {
        const newCulmScore = Number(culmulativeScore) + Number(destinationCardWorth);
        setShowSuccessModal({positive: true , pointsToAdd : destinationCardWorth})
        setTimeout(()=>setShowSuccessModal(null), 1200)
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
    return ( <div className="flex flex-col justify-between w-full h-screen">

        <div className="flex flex-col justify-center px-4">
        <div className="w-full py-1 text-center">Add each destination card in turn for</div>
        <div className="flex justify-center pb-4 text-5xl"><h1>{currentPlayer.name}</h1></div> 
        <div className={`${colours.find(col => col.id === currentPlayer.colour).bg } w-full h-12`}/>
        <input className="my-6 text-5xl text-center text-gray-800 " type="numeric" min="1" max='99' pattern="[0-9]*" maxLength={2} value={destinationCardWorth} onChange={(e)=>setDestinationCardWorth(e.target.value)}/>
       
        {isNaN(destinationCardWorth) ? <div className="w-full h-6 py-2 text-center text-gray-300">Please enter a valid number</div> :
       <div className="h-6 text-gray-300"/> }

        <div className="flex justify-between w-full py-6">
            <Button outlineButton text="Incomplete" onClick={removePoints} disabled={isNaN(destinationCardWorth)}/>
            <Button  text="Completed" onClick={addPoints} disabled={isNaN(destinationCardWorth)}/>
        </div>
        </div>
        {showSuccessModal  && (<PointsAddedModal pointsInfo={showSuccessModal}/>)}
        <div className="grid w-full grid-cols-2 ">
            <FullWidthButton outlineButton text="Reset player score" onClick={()=>{
                setDestinationCardWorth(0)}
                }/>
            <FullWidthButton  text="Next Player" onClick={completePlayerScoring}/>
        </div>
        
    </div> );
}
 
export default PlayerScoreSheet;