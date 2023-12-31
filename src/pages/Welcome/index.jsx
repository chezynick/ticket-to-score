import { useState } from "react";
import MovingTrain from "../../components/MovingTrain";

const Welcome = ({setPage}) => {
    const [startTrain, setStartTrain] = useState(false)
  const handleClick = ()=>{
        setTimeout(()=> setStartTrain(true),100)
        setTimeout(()=>setPage(1),2000)
    }
    return (
        <div className="relative flex items-center justify-center w-screen h-full overflow-hidden">
             <MovingTrain chosenColour="text-green-500" startTrain={startTrain} top='top-[20%]'/>
             <MovingTrain chosenColour="text-blue-500" startTrain={startTrain} top='top-[30%]'/>
            <button onClick={()=>handleClick()} className="text-xl text-gray-300">Start game</button>
            <MovingTrain chosenColour="text-red-500" startTrain={startTrain} top='top-[70%]'/>
            <MovingTrain chosenColour="text-yellow-500" startTrain={startTrain} top='top-[85%]'/>
        </div>
    )
};
export default Welcome;