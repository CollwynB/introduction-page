import { useEffect, useRef } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
function Cloudwyn() {
    const videoRef = useRef(null);
    useEffect(() => {
        getVideo()
    }, [])
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 270 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    return (
        <div className="section" id="section1">
            <div className="columns">
                <div className="content">
                    <h1>
                        3 Years
                    </h1>
                    <p>
                        That's how long I've been at IBM for.
                    </p>
                    <p>React</p>
                    <p>Vue</p>
                    <p>Node</p>
                    <p>IBM Cloud stuff</p>
                </div>
                <div className="img-container">
                    <div>
                        <p>How it started</p>
                        <img className="cloudwyn" src={require("../shaman.png").default} alt="Me just before I joined" />
                    </div>
                    <div>
                        <p>How it's going</p>
                        <div className="cloudwyn cut">
                            <video autoPlay ref={videoRef}></video>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                className="link"
                to="section2"
                smooth={'true'}
                duration={800}
            ><div className="arrow"></div></Link>
        </div>
    )
}
export default Cloudwyn