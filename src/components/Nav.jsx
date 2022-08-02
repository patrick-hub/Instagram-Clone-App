import instagramLogo from '../asset/instagram.png'
import HomeIcon from '../Icons/HomeIcon';
import CommentIcon from '../Icons/CommentIcon';
import CompassIcon from '../Icons/CompassIcon';
import HeartIcon from '../Icons/HeartIcon';


const Nav = () => {
    return (
        <nav>
            <button className='Logo'>
                <img src={instagramLogo} alt="logo"/>
            </button>
            <input type="text" className='search' placeholder='search' />
            <span className="nav-links">
                <button>
                    <HomeIcon/>
                </button>
                <button>
                    <CommentIcon />
                </button>
                <button>
                    <CompassIcon />
                </button>
                <button>
                    <HeartIcon />
                </button>
            </span>
        </nav>
    )
}

export default Nav
