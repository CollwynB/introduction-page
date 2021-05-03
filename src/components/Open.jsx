import ScrollButton from 'react-scroll-button'
import { Link, animateScroll as scroll } from "react-scroll";

function Open() {
    return (
    <div className="big-image">
        <div className="overlay">
            Hello.
            <br/>
            <Link 
            className="link"
            to="section1"     
            smooth={'true'}
            duration={800}
            ><div className="arrow"></div></Link>
        </div>

    </div>
    )
}

export default Open