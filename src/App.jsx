import { useState } from "react"
import Navigation from "./components/Navigation"
import MainScoreboard from "./pages/MainScoreboard"
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
    <div className="flex flex-col justify-between w-screen h-screen p-0 m-0 text-white bg-gradient-to-br from-gray-900 to-gray-700">
      <div className='h-[90%]'>
     {page === 0 && ( <Welcome setPage={setPage}/>)}
     {page === 1 && (  <SelectPlayers players={players} setPlayers={setPlayers}/>)}
     {page === 2 && ( <MainScoreboard players={players} setPlayers={setPlayers}/>)}
     </div>
     <Navigation pageNumber={page} setPage={setPage}/>
    </div>
  )
}

export default App
