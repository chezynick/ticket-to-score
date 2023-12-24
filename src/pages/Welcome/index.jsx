const Welcome = ({setPage}) => {
    return (
        <div>
            <button onClick={()=>setPage(1)}>Start game</button>
        </div>
    )
};
export default Welcome;