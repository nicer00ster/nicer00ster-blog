import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../actions'
import Sidebar from './Sidebar';


// import Nicer00ster from 'svg-react-loader?name=Nicer00ster!../static/images/svg/nav/nicer00ster.svg';
// import Smartphone from 'svg-react-loader?name=Smartphone!../static/images/svg/nav/smartphone.svg';
// import House from 'svg-react-loader?name=House!../static/images/svg/nav/house.svg';
// import Telephone from 'svg-react-loader?name=Telephone!../static/images/svg/nav/telephone.svg';


const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div className={ isOpen ? "navbar open" : "navbar" }>
          <ul className="navbar__links">
            <li className="navbar__item">
              <Link to="/">
                {/* <Nicer00ster className="logo" width={200} height={100}/> */}
              </Link>
              <Sidebar />
            </li>
          </ul>
          <ul className="navbar__navigation">
            <li className="navbar__item" onClick={ toggleMenu }>
              <Link activeClassName="active" to="/">
                <a className="navbar__link">
                  {/* <House className="navbar__item--svg" width={100} height={50} /> */}
                  <span className="navbar__item--text">Home</span>
                </a>
              </Link>
            </li>
            <li className="navbar__item" onClick={ toggleMenu }>
              <Link activeClassName="active" to="/work">
                <a className="navbar__link">
                  {/* <Smartphone className="navbar__item--svg" width={100} height={50} /> */}
                  <span className="navbar__item--text">Work</span>
                </a>
              </Link>
            </li>
            <li className="navbar__item" onClick={ toggleMenu }>
              <Link activeClassName="active" to="/contact">
                <a className="navbar__link">
                  {/* <Telephone className="navbar__item--svg" width={100} height={50} /> */}
                  <span className="navbar__item--text">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
      </div>
      <Sidebar isOpen={isOpen} />
    </div>
  )
}

export default connect(function(state) {
  return { isOpen: state.app.open }
}, { toggleMenu })(Navbar);
