export default function Portfolio() {
    return (
        <>
            <div className="port-div">
                <h1>Work</h1>
                <div className="work-container">
                    <a href="https://pokeyake.herokuapp.com/" target="_blank">
                        <div className="pokewiki">
                            <h2>PokeWiki</h2>
                        </div>
                    </a>
                    <a href="https://yakesale.herokuapp.com/items" target="_blank">
                        <div className="yakesale">
                            <h2>Yakesale</h2>
                        </div>
                    </a>
                    <a href="https://browgames.herokuapp.com/" target="_blank">
                        <div className="browgames">
                            <h2>Browgames</h2>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}