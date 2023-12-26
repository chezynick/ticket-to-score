import Button from "../Button";

const Navigation = ({pageNumber, setPage }) => {
    if(pageNumber === 0 ) return null;
    const buttonWording = ['','Start','Complete game', 'Award longest train']
    return ( 
        <div className="flex w-full py-2 justify-evenly">
           <Button outlineButton text="Back" onClick={()=>setPage(pageNumber - 1)} />
            <Button text={buttonWording[pageNumber]} onClick={()=>setPage(pageNumber + 1)} />
        </div>
     );
}
 
export default Navigation;