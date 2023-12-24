import { useEffect } from "react";
import { useState } from "react";

const Welcome = ({setPage}) => {
    const [startTrain, setStartTrain] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setStartTrain(true),1000)
    },[])
    return (
        <div className="flex relative h-full w-full justify-center items-center">
            <div className={`absolute  top-10 h-4 transition-all duration-[1500ms] ease-in-out flex  bg-red-400 ${startTrain ? 'left-[105%]' : '-left-[50px]'}`}>train</div>
            <button onClick={()=>setPage(1)} className="text-xl text-gray-300">Start game</button>
        </div>
    )
};
export default Welcome;