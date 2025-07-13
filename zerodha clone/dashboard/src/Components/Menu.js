import { useState } from "react";
import React  from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu ] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen]=useState(false);

  const handleMenuClick = (index) =>{
    selectedMenu(index);
  };
  
  const handleProfileClick = (index) =>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuclass = "menu";
  const activeMenuClass = "menu selected";



  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
          <Link style={{textDecoration:"none"}} to="/" onClick={()=> handleMenuClick(0)}>
          
            <p className={selectedMenu===0 ? activeMenuClass : menuclass}>Dashboard</p>
          
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/Orders" onClick={()=> handleMenuClick(1)}>
          
            <p className={selectedMenu===1 ? activeMenuClass : menuclass}>Orders</p>
          
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=> handleMenuClick(2)}>
          
            <p className={selectedMenu===2 ? activeMenuClass : menuclass}>Holdings</p>
          
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=> handleMenuClick(3)}>
          
            <p className={selectedMenu===3 ? activeMenuClass : menuclass}>Positions</p>
          
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=> handleMenuClick(4)}>
          
            <p className={selectedMenu===4 ? activeMenuClass : menuclass}>Funds</p>
          
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={()=> handleMenuClick(5)}>
          
            <p className={selectedMenu===5 ? activeMenuClass : menuclass}>Apps</p>
          
          </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;