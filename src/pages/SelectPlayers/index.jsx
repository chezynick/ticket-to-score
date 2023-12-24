import AddPlayerTile from "../../components/AddPlayerTile";
import PlayerTile from '../../components/PlayerTile';

const SelectPlayers = ({ players, setPlayers }) => {
    const chosenPlayers = players.filter(player => player.enabled)
    return (<div className="w-full h-full pb-12">
        <div className="w-full flex justify-center py-1">SELECT PLAYERS</div>
        <div className="grid grid-cols-2 h-full w-full">
    {chosenPlayers.map(player => <PlayerTile key={player.name} player={player} setPlayers={setPlayers} players={players}/>)}
    {chosenPlayers.length !== 4 && <AddPlayerTile setPlayers={setPlayers} players={players}/>}
        </div>
        
    </div>)
}
export default SelectPlayers;