const AddPlayerTile = ({setPlayers, players}) => {

    const handleClick = () => {
        const firstUnEnabledPlayer = players.find((player)=> player.enabled).name;
        const newPlayers = players.map(player => {
            if(player.name === firstUnEnabledPlayer){
                return {...player, enabled: true}
            }
            return player
        })
        setPlayers(newPlayers)
    }
    return (      
           <div className="w-full h-full  p-2 ">
    <div className="w-full flex flex-col justify-center rounded-lg items-center h-full border border-gray-300">
    <button className="text-xl" onClick={() => handleClick()}>Add player</button>

    </div>
    
</div> );
}
 
export default AddPlayerTile;