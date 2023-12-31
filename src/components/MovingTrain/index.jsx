import Carraige from "../Carraige";
import Engine from "../Engine";

const MovingTrain = ({chosenColour,startTrain, top}) => {
    return ( 
        <div className={`absolute ${top} h-4 transition-all duration-[2000ms] ease-in-out flex ${startTrain ? 'left-[105%]' : '-left-[150px]'}`}>
           <div className={`flex items-end justify-center h-10  ${chosenColour}`}> <Carraige /><Carraige /><Engine /></div>
            </div>
     );
}
 
export default MovingTrain;