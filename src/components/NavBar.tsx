import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import style from'../ui/navBar.module.css'
const NavBar = () => {
  return (
     // Main container for navigation bar
    <div className={style.navHome}>
        <ul >
                <li ><img src={logo} alt='logo'/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">About</Link></li>
                <li><Link to="/book">Book</Link></li>
                <li><Link to="/login">Sing Up</Link></li>
        </ul>
        </div>
    
  )
}

export default NavBar