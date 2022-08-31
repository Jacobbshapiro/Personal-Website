export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='bit-1'>
                    <img className="bit" src='https://imgur.com/W5uyGCt.png' alt="img."/>
                </div>
                <div className="about">
                    <h1>About Me!</h1>
                    <p className="intro">I am Jacob Shapiro. I am a full stack software engineer who's 
                    <br /> primary focus is backend. I love to make a change in the world 
                    <br /> and develop applications that help people and make their lives easier.
                    <br />
                    <br /> On my downtime my favorite thing to do is play mith my dog but 
                    <br /> aside from that I love food and coffee.</p>
                </div>
                <div className='bit-2'>
                    <img className="bit" src='https://imgur.com/AgBiDdH.png' alt="img."/>
                </div>
            </div>
            <div className="lang-container">
                <h1>Languages</h1>
                <div>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>SQL</li>
                </div>
                <div className="lang-img">
                    <img id="lang-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="img." />
                    <img id="lang-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="img." />
                    <img id="lang-img" src="https://quintagroup.com/cms/js/js-image/javascript-logo.png" alt="img." />
                    <img id="lang-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="img." />
                    <img id="lang-img" src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315ssl=1" alt="img." />
                </div>
            </div>
            <div className="frame-container">
                <h1>Libraries and Frameworks</h1>
                <div>
                    <li>Django</li>
                    <li>Express.js</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </div>
                <div className="frame-img">
                    <img id="lang-img" src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="img." />
                    <img id="lang-img" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="img." />
                    <img id="lang-img" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png" alt="img." />
                    <img id="lang-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png" alt="img." />
                    <img id="lang-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="img." />
                </div>
            </div>
        </>
    )
}