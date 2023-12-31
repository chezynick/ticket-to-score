import Button from "../Button";

const Navigation = ({pageNumber, setPage,sortOrderAndRemoveUnusedPlayers }) => {
    if(pageNumber === 0 || pageNumber === 4 ) return null;
    const buttonWording = ['','Start','Complete game', 'Award longest train']
    return ( 
        <div className="flex w-full py-2 justify-evenly">
           <Button outlineButton text="Back" onClick={()=>setPage(pageNumber - 1)} />
            <Button text={buttonWording[pageNumber]} onClick={()=>{
                if(pageNumber === 3){
                    setPage(4)
                   return sortOrderAndRemoveUnusedPlayers()
                }
                setPage(pageNumber + 1)}} />
        </div>
     );
}
 
export default Navigation;