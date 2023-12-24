import { useState } from "react"
import SelectPlayers from "./pages/SelectPlayers"
import Welcome from "./pages/Welcome"

function App() {
  const [page, setPage] = useState(0)
  const [players, setPlayers] = useState([
  { id: 1, name: 'player one', colour: 0, score: 0, enabled: true},
  {  id: 2, name: 'player two', colour: 1, score: 0, enabled: true},
  {  id: 3, name: 'player three', colour: 2, score: 0, enabled: false},
  {  id: 4, name: 'player four', colour: 3, score: 0, enabled: false}
])

  return (
    <div className="text-white m-0 p-0 flex flex-col justify-between w-screen h-screen bg-gradient-to-br from-gray-900 to-gray-700">
     {page === 0 && ( <Welcome setPage={setPage}/>)}
     {page === 1 && (  <SelectPlayers players={players} setPlayers={setPlayers}/>)}
     <div>navigation</div>
    </div>
  )
}

export default App
