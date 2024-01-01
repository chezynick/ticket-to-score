import { useEffect } from "react";
import { useState } from "react";

const FinalScore = ({players}) => {
    const [showFinalScore, setShowFinalScore ] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setShowFinalScore(true),3000)
    },[])
    const organisedPlayers = players.sort((a,b) => a.score > b.score ? -1 : 1,0); 
    const theWinner = organisedPlayers[0]
    const isDraw = players.filter(player => player.score === theWinner.score).length > 1;
    const theRest = players.filter(player => player.id !== theWinner.id)

    return ( 
        <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen">
            {!showFinalScore ? <div className="text-xl tex-gray-300">
                And the winner is....</div> : <div className="flex flex-col items-center justify-center">
                        {isDraw && <div>Its a draw!</div>}
                        {isDraw && organisedPlayers.map(player => (<div className="text-3xl" key={player.id}>{player.name}: {player.score}</div>))}
                       
                        {!isDraw && (<div className="pb-4 text-5xl text-gray-300">{theWinner.name}: {theWinner.score}</div>)}
                        {!isDraw && theRest.map(player => (<div className="text-3xl" key={player.id}>{player.name}: {player.score}</div>))}
                    </div>}

        </div>
     );
}
 
export default FinalScore;