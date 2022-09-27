export default function Portfolio() {
    return (
        <>
            <div className="port-div">
                <h1>Work</h1>
                <div className="work-container">
                    <div className="grow">
                            <h2>PokeWiki</h2>
                        <a href="https://pokeyake.herokuapp.com/" target="_blank">
                            <div className="pokewiki"></div>
                            <p>Cutsom Pokedex that allows users to browse or search for their favorite Pokemon.</p>
                        </a>
                    </div>
                    <div className="grow">
                            <h2>Yakesale</h2>
                        <a href="https://yakesale.herokuapp.com/items" target="_blank">
                            <div className="yakesale"></div>
                            <p>Online public auction site.</p>
                        </a>
                    </div>
                    <div className="grow">
                            <h2>Browgames</h2>
                        <a href="https://browgames.herokuapp.com/" target="_blank">
                            <div className="browgames"></div>
                                <p>Social app to post and play users browser games.</p>
                        </a>
                    </div>
                    <div className="grow">
                            <h2>Flight Tracker</h2>
                        <a href="https://flights-around-the-globe.herokuapp.com/flights" target="_blank">
                            <div className="flight-tracker"></div>
                                <p>Application that lets users record flights and tickets they have used or purchased.</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}