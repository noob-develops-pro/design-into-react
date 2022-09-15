import React from 'react';

const NavItem = ({ cls = '', txt }) => {
  return <span className={`nav__item ${cls}`}>{txt}</span>;
};

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav__left'>
          <NavItem cls={'active'} txt={'Home'} />
          <NavItem cls={''} txt={'About Us'} />
          <NavItem cls={''} txt={'Our Story'} />
        </div>
        <div className='nav-right'>
          <NavItem txt={'cajun/Creole Recipes'} />
          <NavItem txt={'Contact Us'} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
