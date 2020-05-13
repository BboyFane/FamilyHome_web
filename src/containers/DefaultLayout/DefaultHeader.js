import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
            
                <Button color="light" size="lg" onClick={event => window.location.href='http://localhost:3000/#/dashboard'}>FamilyHome</Button>
        

        <AppSidebarToggler className="d-md-down-none" display="lg" />


        <Nav className="ml-auto" navbar>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Compte</strong></DropdownItem>
              <DropdownItem onClick={event =>  window.location.href='http://localhost:3000/#/users/0'}><i className="fa fa-user"></i>Profile</DropdownItem>
              <DropdownItem onClick={event =>  window.location.href='http://localhost:3000/#/abonnement'}><i className="fa fa-usd"></i> Payments</DropdownItem>
            
              <DropdownItem onClick={e => window.location.href="http://127.0.0.1:5500/index.html"}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
