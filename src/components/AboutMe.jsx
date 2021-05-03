function AboutMe() {
    return (
        <div className="section" id="section2">
            <video autoplay="true" muted loop className="background-video"  src={require("./skate.webm").default}></video>
            <h1>About me</h1>
            <div className="grid">
                <div className="panel">
                    <h1>Music I like</h1>
                    <center>
                        <iframe src="https://open.spotify.com/embed/playlist/25aDmC5kYsouvRUmInjCEe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </center>
                </div>
                <div className="panel">
                    <h1>Stats</h1>
                    <p><b>Name</b>: Collwyn Bevan</p>
                    <p><b>Favourite Food</b>: Pelmeni</p>
                    <p><b>Languages</b>: English, Russian, Broken French</p>
                    <p><b>Coding skill</b>: Epic</p>
                </div>
                <div className="panel">
                    <h1>What I like</h1>
                    <p>Gigs! (RIP)</p>
                    <p>Snowboarding</p>
                    <p>Trying to skateboard</p>
                    <p>Video Games (I mean just look at me)</p>
                    <p>Travel (who doesn't)</p>
                </div>
            </div>
            <center>
                <h1>Nice to meet you!</h1>
            </center>
        </div>
    )
}

export default AboutMe