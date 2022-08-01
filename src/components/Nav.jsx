import instagramLogo from '../asset/instagram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeIcon from '../Icons/HomeIcon';
import CommentIcon from '../Icons/CommentIcon';
import CompassIcon from '../Icons/CompassIcon';


const Nav = () => {
    return (
        <nav>
            <button className='Logo'>
                <img src={instagramLogo} alt="logo"/>
            </button>
            <input type="text" className='search' placeholder='search' />
            <span className="nav-links">
                <button>
                    {/* <i className='fas fa-home' /> */}
                    <HomeIcon />
                </button>
                <button>
                    {/* <i className='fas fa-comment-alt' /> */}
                    <CommentIcon />
                </button>
                <button>
                    {/* <i className='fas fa-compass' /> */}
                    <CompassIcon />
                </button>
                <button>
                    <i className='fas fa-heart' />
                </button>
            </span>
        </nav>
    )
}

export default Nav
