import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import Hamburger from '-!svg-react-loader?name=Menu!../../images/svg/nav/menu.svg';
import Close from '-!svg-react-loader?name=Close!../../images/svg/nav/close.svg';

const Sidebar = ({ toggleMenu, isOpen }) => {
  return (
    <div className="navbar__menu hamburger">
      <a onClick={toggleMenu}>
        {!isOpen ? <Hamburger className="navbar__item--svg" /> : <Close className="navbar__item--svg" />}
      </a>
    </div>
  )
}

export default connect(function(state) {
  return { isOpen: state.app.open }
}, { toggleMenu })(Sidebar);
