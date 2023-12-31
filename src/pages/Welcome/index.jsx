import { useState } from "react";
import MovingTrain from "../../components/MovingTrain";
import useSound from 'use-sound';
import Horny from '../../assets/horny.flac';

const Welcome = ({setPage}) => {
    const [startTrain, setStartTrain] = useState(false)
    const [playHorn] = useSound(
        Horny
      );
  const handleClick = ()=>{
    playHorn();
        setTimeout(()=> setStartTrain(true),100)
        setTimeout(()=>setPage(1),2000)
    }
    return (
        <div className="relative flex items-center justify-center w-screen h-full overflow-hidden">
             <MovingTrain chosenColour="text-green-500" startTrain={startTrain} top='top-[20%]'/>
             <MovingTrain chosenColour="text-blue-500" startTrain={startTrain} top='top-[30%]'/>
            <button onClick={()=>handleClick()} className="text-5xl text-gray-300">Start game</button>
            <MovingTrain chosenColour="text-red-500" startTrain={startTrain} top='top-[70%]'/>
            <MovingTrain chosenColour="text-yellow-500" startTrain={startTrain} top='top-[85%]'/>
        </div>
    )
};
export default Welcome;