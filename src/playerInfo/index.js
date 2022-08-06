const PlayerInfo = (props) => {
    const showData = () => {
        console.log(props.props.playerData.puuid)
    }
    return (
        <>
            <h1>PlayerInfo</h1>
            <button onClick={showData}>See data</button>
        </>
    )
}

export default PlayerInfo;