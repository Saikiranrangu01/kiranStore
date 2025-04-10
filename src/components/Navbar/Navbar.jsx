import React, {useContext, useState, useRef} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

  

const Navbar = ({setShowLogin}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext);

    const homeRef = useRef(null);
    const menuRef = useRef(null);
    const mobileRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };


  return (
    
    <div className='navbar'>

      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>



      <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link>
      <ul className={`navbar-menu ${menuOpen?"open":""}`}>
        <Link to='/'><li onClick={()=>{setMenu("Home");scrollToSection(homeRef)}} className={menu==="Home"?"active":""}>Home</li></Link>
        <Link to="/menu"><li onClick={()=>{setMenu("menu");scrollToSection(homeRef)}} className={menu ==="menu"?"active":""}>menu</li></Link>
        <Link to="/mobile-app"><li onClick={()=>{setMenu("mobile-app");scrollToSection(homeRef)}} className={menu ==="mobile-app"?"active":""}>mobile-app</li></Link>
        <Link to="/contact-us"><li onClick={()=>{setMenu("contact-us");scrollToSection(homeRef)}} className={menu ==="contact-us"?"active":""}>contact-us</li></Link>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>

      </div> 
      
    </div>
  )
}

export default Navbar