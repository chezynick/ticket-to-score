import AddPlayerTile from "../../components/AddPlayerTile";
import PlayerTile from '../../components/PlayerTile';

const SelectPlayers = ({ players, setPlayers }) => {
    const chosenPlayers = players.filter(player => player.enabled)
    return (<div className="w-full h-full pb-8">
        <div className="flex justify-center w-full py-1">SELECT PLAYERS</div>
        <div className="grid w-full h-full grid-cols-2">
    {chosenPlayers.map(player => <PlayerTile key={player.name} player={player} setPlayers={setPlayers} players={players}/>)}
    {chosenPlayers.length !== 4 && <AddPlayerTile setPlayers={setPlayers} players={players}/>}
        </div>
        
    </div>)
}
export default SelectPlayers;