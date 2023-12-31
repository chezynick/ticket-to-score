const TrainHistory = ({history}) => {
    const oneTrain = history.filter(hist => hist === 1);
    const twoTrain = history.filter(hist => hist === 2);
    const threeTrain = history.filter(hist => hist === 3);
    const fourTrain = history.filter(hist => hist === 4);
    const fiveTrain = history.filter(hist => hist === 5);
    const sixTrain = history.filter(hist => hist === 6);
    return ( 
        <div className="grid w-full grid-cols-2 px-2 text-xs">
            {oneTrain.length > 0 && (<div className="w-full text-center">{oneTrain.length} x 1</div>)}
            {twoTrain.length > 0 && (<div className="w-full text-center">{twoTrain.length} x 2</div>)}
            {threeTrain.length > 0 && (<div className="w-full text-center">{threeTrain.length} x 3</div>)}
            {fourTrain.length > 0 && (<div className="w-full text-center">{fourTrain.length} x 4</div>)}
            {fiveTrain.length > 0 && (<div className="w-full text-center">{fiveTrain.length} x 5</div>)}
            {sixTrain.length > 0 && (<div className="w-full text-center">{sixTrain.length} x 6</div>)}
        </div>
     );
}
 
export default TrainHistory;