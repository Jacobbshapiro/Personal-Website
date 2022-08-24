export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='bit-1'>
                    <img src='https://imgur.com/W5uyGCt.png' />
                </div>
                <div className="about">
                    <h1>About Me!</h1>
                    <p className="intro">My name is Jacob Shapiro. I am a software engineer who's 
                    <br /> primary focus is backend. I love to make a change in the world 
                    <br /> and develop applications that help people and make their lives easier.
                    <br />
                    <br /> On my downtime my favorite thing to do is play mith my dog but 
                    <br /> aside from that I love food and coffee.</p>
                </div>
                <div className='bit-2'>
                    <img src='https://imgur.com/AgBiDdH.png' />
                </div>
            </div>
            <div className="lang-div">
                <h1>Languages</h1>
                <div>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>SQL</li>
                </div>
            </div>
            <div className="frame-div">
                <h1>Libraries and Frameworks</h1>
                <div>
                    <li>Django</li>
                    <li>Express.js</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </div>
            </div>
        </>
    )
}